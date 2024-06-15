import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Session from "./views/Session/Session";
import NotFounded from "./views/NotFounded/NotFounded";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/session" element={<Session />} />
          <Route path="*" element={<NotFounded />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
