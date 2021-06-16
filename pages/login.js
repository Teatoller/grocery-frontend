import Head from "next/head";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");

  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to make your purchase" />
      </Head>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;