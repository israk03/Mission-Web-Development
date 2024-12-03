import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Register() {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    // console.log(email, password, name);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // reset
        e.target.reset();
        navigate("login");
      })
      .catch((error) => console.log("Error", error));
  };
  return (
    <div className="hero bg-base-200 p-4">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left mb-5">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="label p-5">
            <p className="label-text-alt">
              Already have an account?{" "}
              <Link to="/login" className=" link link-hover">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
