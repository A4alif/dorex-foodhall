import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineContacts, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSave2Fill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* left side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Dorex <span className="font-bold">Foodhall</span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>
        {/* search */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 focus:outline-none "
            type="text"
            name=""
            id=""
            placeholder="Search Food"
          />
        </div>
        {/* cart button */}

        <button className="bg-black text-white hidden md:flex items-center py-2 gap-2 rounded-full">
          <BsFillCartFill size={20}/> Cart
        </button>
        {/* mobile menu */}
        {nav ? <div className="bg-black/80 fixed w-full h-screen top-0 left-0"></div> : '' }
        
            {/* side drawer */}
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
                <h2 className="text-2xl p-4">Dorex <span className="font-bold">Foodhall</span></h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="flex text-xl py-4 items-center"><TbTruckDelivery size={25} className="mr-4" /> Orders</li>
                        <li className="flex text-xl py-4 items-center"><MdFavorite size={25} className="mr-4" /> Favorites</li>
                        <li className="flex text-xl py-4 items-center"><FaWallet size={25} className="mr-4" /> Wallet</li>
                        <li className="flex text-xl py-4 items-center"><MdHelp size={25} className="mr-4" /> Help</li>
                        <li className="flex text-xl py-4 items-center"><AiFillTag size={25} className="mr-4" /> Promotions</li>
                        <li className="flex text-xl py-4 items-center"><BsFillSave2Fill size={25} className="mr-4" /> Best One</li>
                        <li className="flex text-xl py-4 items-center"><FaUserFriends size={25} className="mr-4" /> Invite Friends</li>
                        <li className="flex text-xl py-4 items-center"><AiOutlineContacts size={25} className="mr-4" /> Contact Us</li>
                    </ul>
                </nav>
            </div>
        
      </div>
    </>
  );
};

export default Navbar;
