import React from "react";
import logo from "../../assets/logo.png";
import {
  Github,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Youtube,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-[#222222] text-white pt-32 pb-10 [clip-path:polygon(0_15%,100%_0,100%_100%,0%_100%)]">
      <div className="container mx-auto px-6 md:px-20 lg:px-25">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center gap-2">
            <img className="h-10" src={logo} alt="Logo" />
            <div className="border-l border-gray-500 pl-3">
              <Link to={"/"}>
                <h2 className="text-xl font-bold leading-none">AppLibrary</h2>
              </Link>
            </div>
          </div>

          <div className="flex gap-4 text-gray-400">
            <Link to={"https://www.facebook.com/"}>
              <Facebook size={18} className="hover:text-white cursor-pointer" />
            </Link>
            <Link to={"https://x.com/"}>
              <Twitter size={18} className="hover:text-white cursor-pointer" />
            </Link>
            <Link to={"https://www.linkedin.com/"}>
              <Linkedin size={18} className="hover:text-white cursor-pointer" />
            </Link>
            <Link to={"https://www.instagram.com/?hl=en"}>
              <Instagram
                size={18}
                className="hover:text-white cursor-pointer"
              />
            </Link>
            <Link to={"https://github.com/ProgrammingHero1/"}>
              <Github size={18} className="hover:text-white cursor-pointer" />
            </Link>
            <Link to={"https://www.youtube.com/"}>
              <Youtube size={22} className="hover:text-white cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-12">
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <div className="grid grid-cols-1 gap-2 text-sm text-gray-400">
              <Link to={"/"} className="hover:text-white">
                Home
              </Link>
              <Link to={"/apps"} className="hover:text-white">
                Apps
              </Link>
              <Link to={"/installApp"} className="hover:text-white">
                Installation
              </Link>
              <Link className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="text-sm text-gray-400 space-y-3">
              <li className="flex gap-3">3015 Grand Ave, Coconut Grove, FL</li>
              <li>+123-456-789</li>
              <li>sales@example.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Remain Updated</h4>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white text-black p-3 text-sm rounded-sm outline-none"
              />
              <button className="bg-linear-to-r from-[#4f0de9] to-[#833ae9] text-white py-3 px-6 rounded-sm font-medium transition-colors w-max">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-500 gap-4">
          <p>© 2026. All rights reserved.</p>
        </div>
      </div>

      <Link
        to={"/"}
        className="absolute bottom-6 right-11 lg:right-15  bg-linear-to-r from-[#4f0de9] to-[#833ae9] p-2 rounded-sm hover:brightness-110 transition-all"
      >
        <ArrowUp size={20} className="text-white" />
      </Link>
    </footer>
  );
};

export default Footer;
