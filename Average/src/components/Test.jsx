import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = "http://20.244.56.144/evaluation-service";

function Test() {
  //   const [token, setToken] = useState("");

  //   const navigate = useNavigate();

  const register = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/register`, {
        email: "barathparthi2005kumar@gmail.com",
        name: "BarathKumar P",
        mobileNo: "8939302512",
        githubUsername: "Barathparthi",
        rollNo: "E0322039",
        collegeName:
          "Sri Ramachandra Institute OF Higher Education And Research",
        accessCode: "CdRGMV",
      });
      alert(`Registered! ClientID: ${res.data.clientID}`);
      localStorage.setItem("clientID", res.data.clientID);
      localStorage.setItem("clientSecret", res.data.clientSecret);
    } catch (err) {
      alert("Registration failed!");
      console.error(err);
    }
  };

  const authenticate = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/auth`, {
        email: "barathparthi2005kumar@gmail.com",
        name: "BarathKumar P",
        rollNo: "E0322039",
        accessCode: "CdRGMV",
        clientID: localStorage.getItem("clientID"),
        clientSecret: localStorage.getItem("clientSecret"),
      });
      setToken(res.data.access_token);
      alert("Authenticated!");
    } catch (err) {
      alert("Authentication failed!");
      console.error(err);
    }
  };

  return (
    <>
      <h1>Test Server Connection</h1>
      <button onClick={register}>Register</button>
      <button onClick={authenticate}>Authenticate</button>
      <button>
        <Link to={"/Average"}>Average</Link>
      </button>
    </>
  );
}

export default Test;
