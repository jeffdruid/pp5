import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleMount = async () => {
    try {
      // Fetch access token from localStorage
      const token = localStorage.getItem('access_token');  
      console.log("Access token retrieved:", token);
      
      // If no token is found, prompt for login
      if (!token) {
        console.log("No access token found. Redirecting to login.");
        history.push("/signin");
        return;
      }

      // Send token in Authorization header
      const { data } = await axiosRes.get("dj-rest-auth/user/", {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      console.log("User data retrieved successfully:", data);
      setCurrentUser(data);
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  useMemo(() => {
    axiosReq.interceptors.request.use(
      async (config) => {
        try {
          const refresh_token = localStorage.getItem('refresh_token');
          console.log("Attempting token refresh with refresh_token:", refresh_token);
          
          // Send refresh token to refresh endpoint
          const { data } = await axios.post("/dj-rest-auth/token/refresh/", { refresh: refresh_token });
          
          // Update tokens in localStorage
          localStorage.setItem('access_token', data.access);
          localStorage.setItem('refresh_token', data.refresh);
          console.log("Tokens refreshed successfully.");
          
          config.headers["Authorization"] = `Bearer ${data.access}`;
        } catch (err) {
          console.error("Failed to refresh token:", err);
          setCurrentUser(null);
          history.push("/signin");
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            const refresh_token = localStorage.getItem('refresh_token');
            console.log("401 Unauthorized. Refreshing token with:", refresh_token);
            
            const { data } = await axios.post("/dj-rest-auth/token/refresh/", { refresh: refresh_token });
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            return axios(err.config);  // Retry the original request with new token
          } catch (err) {
            console.error("Token refresh failed after 401 error:", err);
            setCurrentUser(null);
            history.push("/signin");
          }
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
