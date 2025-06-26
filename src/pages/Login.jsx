import React, { use, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import hobbyImg from "../assets/hobby.png";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";
import Spinner from "../components/ui/Spinner";

const Login = () => {
  const { logIn, loader, setLoader, googleLogIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [err, setErr] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        // Signed in
        // const userInfo = userCredential.user;
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // toast.error(errorCode);
        setLoader(false);
        setErr("Invalid Creadentials");
        Swal.fire({
          position: "top",
          icon: "error",
          title: errorCode,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          position: "top",
          icon: "error",
          title: error.code,
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      });
  };

  if (loader) return <Spinner />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 mt-16">
      {/* Left side - Illustration + Description */}
      <div className="flex flex-col justify-center items-center p-10">
        <img
          src={hobbyImg}
          alt="Hobby Illustration"
          className="w-3/4 md:w-2/4"
        />
        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold">Hobby Hub</h2>
          <p className="text-sm text-base-content mt-2 max-w-xs mx-auto">
            Discover and join local hobby groups — from book clubs to hiking
            crews. Build communities around your passions.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex flex-col justify-center items-center p-8">
        {/* Logo */}
        <h1 className="text-3xl font-semibold mb-4">
          <span className="inline-block mr-1">⚽</span>
          <span className="font-bold">Hobby</span>
          <span className="text-success font-light"> HUB</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="max-w-md md:w-4/6">
          <label className="form-control w-full mb-4">
            <span className="label-text mb-1">Email</span>
            <input
              type="text"
              name="email"
              required
              placeholder="hamad.ismail.gub@gmail.com"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full mb-2">
            <span className="label-text mb-1">Password</span>
            <input
              type="password"
              name="password"
              required
              className="input input-bordered w-full"
            />
          </label>

          <div className="mb-4 flex items-center justify-between">
            <a className="text-sm text-success hover:underline cursor-pointer">
              Forgot password?
            </a>
            {err && <p className="text-sm text-error">{err}</p>}
          </div>

          <button type="submit" className="btn btn-neutral w-full mb-4">
            Sign in
          </button>

          <div className="divider">or</div>

          <button
            onClick={handleGoogleLogIn}
            className="btn btn-outline w-full flex items-center gap-2 mb-4"
          >
            <FaGoogle />
            Sign in with Google
          </button>

          <p className="text-sm text-ce1nter text-base-content">
            Are you new?{" "}
            <Link to="/auth/signup" className="text-success hover:underline">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
