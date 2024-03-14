import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const User = {
    name: "Samiya",
    profile_picture: "/samiya.png",
  };
  return (
    <div>
      {" "}
      <div className="w-full flex justify-between">
        <p className="text-[20px] font-[700]">Welcome Back, {User.name}</p>
        <div className="w-[40%] h-[30px] flex bg-[white] items-center rounded-[30px] ">
          <span className="text-[20px] pl-[20px] pr-[5px] text-slate-400">
            <CiSearch />
          </span>

          <input
            className="decorations-none no-underline outline-none w-full rounded-[30px]"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <div className="relative flex">
            <span className="text-[30px] text-slate-700">
              <IoIosNotificationsOutline />
            </span>
            <span className="text-[red] absolute text-[10px] right-[5px] top-[4px] ">
              <GoDotFill className="" />
            </span>
          </div>
          <div className="flex bg-[#585959]  py-[5px] px-[20px] items-center rounded-[20px] relative gap-3 h">
            <img
              src={User.profile_picture}
              className="w-[32px] h-[32px] rounded-[60%] object-cover relative right-[15px]"
            />
            <span className="text-white font-medium relative right-[20px]">
              Samiya Usman
            </span>
            <span className="text-white font-medium text-[20px]">
              <IoMdMore />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
