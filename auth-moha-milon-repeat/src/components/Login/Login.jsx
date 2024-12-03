import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Login() {
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // sign in user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // reset
        e.target.reset();
        navigate("/");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="hero bg-base-200 p-4">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left mb-5">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="label p-5">
            <p className="label-text-alt">
              New to this website?{" "}
              <Link to="/register" className=" link link-hover">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
