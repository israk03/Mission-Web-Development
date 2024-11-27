import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.config";

export default function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // reset
    setLoginSuccess(false);
    setLoginError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        if (!result.user.emailVerified) {
          setLoginError("Please verify your mail.");
        } else {
          setLoginSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleForgotPass = () => {
    // console.log("GIVE ME A EMAIL", emailRef.current.value);
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email).then(() => {
      console.log("Reset mail sent.");
    });
  };

  return (
    <div className="my-10">
      <h2 className="text-4xl text-center">LOGIN NOW!</h2>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-5">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label onClick={handleForgotPass} className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        {loginSuccess && (
          <p className="text-green-600 text-center p-2">Login successfull!</p>
        )}

        {loginError && (
          <p className="text-red-600 text-center p-2">{loginError}</p>
        )}
        {/* don't have an account */}
        <label className="label ml-5 p-4">
          <p className="label-text-alt">
            Don't have an account?{" "}
            <Link to="/register" className="link link-hover">
              Register
            </Link>
          </p>
        </label>
      </div>
    </div>
  );
}
