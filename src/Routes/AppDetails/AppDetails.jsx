import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";
import { addAppIdToLS, getAppIdFromLS } from "../../Utilities/addToLS";

const AppDetails = () => {
  const { appId } = useParams();
  const apps = useLoaderData();
  const [isInstall, setIsInstall] = useState(false);

  const clickedApp = apps.find((app) => app.id === parseInt(appId));

  useEffect(() => {
    const installedApps = getAppIdFromLS();
    if (installedApps.includes(parseInt(appId))) {
      setIsInstall(true);
    }
  }, [appId]);

  if (!clickedApp) {
    throw new Error("App not found");
  }

  const {
    id,
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = clickedApp;

  const handleInstall = () => {
    toast.success(`Successfully installed: ${title}`);
    setIsInstall(true);
    addAppIdToLS(id);
  };

  return (
    <div className="bg-[#f8fafc] py-12 md:py-20 px-4 md:px-10 lg:px-20 overflow-hidden min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-10 pb-14">
        <img
          className="lg:flex-1 h-48 w-48 md:h-64 md:w-64 lg:h-82 lg:w-80 shrink-0 min-w-48 md:min-w-[256px] lg:min-w-[320px] rounded-sm object-cover shadow-md"
          src={image}
          alt={title}
        />
        <div className="flex-2 text-center lg:text-left">
          <div className="border-b border-gray-200 pb-5 lg:pb-8">
            <h3 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
              {title}
            </h3>
            <p className="text-[#627382] text-lg">
              Developed by{" "}
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>

          <div className="pt-6 lg:pt-8 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 pb-10">
            <StatItem img={downloadImg} label="Downloads" value={downloads} />
            <StatItem img={ratingImg} label="Avg Rating" value={ratingAvg} />
            <StatItem img={reviewImg} label="Reviews" value={reviews} />
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstall}
            className={`btn px-10 py-4 border-none text-white font-bold rounded-lg shadow-lg transition-all active:scale-95 
              ${isInstall ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390] hover:bg-[#00b97e]"}`}
          >
            {isInstall ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className="w-full my-10">
        <h3 className="text-2xl font-bold mb-7.5">Ratings</h3>
        <div className="h-72 md:h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={ratings}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="#f1f5f9"
              />
              <XAxis
                type="number"
                domain={[0, "dataMax + 2000"]}
                orientation="bottom"
                stroke="#94a3b8"
                fontSize={12}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <YAxis
                dataKey="name"
                type="category"
                stroke="#475569"
                fontSize={14}
                fontWeight={400}
                width={42}
              />
              <Tooltip
                cursor={{ fill: "#f8fafc" }}
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                }}
              />
              <Bar
                dataKey="count"
                fill="#F97316"
                barSize={28}
                radius={[0, 0, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <hr className="border-gray-200" />
      <div>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
          Description
        </h3>
        <p className="text-[#627382] leading-relaxed text-lg whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

const StatItem = ({ img, label, value }) => (
  <div className="flex flex-col items-center lg:items-start">
    <img className="h-8 mb-2" src={img} alt={label} />
    <p className="text-[#001931] text-sm font-medium opacity-70">{label}</p>
    <h3 className="text-3xl md:text-4xl font-black text-gray-900">{value}</h3>
  </div>
);

export default AppDetails;
