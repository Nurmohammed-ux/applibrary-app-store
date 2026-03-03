import React from "react";

const Statistics = () => {
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 md:px-0 py-20 text-white text-center">
      <h3 className="text-5xl font-bold mb-10">
        Trusted by Millions, Built for You
      </h3>
      <div className="flex flex-wrap gap-8 justify-around md:px-20 lg:px-65.75">
        <div>
          <p>Total DownLoads</p>
          <h1 className="text-6xl font-extrabold my-4">29.6M</h1>
          <p>21% more than last month</p>
        </div>
        <div>
          <p>Total Reviews</p>
          <h1 className="text-6xl font-extrabold my-4">906K</h1>
          <p>46% more than last month</p>
        </div>
        <div>
          <p>Active Apps</p>
          <h1 className="text-6xl font-extrabold my-4">132+</h1>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
