import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import Login from "./components/Login/loginThree";
import Profile from "./components/Profile";
import HomePage from "./components/Homepage";
import Header from "./components/Header";
import useToken from "./components/useToken";
import Subscriptions from "./components/Subscriptions";
import CoverLetter from "./components/CoverLetter";
import LandingPage from "./components/LandingPage";
import NewNavBar from "./UIcomponts/NewNavBar";
import "./App.css";


function App(): JSX.Element {
  const { token, removeToken, setToken } = useToken();

  return (
    <BrowserRouter>
      <div className=" text-center"
      >
        <NewNavBar/>
         <Routes>
         <Route
              path="/"
              element={<LandingPage />}
            />
            <Route
              path="/sign-in"
              element={<Login setToken={setToken} />}
            />
             <Route
              path="/cover-letter"
              element={<CoverLetter />}
            />
            {/* <Route
              path="/profile"
              element={<Profile token={token} setToken={setToken} />}
            /> */}
          </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
