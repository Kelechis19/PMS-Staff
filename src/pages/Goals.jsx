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
    <div className=" w-full flex flex-col gap-[10px] mt-2">
      {/* <div className="w-full">
        <p className="font-bold text-[16px]">Organiztional Goals</p>
      </div> */}
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
          Complaints
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
          Evaluation
        </button>
        {/* <button
          className={`text-[#205BB1] text-[16px] font-[700] flex-1  rounded-[5px]  ${
            activeView === 3 ? "bg-[#1D53A117]/10 shadow-[black]/10" : ""
          }`}
          onClick={() => {
            handleButtonClick(3);
          }}
        >
          Long-Term
        </button> */}
      </div>
      {/* <div className=" w-full  bg-white rounded-[8px]  min-h-[70vh]">
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
      </div> */}
      <div>
        <div className="w-[full] h-[46px] bg-white rounded-tl-lg rounded-tr-lg shadow flex items-center">
          <div className="text-zinc-500 text-[18px] font-bold  pl-[120px]  ">Title</div>
          <div className="text-zinc-500 text-[18px] font-bold pl-[575px] ">To</div>
          <div className="text-zinc-500 text-[18px] font-bold pl-[132px] ">Status</div>
        </div>
        
        <div className="w-[full] h-[60px] bg-white shadow flex border-b-[3px] border-b-[#656667]/10 items-center">
          <div className=" w-[6%] pl-[24px]">
            <img src="../src/assets/taskimg/Check.svg" alt="" />
          </div>
          <div className="w-[54%]  text-[20px] text-zinc-500  text-start">Create presentation slides for ...</div>
          <div className="w-[10%]  text-[20px] text-zinc-500  text-center">GM</div>
           <div className="w-[18%] relative">
              <div className=" ml-[65px] w-[100px] h-[30px] rounded-[4px] bg-[#74B72E] text-[#74B72E] bg-opacity-20 relative text-center">
                <div className="relative justify-start w-full h-full text-center">Reviewed</div> 
              </div>
            </div>
           <div className="ml-[28px]">
            <button className="w-[71px] rounded border border-[#17417E] hover:bg-blue-300">View</button>
           </div>
        </div>
        <div className="w-[full] h-[60px] bg-white shadow flex border-b-[3px] border-b-[#656667]/10 items-center">
          <div className=" w-[6%] pl-[24px]">
            <img src="../src/assets/taskimg/Check.svg" alt="" />
          </div>
          
          <div className="w-[54%]  text-[20px] text-zinc-500  text-start">Create presentation slides for ...</div>
          <div className="w-[10%]  text-[20px] text-zinc-500  text-center">HR</div>
           <div className="w-[18%] relative">
              <div className=" ml-[65px] w-[100px] h-[30px] rounded-[4px] bg-[#74B72E] text-[#74B72E] bg-opacity-20 relative text-center">
                <div className="relative justify-start w-full h-full text-center">Reviewed</div> 
              </div>
            </div>
           <div className="ml-[28px]">
            <button className="w-[71px] rounded border border-[#17417E] hover:bg-blue-300">View</button>
           </div>
        </div>
        
        <div className="w-[full] h-[60px] bg-white shadow flex border-b-[3px] border-b-[#656667]/10 items-center">
          <div className=" w-[6%] pl-[24px]">
            <img src="../src/assets/taskimg/Check.svg" alt="" />
          </div>
          <div className="w-[54%]  text-[20px] text-zinc-500  text-start">Create presentation slides for ...</div>
          <div className="w-[10%]  text-[20px] text-zinc-500  text-center">GM</div>
           <div className="w-[18%] relative">
              <div className=" ml-[65px] w-[100px] h-[30px] rounded-[4px] bg-[#F5BA45] text-[#F5BA45] bg-opacity-20 relative text-center">
                <div className="relative justify-start w-full h-full text-center">Pending</div> 
              </div>
            </div>
           <div className="ml-[28px]">
            <button className="w-[71px] rounded border border-[#17417E] hover:bg-blue-300">View</button>
           </div>
        </div>
        
        <div className="w-[full] h-[60px] bg-white shadow flex border-b-[3px] border-b-[#656667]/10 items-center">
          <div className=" w-[6%] pl-[24px]">
            <img src="../src/assets/taskimg/Check.svg" alt="" />
          </div>
          <div className="w-[54%]  text-[20px] text-zinc-500  text-start">Create presentation slides for ...</div>
          <div className="w-[10%]  text-[20px] text-zinc-500  text-center">HR</div>
           <div className="w-[18%] relative">
              <div className=" ml-[65px] w-[100px] h-[30px] rounded-[4px] bg-[#F5BA45] text-[#F5BA45] bg-opacity-20 relative text-center">
                <div className="relative justify-start w-full h-full text-center">Pending</div> 
              </div>
            </div>
           <div className="ml-[28px]">
            <button className="w-[71px] rounded border border-[#17417E] hover:bg-blue-300">View</button>
           </div>
        </div>
        
      </div>
    </div>
    
  );
};

const GoalEntry = ({ title, achieved, date_created }) => {
  return (
    <div className="w-full h-[40px] flex justify-between px-[40px] hover:bg-[#f8f8ff]  transition-all duration-200 ease-in-out my-[20px]">
      <div className="flex items-center gap-3 ">
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
