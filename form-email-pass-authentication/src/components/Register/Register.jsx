import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    // console.log("registering.....");
    // console.log(event.target.email.value, event.target.password.value);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    console.log(email, password, terms, name, photo);

    // reset error and status
    setErrorMessage("");
    setSuccess(false);

    // password and other validation

    if (!terms) {
      setErrorMessage("Please accept our terms and conditions.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Invalid password. Ensure it has 6+ characters, including upper & lower case letters, a number, and a special character."
      );

      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);

        // send verification mail
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Verification sent...");
        });

        // update profile info
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("Updated");
          })
          .catch((error) => {
            console.log("UPDATE PROFILE ERROR.", error);
          });
      })
      .catch((error) => {
        console.log("ERROR", error.errorMessage);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="my-10">
      <h2 className="text-4xl text-center">REGISTER NOW!</h2>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-5">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-4 top-12"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer justify-start mt-2">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-primary"
              />
              <span className="label-text ml-3">
                Accept our terms and conditions.
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>

        {/* don't have an account */}
        <label className="label ml-5 p-4">
          <p className="label-text-alt">
            Already have an account?{" "}
            <Link to="/login" className="link link-hover">
              Login
            </Link>
          </p>
        </label>
        {errorMessage && (
          <p className="text-red-600 text-center p-2">{errorMessage}</p>
        )}

        {success && (
          <p className="text-green-600 text-center p-2">
            Registered successfully!
          </p>
        )}
      </div>
    </div>
  );
}
