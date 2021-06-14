import { createContext, useState } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  /**
   * Adds email to user
   * @param {string} email 
   */
  const loginUser = async (email) => {
    setUser({ email });
  };

  /**
   *  Sets email to null and logs out the user.
   * @param {*} email 
   */
  const logoutUser = async (email) => {
    setUser(null);
  };

  return <AuthProvider>{props.children}</AuthProvider>;
};

export default AuthContext;
