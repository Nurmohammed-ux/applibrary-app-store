import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { toast } from "react-toastify";
import { removeAppIdFromLS } from "../../Utilities/addToLS";

const InstallApp = ({ app, handleRemoveApp }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;
  const handleRemove = () => {
    toast(`You uninstall : ${title}`);
    removeAppIdFromLS(id);
    handleRemoveApp(id);
  };
  return (
    <div className="bg-white p-4 flex justify-between items-center my-4 rounded-sm">
      <div className="flex gap-3 md:gap-10 items-center">
        <img
          className="h-20 w-20 rounded-sm shadow-sm"
          src={image}
          alt={title}
        />
        <div className="text-left">
          <h4 className="text-xl font-medium mb-2 md:mb-3">{title}</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-1 gap-x-3 md:gap-x-0">
            <p className="w-24 text-[#00D390] flex items-center whitespace-nowrap">
              <img className="h-4 mr-2" src={downloadImg} alt="Download" />
              {downloads}
            </p>
            <p className="w-24 text-[#FF8811] flex items-center whitespace-nowrap">
              <img className="h-4 mr-2" src={ratingImg} alt="Ratings" />
              {ratingAvg}
            </p>
            <p className="w-24 text-[#627382] whitespace-nowrap">
              {size} MB
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="btn bg-[#00D390] px-4 py-3 font-bold text-white rounded-sm"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallApp;
