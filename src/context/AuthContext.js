import { createContext, useState } from "react";
import { authApi, registerApi } from "../../api/AxiosApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const setUserData = async (FirstName, LastName, Email, Password) => {
    try {
      console.log("first");
      const res = await registerApi.register({
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        password: Password
      });
      console.log("res:", res.data);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  const signIn = (Email, Password) => {
    getUserData(Email, Password);

    setIsLoading(false);
    setUserToken("token");
  };
  const singUp = (FirstName, LastName, Email, Password) => {
    setUserData(FirstName, LastName, Email, Password);
    setIsLoading(false);
    setUserToken("token");
  };
  const singOut = () => {
    setIsLoading(false);
    setUserToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ signIn, singOut, singUp, isLoading, userToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
