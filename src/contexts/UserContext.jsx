import { createContext, useEffect, useState } from "react";
import { login } from "../firebase";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleSignIn = (email, password) => {
    login(email, password).then((user) => {
      setUser(user);
      console.log(user);
    });
  };

  return (
    <UserContext.Provider value={{ handleSignIn, user }}>
      {children}
    </UserContext.Provider>
  );
};
