import React from "react";
import "./Login.css";

function Login({ username, password, setUsername, setPassword,handleLogin }) {

 
  const handleUsername = (e) => {
    setUsername(e.target.value);
    // console.log(username)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(password)
  };
  return (
    <div className="login">
      <label htmlFor="username">Username:</label>
      <input
        value={username}
        type="text"
        name="username"
        placeholder="Enter the Username"
        onChange={(e) => handleUsername(e)}
      />
      <br />
      <label value={password} htmlFor="password">
        Password:
      </label>
      <input type="password" 
      value={password}
      name="password" placeholder="Enter the Password" 
      onChange={(e)=>handlePassword(e)}
      />
      <br />
      <button onClick={handleLogin}>Login In</button>
    </div>
  );
}

export default Login;
