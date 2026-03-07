import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useLoaderData, useNavigation } from "react-router";
import TrendingApp from "../TrendingApp/TrendingApp";
import logo from "../../assets/logo.png";
import vsImg from "../../assets/icons8-visual-studio-code-48.png";

const Apps = () => {
  const appsData = useLoaderData() || [];
  const navigation = useNavigation();
  const [searchApp, setSearchApp] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchApp.trim().length > 0) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [searchApp]);

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchApp.toLowerCase()),
  );

  const isNavigating = navigation.state === "loading";

  return (
    <div className="bg-[#f8fafc] py-12 md:py-20 text-center px-4 md:px-10 lg:px-20 min-h-screen">
      <h2 className="text-3xl md:text-5xl flex justify-center items-center font-bold mb-4">
        Our All Applications{" "}
        <img className="h-10 mt-2 ml-3" src={vsImg} alt="Icon" />
      </h2>
      <p className="text-lg md:text-xl text-[#627382] mb-10 max-w-2xl mx-auto">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto mb-10">
        <h4 className="text-xl md:text-2xl font-semibold">
          {filteredApps.length} Apps Found
        </h4>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            className="bg-white pl-10 pr-4 py-3 rounded-lg w-full border border-gray-200 focus:ring-2 focus:ring-[#632EE3] outline-none"
            type="text"
            placeholder="Search Apps..."
            onChange={(e) => setSearchApp(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10 max-w-7xl mx-auto">
        {isNavigating || isSearching ? (
          <div className="flex flex-col items-center justify-center pt-12">
            <div className="flex items-center text-5xl md:text-7xl font-black text-[#131313] loading-text">
              <span>L</span>
              <img
                src={logo}
                alt="Loading"
                className="h-10 w-10 md:h-18 md:w-18 mx-1 animate-spin-slow object-contain"
              />
              <span>ADING</span>
            </div>
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
