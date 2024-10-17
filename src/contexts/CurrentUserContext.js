import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
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
      const { data } = await axios.get("/dj-rest-auth/user/", {
        withCredentials: true,  // Ensure session cookie is sent
      });
  
      console.log("User data retrieved successfully:", data);
      setCurrentUser(data);
    } catch (err) {
      console.error("Error fetching user:", err);
      if (err.response?.status === 401) {
        console.log("Session expired or user not authenticated. Redirecting to login.");
        history.push("/signin");
      }
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
