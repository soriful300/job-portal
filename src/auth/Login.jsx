import Lottie from "lottie-react";
import React, { useContext } from "react";
import animation from "../assets/lottie/register.json";
import { AuthContext } from "../context/AuthContext";
import GoogleLogIn from "../components/GoogleLogIn";

const Login = () => {
  const { signIn, loading, user } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={animation} />;
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={handleSignIn}>
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
          </div>
          <GoogleLogIn></GoogleLogIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
