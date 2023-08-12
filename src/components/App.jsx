import React from "react";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import MycontextProvider from "../context/Mycontext";

const App = () => {
  const clientId =
    "497854168642-sihpn5dsqj7q8spi11gerjbbug1d11o4.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  
  return (
    <MycontextProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </MycontextProvider>
  );
};

export default App;
