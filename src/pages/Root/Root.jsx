import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import logo from "../../assets/logo.png";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="container mx-auto">
      <Navbar />
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="flex items-center text-5xl md:text-7xl font-black tracking-tighter text-gray-900">
            <span>L</span>
            <img
              src={logo}
              alt="loading"
              className="h-10 w-10 md:h-18 md:w-18 mx-1 animate-spin"
              style={{ animationDuration: "2s" }}
            />
            <span>ADING</span>
          </div>
        </div>
      )}
      <div
        className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
      >
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
