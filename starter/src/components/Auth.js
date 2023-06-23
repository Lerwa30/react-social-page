import { useState, useContext } from "react";
import AuthContext from "../store/authContext";
import axios from "axios";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    axios
      .post(
        register
          ? "https://socialmtn.devmountain.com/register"
          : "https://socialmtn.devmountain.com/login",
        body
      )
      .then((res) => {
        console.log("AFTER AUTH", res.data)
        authCtx.login(res.data.token, res.data.expire, res.data.userId)
    })
      .catch((error) => {
        setUsername("");
        setPassword("");
      });

    console.log("submitHandler called");
    console.log(username, password);
  };

  return (
    <main>
      <h1>Welcome!</h1>
      <form className="form auth-form" onSubmit={submitHandler}>
        <input
          className="form-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="form-btn">{register ? "Sign up" : "Login"}</button>
      </form>
      <button className="form-btn">
        Need to {register ? "Login" : "Sign up"}?
      </button>
    </main>
  );
};

export default Auth;
