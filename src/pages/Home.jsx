import React from "react";
import { CiSearch } from "react-icons/ci";
// import MiniCalendar from "../../horizon-tailwind-react/src/components/calendar/MiniCalendar";

import { CircularProgress } from "@nextui-org/react";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { goals } from "../data/temp";
import Calendar from "react-calendar";

import ChartTasks from "../components/Chart";
import GoalForm from "../components/GoalForm";
import Date from "../components/Date"
import { Link } from 'react-router-dom';

const Home = () => {
  const [goalsList, setGoals] = useState([...goals]);

  const percentage = 70;
  const [goalform, setGoalForm] = useState(false);
  const handleAddGoal = (e) => {
    setGoalForm(true);
  };
  const closeGoalForm = () => {
    setGoalForm(false);
  };
  return (
    <div className="flex flex-col ">
      {goalform && <GoalForm close={closeGoalForm} addGoal={setGoals} />}

      <div className="w-full gap-4  mt-[10px] flex">
        <button>
        <div className="flex bg-white h-[160px] w-[350px] rounded-[8px] items-center p-[30px] gap-6 ">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[16px] font-[700]">Overall Task Completed</p>
              <p className="font-[300] text-[12px] ">
                28/56 tasks completed
              </p>
            </div>
            <div className="relative w-[253px] bg-[#D9D9D9] h-[8px] rounded-full">
              <div
                className="absolute h-full bg-[#cdc307ed] rounded-full"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-[20px] font-[600] ">{percentage}%</span>
          </div>
         
        
        </div>
        </button>
        <button>
        <div className="flex bg-white h-[160px] w-[350px] rounded-[8px] items-center p-[30px] gap-6 ">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[16px] font-[700]">Overall Task Completed</p>
              <p className="font-[300] text-[12px] ">
                28/56 tasks completed
              </p>
            </div>
            <div className="relative w-[253px] bg-[#D9D9D9] h-[8px] rounded-full">
              <div
                className="absolute h-full bg-[#cdc307ed] rounded-full"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-[20px] font-[600] ">{percentage}%</span>
          </div>
         
        
        </div>
        </button>
       <button> <div className="w-[430px] h-[160px] bg-white rounded-[8px]">
          {<Date />}
        </div></button>
      
      </div>
      {/* <div className="w-full flex mt-[1rem] gap-4 ">
        <div className="w-[600px]  bg-white rounded-[8px] flex flex-col p-[20px]">
          <div className="flex justify-between w-full">
            <p className="text-[16px] font-[700]">Analytics Per Department</p>
            <div className="flex gap-4">
              <div className="w-[80px] h-[30px] text-center rounded-[4px] bg-[#6A91CB24]">
                This week
              </div>

              <div className="w-[57px] h-[30px] border-[1px] border-[#17417E] rounded-[4px] text-center cursor-pointer">
                Filter
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center mt-[1rem] flex-col gap-[1rem]">
            <div className="w-[70%] h-[30px] flex bg-[white] border-[1px] border-[#6A91CB] items-center rounded-[30px] ">
              <span className="text-[20px] pl-[20px] pr-[5px] text-slate-400">
                <CiSearch />
              </span>

              <input
                className="decorations-none no-underline outline-none w-full rounded-[30px]"
                placeholder="Facility"
              />
            </div>
            <div className="w-[70%] flex justify-between">
              <p className="text-[18px] font-[700]">
                HOD:{" "}
                <span className="text-[13px] font-[300]">Adoyiza Daniel</span>
              </p>
              <p className="text-[18px] font-[700]">
                No. of Staff: <span className="text-[13px] font-[300]">15</span>
              </p>
            </div>
          </div>
          <ChartTasks />
        </div>
        <div className="bg-[white] w-[600px] h-full rounded-[8px]">
          <div className="flex w-full justify-between p-[20px]">
            <p className="font-[700] text-[16px]">Goals Window</p>
            <div
              className="bg-[#4D7CC1] rounded-[4px] text-white flex items-center px-[10px] py-[5px] gap-3 cursor-pointer hover:bg-[#072b61]"
              onClick={handleAddGoal}
            >
              <IoMdAddCircle className="text-[25px]" />{" "}
              <span>Create new Goal</span>
            </div>
          </div>
          <div className="px-[20px] w-full flex flex-col gap-5 pb-[20px]">
            {goalsList.map((item, key) => {
              return (
                <GoalCheckBox title={item.title} checked={item.achieved} />
              );
            })}
          </div>
        </div>
      </div> */}

      <div className="flex flex-wrap justify-between">



        <div className=" bg-white  mt-[20px] w-[550px]  items-center rounded-lg px-1">
          <div className="flex items-center justify-between p-2 pt-[-15px]">
            <div className="text-base font-bold text-black ">
              <p>Ongoing Tasks</p>
            </div>
            <Link to="OngoingTasks"><div className="flex items-center text-sm font-medium text-black ">
              <button className="flex ">See all <img src="/src/assets/star/arrow.svg" alt="" /></button>
            </div></Link>
            
          </div>





          <div className="mt-[-10px] text-black text-xs font-normal  ">
            <div className="flex justify-between p-1">
              <div className="flex items-center">
                <div className="w-[26px]  ">
                  <img src="/src/assets/taskimg/check.png" alt="" />
                </div>
                <div className="text-sm">
                  <p>People financial projections for upcoming..</p>
                </div>
              </div>
              <div className="flex items-center w-[55px] mt-[5px]">
                <div className="img">
                  <img src="/src/assets/homee/hme.svg" alt="" />
                </div>
                <div className="ml-[-13px]">
                  <img src="/src/assets/homee/hme2.svg" alt="" />
                </div>
                <div className="ml-[-13px]">
                  <img src="/src/assets/homee/hme3.svg" alt="" />
                </div>
              </div>
              <div className="text-sm">
                <p>23rd March 2024</p>
              </div>
            </div>

            <div className="flex justify-between p-1 mt-[-10px]">
              <div className="flex items-center">
                <div className="w-[26px]  ">
                  <img src="/src/assets/taskimg/check.png" alt="" />
                </div>
                <div className="text-sm">
                  <p>People financial projections for upcoming..</p>
                </div>
              </div>
              <div className="flex items-center w-[55px] mt-[5px]">
                <div className="img">
                  <img src="/src/assets/homee/hme.svg" alt="" />
                </div>
                <div className="ml-[-13px]">
                  <img src="/src/assets/homee/hme2.svg" alt="" />
                </div>
                <div className="ml-[-13px]">
                  <img src="/src/assets/homee/hme3.svg" alt="" />
                </div>
              </div>
              <div className="text-sm">
                <p>3rd March 2024</p>
              </div>
            </div>
            <div className="flex justify-between p-1 mt-[-10px]">
              <div className="flex items-center">
                <div className="w-[26px]  ">
                  <img src="/src/assets/taskimg/check.png" alt="" />
                </div>
                <div className="text-sm">
                  <p>People financial projections for upcoming..</p>
                </div>
              </div>
              <div className="flex items-center w-[55px] mt-[5px]">
                <div className="img">
                  <img src="/src/assets/homee/hme.svg" alt="" />
                </div>
                <div className="ml-[-13px]">
                  <img src="/src/assets/homee/hme2.svg" alt="" />
                </div>
                <div className="ml-[-13px]">
                  <img src="/src/assets/homee/hme3.svg" alt="" />
                </div>
              </div>
              <div className="text-sm">
                <p>13th March 2024</p>
              </div>
            </div>
            
           



          </div>









        </div>

        <div className="w-[570px] mt-[20px]  relative bg-white rounded-lg">
          <p>Analysis</p>
        </div>

        <div className="w-[550px] mt-[10px]   bg-white rounded-lg h-28 px-1">
          <div className="flex items-center justify-between p-2 pt-[-15px]">
            <div className="text-base font-bold text-black ">
              <p>Ongoing Tasks</p>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-black">
            
            <button>See all</button>
            <div className="relative w-6 h-6">
        <img src="/src/assets/star/arrow.svg" alt="" />
          </div>
          </div>

          </div>
          <div className="flex items-center justify-between p-1 text-xs font-normal text-black ">
            <div className="flex items-center">
              <div className="w-[26px]  ">
                <img src="/src/assets/taskimg/check.png" alt="" />
              </div>
              <div className="text-sm">
                <p>Create presentation slides for meeting with...</p>
              </div>
            </div>
            <div className="flex items-center   w-[100px] h-[17.86px] relative">
              <div className="img">
                <img src="/src/assets/star/star1.svg" alt="" />
              </div>
              <div className="img">
                <img src="/src/assets/star/star1.svg" alt="" />
              </div>
              <div className="img">
                <img src="/src/assets/star/star1.svg" alt="" />
              </div>
              <div className="img">
                <img src="/src/assets/star/star4.svg" alt="" />
              </div>
              <div className="img">
                <img src="/src/assets/star/star5.svg" alt="" />
              </div>
            </div>
            <div className="text-sm">
              <p>3rd March 2024</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-1 mt-[-10px] text-black text-xs font-normal  pb-[-60px] ">
            <div className="flex items-center">
              <div className="w-[26px]  ">
                <img src="/src/assets/taskimg/check.png" alt="" />
              </div>
              <div className="text-sm">
                <p>Create presentation slides for meeting with...</p>
              </div>
            </div>
            <div className="flex items-center   w-[100px] h-[17.86px] relative">
              <div className="img">
                <img src="/src/assets/star/star1.svg" alt="" />
              </div>
              <div className="img">
                <img src="/src/assets/star/star1.svg" alt="" />
              </div>
              <div className="img">
                <img src="/src/assets/star/star1.svg" alt="" />
              </div>
              <div className="img">
                <img src="/src/assets/star/star1.svg" alt="" />
              </div>
              <div className="img">
                <img src="/src/assets/star/star1.svg" alt="" />
              </div>
            </div>
            <div className="text-sm">
              <p>3rd March 2024</p>
            </div>
          </div>
        </div>
        <div className="w-[570px] mt-[10px]   bg-white rounded-lg pl-[15px] ">
          <div className="text-black text-base font-bold  pt-[15px]">
            Comments</div>
          <div className="text-black text-xs font-normal  pt-[6px] pb-[15px]">
            <p>You can send complaints or feedback to your General Manager</p>
          </div>
          <div className="w-[540px] h-[57px] p-1 relative rounded border border-black border-opacity-20 pt-[10px]">

          </div>
          <div className="w-[130px] h-[30px] px-3 py-2 bg-blue-500 rounded shadow justify-end items-center gap-2 inline-flex  ml-[410px] mt-[14px] mb-[8px]">
            <div className="text-xs font-semibold text-center text-indigo-50 ">Create a comment</div>
          </div>
        </div>
        <div className="w-[550px] mb-[100px]   bg-white rounded-lg  mt-[-65px]">
        <div className="flex items-center justify-between p-2 pt-[-15px]">
            <div className="text-base font-bold text-black ">
              <p>Comment</p>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-black">
            
            <button>See all</button>
              <div className="relative w-6 h-6">
          <img src="/src/assets/star/arrow.svg" alt="" />
            </div>
            </div>
          </div>
         <div className="holaa">
         <div className="hold">
          <div className="flex justify-between px-[20px] pb-[5px]">
        <div className="flex flex-wrap items-center gap-2 ">
            <div className="img">
              <img src="/src/assets/star/Eli14.svg" alt="" />
            </div>
            <div className="flex gap-2">
              <div className="text-sm font-bold text-black ">
              <p>Hr</p>
              </div>
              <div className="text-black text-[10px] font-light  ">
                <div className="pt-[-40px]">
                <p>2.00pm</p>
                </div>
              
              <div className="ml-[-26px]">
              <p>Onboarding for new employees completed...</p>
              </div>
              </div>
            </div>
            
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[15px] h-[15px] relative origin-top-left ">
          <img src="/src/assets/star/share.svg" alt="" />
            </div>
            <div className="w-[31px] h-3.5 text-black text-[10px] font-light ">
              <p>Reply</p>
            </div>
          </div>
          
        </div>
        <div className="w-[543] h-[0px] border border-black border-opacity-10 "></div>
          </div>
          <div className="mt-[5px] mb-[5px]">
          <div className="flex justify-between px-[20px] pb-[5px]">
        <div className="flex flex-wrap items-center gap-2 ">
            <div className="img">
              <img src="/src/assets/star/Eli14.svg" alt="" />
            </div>
            <div className="flex gap-2">
              <div className="text-sm font-bold text-black ">
              <p>GM</p>
              </div>
              <div className="text-black text-[10px] font-light  ">
                <div className="pt-[-40px]">
                <p>2.00pm</p>
                </div>
              
              <div className="ml-[-26px]">
              <p>Onboarding for new employees completed...</p>
              </div>
              </div>
            </div>
            
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[15px] h-[15px] relative origin-top-left ">
          <img src="/src/assets/star/share.svg" alt="" />
            </div>
            <div className="w-[31px] h-3.5 text-black text-[10px] font-light ">
              <p>Reply</p>
            </div>
          </div>
          
        </div>
        <div className="w-[543] h-[0px] border border-black border-opacity-10 "></div>
          </div>
          <div className="hold">
          <div className="flex justify-between px-[20px] pb-[5px]">
        <div className="flex flex-wrap items-center gap-2 ">
            <div className="img">
              <img src="/src/assets/star/Eli14.svg" alt="" />
            </div>
            <div className="flex gap-2">
              <div className="text-sm font-bold text-black ">
              <p>GM</p>
              </div>
              <div className="text-black text-[10px] font-light  ">
                <div className="pt-[-40px]">
                <p>2.00pm</p>
                </div>
              
              <div className="ml-[-26px]">
              <p>Onboarding for new employees completed...</p>
              </div>
              </div>
            </div>
            
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[15px] h-[15px] relative origin-top-left ">
          <img src="/src/assets/star/share.svg" alt="" />
            </div>
            <div className="w-[31px] h-3.5 text-black text-[10px] font-light ">
              <p>Reply</p>
            </div>
          </div>
          
        </div>
        <div className="w-[543] h-[0px] border border-black border-opacity-10 "></div>
          </div>
          <div className="w-[90%]  text-black text-opacity-40 text-[13px] font-medium  mt-[10px] border-1 rounded-[20px] border-gray-200 p-1 ml-[25px] mb-[10px]"><input type="text " placeholder ="Add a comment" />
          </div>
         </div>
       

        </div>
        <div className="w-[570px] mt-[10px]   bg-white rounded-lg px-[15px] pt-[10px] mb-[120px]">
          <div className="text-base font-bold text-black ">
            <p>Peer Reviews</p>
          </div>
          <div className="flex items-center justify-between">
          <div className="text-xs font-light text-black ">
            <p>Anonymous Review from co-workers</p>
          </div>
          <div className="text-2xl font-bold text-black ">73%</div>
          </div>
         <div className="flex items-center justify-between mt-[5px] pt-[-40px]">
         <div className="w-[25px] flex items-center">
            <img src="/src/assets/star/star1.svg" alt="" />
            <img src="/src/assets/star/star1.svg" alt="" />
            <img src="/src/assets/star/star1.svg" alt="" />
            <img src="/src/assets/star/star4.svg" alt="" />
            <img src="/src/assets/star/star5.svg" alt="" />
            
          </div>
          <div className="w-[142px] h-[38px] px-4 py-3 bg-blue-500 rounded border border-black border-opacity-0 justify-center items-center gap-2 inline-flex ">
          <div className="text-xs font-bold text-indigo-50 ">Review Colleagues</div>
          </div>
         </div>
          
        </div>
      </div>


    </div>
  );
};
const GoalCheckBox = ({ checked, title }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <label className="flex items-center ">
        <input className="w-[33px]" type="checkbox" checked={checked} />
        <span className="text-[13px] font-[500]">{title}</span>
      </label>
      {!checked ? (
        <span className="border-[1px] border-solid border-[#17417E] w-[80px] flex items-center justify-center text-[12px] font-[600] text-[#17417E] py-[3px] rounded-[4px] hover:bg-[#e0ecf2] cursor-pointer">
          Send to HR
        </span>
      ) : (
        <span className="text-[9px] font-[300]">29th March</span>
      )}
    </div>
  );
};

const GoalMeter = ({ id, status }) => {
  return (
    <CircularProgress
      label={id}
      value={status}
      classNames={{
        svg: "w-[72px] h-[72px] ",
        indicator: "stroke-[#4D7CC1]",
        track: "stroke-[#E9EFF7]",
        value: "text-1xl font-semibold text-black",
      }}
      strokeWidth={20}
      showValueLabel={true}
    />
  );
};

export default Home;
