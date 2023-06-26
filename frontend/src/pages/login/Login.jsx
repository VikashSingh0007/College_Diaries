
import React, { useContext, useRef, useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

export const Login = () => {
  const userRef = useRef();
  const passRef = useRef();
  const { dispatch, fetchData } = useContext(Context);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGINSTART" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGINSUCC", payload: res.data });
      window.location.replace("/");
    } catch (error) {
      setError("Wrong credentials. Please try again."); // Set error message
      dispatch({ type: "LOGINFAILED" });
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Username or email address *</span>
            <input type="text" required ref={userRef} />
            <span>Password *</span>
            <input type="password" required ref={passRef} />
            {error && <div className="alert">{error}</div>} {/* Display error message */}
            <button className="button" type="submit" disabled={fetchData}>
              Login
            </button>

            <Link to="/register" className="link">
              Register
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};
