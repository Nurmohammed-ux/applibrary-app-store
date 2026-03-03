import React from "react";
import { Search } from "lucide-react";
import { useLoaderData } from "react-router";
import TrendingApp from "../TrendingApp/TrendingApp";

const Apps = () => {
  const appsData = useLoaderData();
//   console.log(appsData);
  return (
    <div className="bg-[#000000]/5 py-12 md:py-20 text-center px-4 md:px-10 lg:px-20 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Our All Applications
      </h2>
      <p className="text-lg md:text-xl text-[#627382] mb-10 max-w-2xl mx-auto">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h4 className="text-xl md:text-2xl font-semibold text-[#131313]">
          ({appsData.length}) Apps Found
        </h4>
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            className="bg-white pl-10 pr-4 py-3 rounded-sm w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#632EE3] transition-all"
            type="text"
            placeholder="Search Apps"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6">
        {appsData?.map((app) => (
          <TrendingApp key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
