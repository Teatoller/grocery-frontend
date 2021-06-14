import { createContext, useState } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  return <AuthProvider>{props.children}</AuthProvider>;
};

export default AuthContext;
