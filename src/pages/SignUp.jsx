import React, { use, useState } from "react";
import hobbyImg from "../assets/hobby.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";
import Spinner from "../components/ui/Spinner";

const SignUp = () => {
  const [err, setErr] = useState("");
  const { user, setUser, loader, setLoader, signUp, updateUser } =
    use(AuthContext);
  const navigate = useNavigate();

  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!regex.test(password)) {
      setErr(
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long."
      );
      return;
    } else {
      setErr("");
    }

    signUp(email, password)
      .then((result) => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Account Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // Signed up
        const userInfo = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            // Profile updated!
            setUser({ ...userInfo, displayName: name, photoURL: photo });
            // ...
          })
          .catch((error) => {
            // An error occurred
            setUser(userInfo);
            // ...
          });
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode);
        setLoader(false);
        Swal.fire({
          position: "top",
          icon: "error",
          title: errorCode,
          showConfirmButton: false,
          timer: 1500,
        });
        // toast.error(errorCode);
        // ..
      });
  };

  if (loader) return <Spinner />;

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-base-100">
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
        <form onSubmit={handleSignUp} className="max-w-md md:w-4/6">
          <label className="form-control w-full mb-4">
            <span className="label-text mb-1">Name</span>
            <input
              type="text"
              placeholder="Hamad Ismail"
              name="name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full mb-4">
            <span className="label-text mb-1">Email</span>
            <input
              type="email"
              placeholder="hamad.ismail.gub@gmail.com"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full mb-4">
            <span className="label-text mb-1">Photo URL</span>
            <input
              type="text"
              placeholder=""
              name="photo"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full mb-2">
            <span className="label-text mb-1">Password</span>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full mb-4"
              required
            />
          </label>

          {err && <label className="text-error mb-8">{err}</label>}

          <button type="submit" className="btn btn-neutral w-full my-4">
            Sign Up
          </button>

          <p className="text-sm text-ce1nter text-base-content">
            Already have and account?{" "}
            <Link to="/auth/login" className="text-success hover:underline">
              Login Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
