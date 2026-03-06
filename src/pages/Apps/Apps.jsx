import React, { useState } from "react";
import { Search } from "lucide-react";
import { useLoaderData, useNavigation } from "react-router";
import TrendingApp from "../TrendingApp/TrendingApp";

const Apps = () => {
  const appsData = useLoaderData() || [];
  const navigation = useNavigation();
  const [searchApp, setSearchApp] = useState("");

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchApp.toLowerCase()),
  );

  const isLoading = navigation.state === "loading";

  return (
    <div className="bg-[#000000]/2 py-12 md:py-20 text-center px-4 md:px-10 lg:px-20 min-h-100">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Our All Applications
      </h2>
      <p className="text-lg md:text-xl text-[#627382] mb-10 max-w-2xl mx-auto">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h4 className="text-xl md:text-2xl font-semibold text-[#131313]">
          ({isLoading ? "..." : filteredApps.length}/{appsData.length}) Apps
          Found
        </h4>
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            className="bg-white pl-10 pr-4 py-3 rounded-sm w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            type="text"
            value={searchApp}
            onChange={(e) => setSearchApp(e.target.value)}
            placeholder="Search Apps"
          />
        </div>
      </div>

      <div className="mt-10">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="loading loading-spinner loading-lg text-[#632EE3]"></span>
            <p className="mt-4 text-gray-500 animate-pulse">
              Fetching latest apps...
            </p>
          </div>
        ) : filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <TrendingApp key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="py-20 bg-white rounded-sm shadow-sm border border-gray-300">
            <Search size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">No App Found</h3>
            <p className="text-gray-500 mt-6">
              We couldn't find any app matching "{searchApp}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
