import { createContext, useContext, useMemo } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // call this to get user token
    const userToken = localStorage.getItem(import.meta.env.VITE_REACT_APP_TOKEN);
    // call this to get user role
    const userRole = userToken?jwt_decode(userToken)['https://hasura.io/jwt/claims']['x-hasura-default-role']:''
    // call this function to set user token
    const login = (token) => {
         localStorage.setItem(import.meta.env.VITE_REACT_APP_TOKEN,token);
         window.location = "/";
    };
    // call this function to sign out logged in user
    const logout = () => {
        localStorage.removeItem(import.meta.env.VITE_REACT_APP_TOKEN);
        window.location = "/login";
    };

    const value = useMemo(
        () => ({
            userToken,
            userRole,
            login,
            logout
        }),
        [userToken]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};