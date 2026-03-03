import React from "react";
import { Link, useLoaderData } from "react-router";
import TrendingApp from "../TrendingApp/TrendingApp";

const TrendingApps = () => {
  const trendingAppsData = useLoaderData();
  // console.log(trendingAppsData);
  return (
    <div className="py-12 md:py-20 text-center px-4 md:px-10 lg:px-20 overflow-hidden">
      <h3 className="text-3xl md:text-5xl font-bold mb-4">Trending Apps</h3>
      <p className="text-lg md:text-xl text-[#627382] mb-10 max-w-2xl mx-auto">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingAppsData?.map((app) => (
          <TrendingApp key={app.id} app={app} />
        ))}
      </div>
      <Link
        to={"/apps"}
        className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-10 px-10"
      >
        Show All
      </Link>
    </div>
  );
};

export default TrendingApps;
