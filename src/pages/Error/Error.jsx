import React from "react";
import errorImage from "../../assets/error-404.png";
import { Link, useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#000000]/2 flex flex-col justify-center items-center mt-50">
      <img className="mb-4" src={errorImage} alt="404 Error" />
      <h3 className="text-5xl font-semibold mb-2">Oops, page not found!</h3>
      <p className="text-[#627382] mb-6">
        The page you are looking for is not available.
      </p>
      <div>
        <button
          onClick={() => navigate(-1)}
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] mr-6 text-white"
        >
          Go Back!
        </button>
        <Link
          to={"/"}
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          Go Back Home!
        </Link>
      </div>
    </div>
  );
};

export default Error;
