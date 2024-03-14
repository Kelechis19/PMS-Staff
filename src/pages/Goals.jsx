import React from "react";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { goals } from "../data/temp";
import { IoMdAddCircle } from "react-icons/io";
// import { NavLink } from "react-router-dom";

const Goals = () => {
  const [activeView, setActiveView] = useState(1);
  const handleButtonClick = (buttonName) => {
    setActiveView(buttonName);
  };

  return (
    <div className=" w-full flex flex-col gap-[10px] ">
      <div className="w-full">
        <p className="font-bold text-[16px]">Organiztional Goals</p>
      </div>
      <div className="w-full h-[45px]  bg-[white] rounded-[5px] flex  text-center">
        <button
          className={`text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] ${
            activeView === 1
              ? "bg-[#1D53A117]/10 w-[30%]  relative   shadow-[black]/10"
              : ""
          }`}
          onClick={() => {
            handleButtonClick(1);
          }}
        >
          Short-Term
        </button>
        <button
          className={`text-[#205BB1] text-[16px] font-[700] flex-1  rounded-[5px]  ${
            activeView === 2
              ? "bg-[#1D53A117]/10 w-[30%]  relative  shadow-md shadow-[black]/10"
              : ""
          }`}
          onClick={() => {
            handleButtonClick(2);
          }}
        >
          Medium-Term
        </button>
        <button
          className={`text-[#205BB1] text-[16px] font-[700] flex-1  rounded-[5px]  ${
            activeView === 3 ? "bg-[#1D53A117]/10 shadow-[black]/10" : ""
          }`}
          onClick={() => {
            handleButtonClick(3);
          }}
        >
          Long-Term
        </button>
      </div>
      <div className=" w-full  bg-white rounded-[8px]  min-h-[70vh]">
        {goals.map((goalitem, key) => {
          return (
            <GoalEntry
              title={goalitem.title}
              achieved={goalitem.achieved}
              date_created={goalitem.date_created}
            />
          );
        })}
        <div className="w-full flex justify-end px-[40px]">
          <div
            className="bg-[#4D7CC1]  rounded-[4px] text-white flex items-center gap-3 cursor-pointer hover:bg-[#072b61] px-[10px] py-[10px]"
            // onClick={handleAddGoal}
          >
            <IoMdAddCircle className="text-[25px]" />{" "}
            <span>Create new Goal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalEntry = ({ title, achieved, date_created }) => {
  return (
    <div className="w-full h-[40px] flex justify-between px-[40px] hover:bg-[#f8f8ff]  transition-all duration-200 ease-in-out my-[20px]">
      <div className=" flex gap-3 items-center">
        <input type="checkbox" checked={achieved} />
        <label className="text-black text-[12px]">{title} Text enty </label>
      </div>
      <div className="flex items-center gap-[30px]">
        <div className="w-[79px] h-[30px]  bg-[#EBF0F7] rounded-[4px] text-[#205BB1] font-[400] text-[12px] text-center flex items-center justify-center">
          Description
        </div>
        <p className="text-[9px] font-[300] text-[black]">{date_created}</p>
        <FaRegTrashCan className="hover:text-[red] cursor-pointer" />
      </div>
    </div>
  );
};
export default Goals;
