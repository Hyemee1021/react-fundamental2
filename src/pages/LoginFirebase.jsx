import React, { useContext, useState } from "react";
import { Navbar } from "../components/Navbar";

import { signup, login } from "../firebase";
import { useSelector } from "react-redux";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { SuccessfulLogged } from "./SuccessfulLogged";

const LoginFirebase = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [signupStatus, setSignupStatus] = useState("");

  const { user, handleSignIn } = useContext(UserContext);

  const handleSignup = async (email, password) => {
    try {
      const user = await signup(email, password);
      setSignupStatus("Signup successful! Welcome, " + user.email);
    } catch (error) {
      setSignupStatus("Signup failed: " + error.message);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex  flex-col gap-3 flex-grow items-center justify-center mt-16">
        {user ? (
          <SuccessfulLogged />
        ) : (
          <div>
            <div className="flex flex-col gap-2">
              <h1>Sign up here</h1>

              <div>{signupStatus && <p>{signupStatus}</p>}</div>
              <input
                className="border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className=" border border-blue-700 px-3 py-1"
                onClick={() => handleSignup(email, password)}
              >
                Sign Up
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Log In here</h1>
              <input
                className="border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className=" border border-blue-700 px-3 py-1"
                onClick={() => handleSignIn(email, password)}
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LoginFirebase;
