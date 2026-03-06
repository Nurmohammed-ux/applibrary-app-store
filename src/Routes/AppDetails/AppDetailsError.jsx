import React from "react";
import errorImg from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const AppDetailsError = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#000000]/2 flex flex-col justify-center items-center py-20">
      <img src={errorImg} alt="Error" />
      <h4 className="text-5xl font-semibold my-4">OPPS!! APP NOT FOUND</h4>
      <p className="text-[#627382] mb-6">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button
        onClick={() => navigate(-1)}
        className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] mr-6 text-white"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppDetailsError;
