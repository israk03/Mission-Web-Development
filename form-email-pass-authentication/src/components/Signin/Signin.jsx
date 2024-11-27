import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="my-10">
      <h2 className="text-4xl text-center">SIGNIN NOW!</h2>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-5">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
            <button className="btn btn-primary">Signin</button>
          </div>
        </form>
        {/* don't have an account */}
        <label className="label ml-5 p-4">
          <p className="label-text-alt">
            Don't have an account?{" "}
            <Link to="/signup" className="link link-hover">
              Signup
            </Link>
          </p>
        </label>
      </div>
    </div>
  );
}
