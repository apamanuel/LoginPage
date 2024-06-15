import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Session from "./views/Session/Session";
import NotFounded from "./views/NotFounded/NotFounded";
import { useContext } from "react";
import { UserAuthContext } from "./context/UserAuthcontext";

function App() {
  const [auth] = useContext(UserAuthContext);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/session" element={auth ? <Session /> : <Login />} />
          <Route path="*" element={<NotFounded />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
