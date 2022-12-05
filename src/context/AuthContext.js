import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const signIn = () => {
    setIsLoading(false);
    setUserToken("token");
  };

  const singOut = () => {
    setIsLoading(false);
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ signIn, singOut, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
