import React from "react";
import { FaGoogle } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto px-3 py-12">
        <hr className="h-[1.9px] bg-orange-200" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center  px-5">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 mt-4">
              Dorex <span className="font-bold">Foodhall</span>
              <p className="text-lg text-orange-600 italic pt-2 ">
                Bet you , You can't eat less
              </p>
            </h1>
          </div>
          <div className="mt-4 ">
            <button className="flex items-center gap-4 mb-5 py-2 px-6 bg-orange-600 text-white duration-300 border-orange-600 hover:bg-transparent hover:text-black">
              <FaGoogle size={20} /> Download Apps
            </button>
            <button className="flex items-center gap-4 mb-5 py-2 px-6 bg-green-600 text-white duration-300 border-green-600 hover:bg-transparent hover:text-black">
              <BsApple size={20} /> Download Apps
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
