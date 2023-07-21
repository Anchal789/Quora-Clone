import React, { useContext, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router";
import { MyContext } from "../../context/Mycontext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../assets/firebase";

const Register = () => {
  const [state, setState] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const [usernameError, setUsernameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const mycontext = useContext(MyContext);
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleRegister = async () => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!usernameRegex.test(state.username)) {
      setUsernameError(
        "Username must be alphanumeric and 3-20 characters long"
      );
    } else {
      setUsernameError("");
    }

    if (!nameRegex.test(state.name)) {
      setNameError("Please enter a valid name");
    } else {
      setNameError("");
    }

    if (!emailRegex.test(state.email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }

    if (!passwordRegex.test(state.password)) {
      setpasswordError(
        "Minimum eight characters, at least one letter, one number and one special character."
      );
    } else {
      setpasswordError("");
    }

    if (
      usernameRegex.test(state.username) &&
      nameRegex.test(state.name) &&
      emailRegex.test(state.email) &&
      passwordRegex.test(state.password)
    ) {
      // mycontext.loginStatus();
      navigate("/login");

      createUserWithEmailAndPassword(auth, state.email, state.password);

      // const { username, name, email, password } = state;

      // const response = await fetch(
      //   "https://quora-clone-390418-default-rtdb.firebaseio.com/quoracloneregister.json",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       username,
      //       name,
      //       email,
      //       password,
      //     }),
      //   }
      // );

      // if (response) {
      //   setState({
      //     username: "",
      //     name: "",
      //     email: "",
      //     password: "",
      //   });
      // }
    }
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register-container">
      <h1>Register Page</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="register_label">Username:</label>
          <input
            type="text"
            value={state.username}
            onChange={handleChange}
            className="register_input"
            name="username"
          />
          {usernameError && (
            <span className="error-message">{usernameError}</span>
          )}
        </div>
        <div className="input-group">
          <label className="register_label">Name:</label>
          <input
            type="text"
            value={state.name}
            onChange={handleChange}
            className="register_input"
            name="name"
          />
          {nameError && <span className="error-message">{nameError}</span>}
        </div>
        <div className="input-group">
          <label className="register_label">Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={handleChange}
            className="register_input"
            name="email"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <div className="input-group">
          <label className="register_label">Password:</label>
          <input
            type="password"
            value={state.password}
            onChange={handleChange}
            className="register_input"
            name="password"
          />
          {passwordError && (
            <span className="error-message">{passwordError}</span>
          )}
        </div>
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
