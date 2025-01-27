import React from "react";
import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <img className="w-full hidden md:block " src={banner} alt="" />
      <div className="hero-content   flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            To get started, make sure to sign up for an account first. Once
            you've completed the registration,<br></br> you can log in using
            your credentials to access your account.
          </p>
        </div>

        <div className="md:w-96 card bg-base-100 shrink-0 shadow-2xl">
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
                <Link to="/sign-up" className="label-text-alt link link-hover">
                  I have no account? Please Register now.
                </Link>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-warning hover:bg-orange-500">
                Log In
              </button>
            </div>
            <div className="divider"></div>
            <div className="form-control mt-0">
              <button className="btn btn-warning hover:bg-orange-500">
                Continue with Google <i class="fa-brands fa-google"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
