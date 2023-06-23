import "./App.css";
import Home from "./components/Home/Home";
import { useState } from "react";
import Login from "./components/Login/Login";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSnackbar } from "notistack";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authentication, setAuthentication] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
 
 
  const handleLogin = () => {
    if (username === "foo" && password === "bar") {
      setAuthentication(true);
      enqueueSnackbar("Logged In Successfully", { variant: "success" });
      history.push("/home", { from: "/" });
    } else {
      enqueueSnackbar(`Please enter username as 'foo' and password as 'bar'`, { variant: "warning" });
    }
  };

  const handleLogOut = () => {
    setAuthentication(false);
    setUsername("");
    setPassword("");
    enqueueSnackbar("Logged Out Successfully", { variant: "success" });
    history.push("/", { from: "/home" });
  };

  return (
    <>
      <div className="App">
        <Switch>
          <Route path="/">
            {authentication ? <Redirect to="/home" /> : <Redirect to="/" />}
          </Route>
        </Switch>

        {!authentication && (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        )}

        <Home
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogOut={handleLogOut}
          authentication={authentication}
        />
      </div>
    </>
  );
}

export default App;
