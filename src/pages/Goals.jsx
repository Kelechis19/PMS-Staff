import React from "react";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { goals } from "../data/temp";
import { IoMdAddCircle } from "react-icons/io";
import { Complaints } from "../data/temp";
// import { NavLink } from "react-router-dom";

const Reports = () =>{
  const [activeView, setActiveView] = useState(1);
  const handleButtonClick = (buttonName) => {
    setActiveView(buttonName);
  };
  return<div>
      <div className="w-full h-[45px]  bg-[white] rounded-[5px] flex  text-center mb-3">
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
        
      </div>
    
        <div className="w-[full] h-[46px] bg-white rounded-tl-lg rounded-tr-lg shadow flex items-center">
          <div className="text-zinc-500 text-[18px] font-bold  pl-[120px]  ">Title</div>
          <div className="text-zinc-500 text-[18px] font-bold pl-[575px] ">To</div>
          <div className="text-zinc-500 text-[18px] font-bold pl-[132px] ">Status</div>
        </div>
        
        <div className="">

      {
        Complaints.map((item, key) => {
            return (
                      <TaskRow title={item.title} status={item.status} to={item.to} />
                    )
           })
      }
            
      </div>
  </div>
  
    
}



const TaskRow = ({ title, status, to }) => {
  // const [activeView, setActiveView] = useState(1);
  // const handleButtonClick = (buttonName) => {
  //   setActiveView(buttonName);
  // };

  return (
    <div className=" w-full flex flex-col gap-[10px] ">
      
      {/* <div className="w-full h-[45px]  bg-[white] rounded-[5px] flex  text-center">
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
        
      </div> */}
      
      <div>
        
        
        <div className="w-[full] h-[60px] bg-white shadow flex border-b-[3px] border-b-[#656667]/10 items-center ">
          <div className=" w-[6%] pl-[24px]">
            <img src="../src/assets/taskimg/Check.svg" alt="" />
          </div>
          <div className="w-[54%]  text-[20px] text-zinc-500  text-start">{title}</div>
          <div className="w-[10%]  text-[20px] text-zinc-500  text-center">{to}</div>
           <div className="w-[18%] relative">
              <div className=" ml-[65px] w-[100px] h-[30px] rounded-[4px] bg-[#74B72E] text-[#74B72E] bg-opacity-20 relative text-center">
                <div className="relative justify-start w-full h-full text-center">{status}</div> 
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


export default Reports;
