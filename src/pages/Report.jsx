import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import { goals } from "../data/temp";
import { IoMdAddCircle } from "react-icons/io";

// import { NavLink } from "react-router-dom";

const Report = () =>{
  const [activeTab, setActiveTab] = useState(1);

  function handleClick(tabNumber) {
    setActiveTab(tabNumber);
  }
  return<div>
      <div className="flex items-center bg-white text-center mt-[20px]  font-[700] rounded-[10px] overflow-hidden ">
        <div className={`w-full font-[700]`}>
          <Link to={`complaints`}>
            <button className={`${activeTab === 1 ? "bg-[rgba(29,83,161,0.09)] rounded-[10px]" : ''} p-3 w-full rounded-[10px] text-[#205BB1]`} onClick={() => handleClick(1)}>Complaints</button>
          </Link>
        </div>
        <div className=" w-full font-[700] font-[#205BB1]">
          <Link to={`evaluation`}>
            <button className={`${activeTab === 2 ? "bg-[rgba(29,83,161,0.09)]" : ''} p-3 w-full rounded-[10px] text-[#205BB1]`} onClick={() => handleClick
              (2)}>Evaluation</button>
          </Link>
        </div>
        
      </div>
      <Outlet />
    </div>
        {/* <div className="w-[full] h-[46px] bg-white rounded-tl-lg rounded-tr-lg shadow flex items-center">
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

        <button className="relative items-center w-full h-12 bg-white pl-[970px] py-[5px] rounded-b-lg">
          <div className="w-[146px] h-[37px] px-3 py-2 bg-blue-500 rounded shadow justify-center items-center gap-2 inline-flex">
            <img className="w-[21px] h-[21px]" src="../src/assets/subtract.svg" />
            <div className="text-xs font-bold text-center text-indigo-50 ">File a Complaint</div>
          </div>
        </button> */}
  
  
    
}



// const TaskRow = ({ title, status, to }) => {
  
//   return (
//     <div className=" w-full flex flex-col gap-[10px] ">
      
//       <div>
        
        
//         <div className="w-[full] h-[60px] bg-white shadow flex border-b-[3px] border-b-[#656667]/10 items-center ">
//           <div className=" w-[6%] pl-[24px]">
//             <img src="../src/assets/taskimg/Check.svg" alt="" />
//           </div>
//           <div className="w-[54%]  text-[20px] text-zinc-500  text-start">{title}</div>
//           <div className="w-[10%]  text-[20px] text-zinc-500  text-center">{to}</div>
//            <div className="w-[18%] relative">
//               <div className={` ml-[65px] w-[100px] h-[30px] rounded-[4px] ${status === "Received" ?"bg-[#74B72E] text-[#74B72E]":status ==="Pending" ?"bg-[#F5BA45] text-[#F5BA45]" :""}    bg-opacity-20   `}>
//                 <div className="relative justify-start w-full h-full text-center">{status}</div> 
//               </div>
//             </div>
//            <div className="ml-[28px]">
//             <button className="w-[71px] rounded border border-[#17417E] hover:bg-blue-300">View</button>
//            </div>
//         </div>
        
//       </div>
//     </div>
    
//   );
// };


export default Report;
