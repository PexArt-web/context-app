import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated((prevState) => !prevState.isAuthenticated);
  };
  return (
    <div>
      <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
        {props.children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
