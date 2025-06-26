import React from "react";
import { Link, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <h1 className="text-7xl font-bold text-error mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-center text-gray-600 max-w-md mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-success px-6 py-2 rounded-md hover:bg-primary-focus transition"
      >
        <FaArrowLeft /> Go back Home
      </Link>
    </div>
  );
};

export default Error;
