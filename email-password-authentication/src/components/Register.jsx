import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React from "react";
import { auth } from "../firebase.init";
import { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password);

    setErrorMessage("");
    setSuccess(false);

    if (!terms) {
      setErrorMessage("Please accept our terms and conditions.");
      return;
    }

    // Define regex for password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters long and include uppercase, lowercase, a digit, and a special character."
      );
      return;
    }

    // firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        // email verification
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("verify your email.");
        });
        setSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      });

    e.target.reset();
  };
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-4xl my-8">Please register</h2>
      <form onSubmit={handleRegister}>
        <label className="input input-bordered flex items-center gap-2 my-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 my-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            className="grow"
            placeholder="Password"
          />

          <button onClick={() => setShowPass(!showPass)}>
            {showPass ? <IoEyeOffSharp /> : <IoEye></IoEye>}
          </button>
        </label>

        <div className="form-control mb-5">
          <label className="label justify-start cursor-pointer">
            <input type="checkbox" name="terms" className="checkbox" />
            <span className="label-text ml-2">
              Accept our terms and conditions.
            </span>
          </label>
        </div>

        <button className="btn btn-accent btn-wide">Register</button>
      </form>
      {errorMessage && (
        <p className="text-xl my-8 text-center text-red-600">
          ERROR. {errorMessage}
        </p>
      )}

      {success && (
        <p className="text-xl my-8 text-center text-green-600">
          Sign up succesfull.
        </p>
      )}
    </div>
  );
}
