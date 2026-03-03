import React from "react";
import star from "../../assets/icon-ratings.png";
import download from "../../assets/icon-downloads.png";
import { Link } from "react-router";

const TrendingApp = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <Link to={`/apps/${id}`}>
      <div className="bg-white p-4 rounded-sm shadow-lg">
        <img className="w-full rounded-lg h-44 lg:h-64" src={image} alt="App" />
        <h4 className="my-4 text-xl text-left font-medium">{title}</h4>
        <div className="flex justify-between">
          <p className="text-[#00D390] bg-[#00D390]/10 px-3 py-1 flex items-center rounded-sm">
            <img className="h-4 mr-2" src={download} alt="Download" />
            {downloads}
          </p>
          <p className="text-[#FF8811] bg-[#FF8811]/10 px-3 py-1 flex items-center rounded-sm">
            <img className="h-4 mr-2" src={star} alt="Star" />
            {ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TrendingApp;
