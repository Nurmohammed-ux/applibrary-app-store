import React, { useEffect, useState } from "react";
import { getAppIdFromLS } from "../../Utilities/addToLS";
import { useLoaderData } from "react-router";
import InstallApp from "../InstallApp/InstallApp";
import { PackageOpen, ChevronDown } from "lucide-react";

const InstallApps = () => {
  const appsData = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const storedAppIds = getAppIdFromLS();
    const filteredApps = appsData.filter((app) =>
      storedAppIds.includes(app.id),
    );
    const sortedApps = [...filteredApps];

    const convertToNumber = (str) => {
      if (typeof str !== "string") return str;

      const num = parseFloat(str);
      const suffix = str.toUpperCase().slice(-1);

      switch (suffix) {
        case "M":
          return num * 1000000;
        case "K":
          return num * 1000;
        case "B":
          return num * 1000000000;
        default:
          return num;
      }
    };
    if (sortOrder === "High-Low") {
      sortedApps.sort(
        (a, b) => convertToNumber(b.downloads) - convertToNumber(a.downloads),
      );
    } else if (sortOrder === "Low-High") {
      sortedApps.sort(
        (a, b) => convertToNumber(a.downloads) - convertToNumber(b.downloads),
      );
    }

    setInstalledApps(sortedApps);
  }, [appsData, sortOrder]);

  const handleRemoveApp = (id) => {
    const remainingInstalledApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(remainingInstalledApps);
  };
  //   console.log(storedAppIds, installApps);
  return (
    <div className="bg-[#000000]/2 py-12 md:py-20 text-center px-4 md:px-10 lg:px-20 min-h-100">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Your Installed Apps
      </h2>
      <p className="text-lg md:text-xl text-[#627382] mb-10 max-w-2xl mx-auto">
        Explore All Apps on the Market developed by us.
      </p>
      <div className="flex justify-between items-center">
        <h4 className="text-2xl font-semibold">
          {installedApps.length} Apps Found
        </h4>
        <button
          className="btn bg-white"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          Sort By {sortOrder ? `(${sortOrder})` : ""} Downloads <ChevronDown />
        </button>

        <ul
          className="dropdown menu w-46 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li className="font-medium">
            <a
              onClick={(e) => {
                e.preventDefault();
                setSortOrder("High-Low");
              }}
            >
              High-Low
            </a>
          </li>
          <li className="font-medium">
            <a
              onClick={(e) => {
                e.preventDefault();
                setSortOrder("Low-High");
              }}
            >
              Low-High
            </a>
          </li>
        </ul>
      </div>
      <div>
        {installedApps.length > 0 ? (
          installedApps.map((app) => (
            <InstallApp
              key={app.id}
              app={app}
              handleRemoveApp={handleRemoveApp}
            />
          ))
        ) : (
          <div className="bg-white p-16 rounded-sm mt-10 border-2  border-gray-200 flex flex-col items-center">
            <PackageOpen size={64} className="text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">
              Your library is empty
            </h3>
            <p className="text-gray-500 mt-2">
              Go back to the store to find amazing apps!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallApps;
