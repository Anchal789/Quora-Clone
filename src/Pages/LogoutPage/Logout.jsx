// import React, { useContext } from "react";
// import { GoogleLogout } from "react-google-login";
// import { MyContext } from "../../context/Mycontext";
import { useNavigate } from "react-router";
import "./Logout.css";

const Logout = () => {
  console.error("logout triggered");
  const navigate = useNavigate();
  navigate("/")
  // const clientId =
  //   "497854168642-sihpn5dsqj7q8spi11gerjbbug1d11o4.apps.googleusercontent.com";
  // const onSuccess = () => {
  //   console.log("Logout Successfully")
  // };
  // <GoogleLogout
  //   clientId={clientId}
  //   buttonText="Logout"
  //   onLogoutSuccess={onSuccess}
  // />;
};

export default Logout;
