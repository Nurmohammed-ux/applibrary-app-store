import React from "react";
import playStoreLogo from "../../assets/fi_16076057.png";
import appStoreLogo from "../../assets/fi_5977575.png";
import heroImage from "../../assets/hero.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="text-center px-6 md:px-0 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-7xl font-bold pt-20 mb-4">
        We Build <br />
        <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="my-10">
        <Link
          to={"https://play.google.com/store/games?device=windows"}
          className="btn mr-4"
        >
          <img className="h-7 bg-[#000000]/2" src={playStoreLogo} alt="Logo" />
          Google Play
        </Link>
        <Link to={"https://www.apple.com/app-store/"} className="btn">
          <img className="h-7" src={appStoreLogo} alt="Logo" />
          App Store
        </Link>
      </div>
      <div className="w-full flex justify-center px-4">
        <img
          src={heroImage}
          className="w-full max-w-4xl h-auto object-contain"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Banner;
