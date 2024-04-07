import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
	Facilities,
	Marketing,
	Network,
	Innovation,
	Finance,
	HumanR,
	Budgeting,
	InfoTS,
	Administration,
	Broadcast,
	Sales,
	Business,
	SatNav,
	Broadband,
	SatCtrl,
} from "../assets/index";

const Task = () => {
	const [activeTab, setActiveTab] = useState(1);

	function handleClick(tabNumber) {
		setActiveTab(tabNumber);
	}

	return (
		<>
			<div className="flex items-center bg-white text-center mt-[20px]  font-[700] rounded-[10px] overflow-hidden  ">
				<div className={`w-full font-[700]`}>
					<Link to={`ongoing-task`}>
						<button
							className={`${
								activeTab === 1
									? "bg-[rgba(29,83,161,0.09)] rounded-[10px]"
									: ""
							} p-3 w-full rounded-[10px] text-[#205BB1]`}
							onClick={() => handleClick(1)}>
							Ongoing Task
						</button>
					</Link>
				</div>
				<div className=" w-full font-[700] font-[#205BB1]">
					<Link to={`task-review`}>
						<button
							className={`${
								activeTab === 2 ? "bg-[rgba(29,83,161,0.09)]" : ""
							} p-3 w-full rounded-[10px] text-[#205BB1]`}
							onClick={() => handleClick(2)}>
							Task Review
						</button>
					</Link>
				</div>
				<div className="w-full font-[700]">
					<Link to={`task-history`}>
						<button
							className={`${
								activeTab === 3 ? "bg-[rgba(29,83,161,0.09)] " : ""
							} p-3 w-full rounded-[10px] text-[#205BB1]`}
							onClick={() => handleClick(3)}>
							Task History
						</button>
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};
const DepartmentTile = ({ title, image, link }) => {
	// return(
	//   <div className="bg-cover w-[235px] h-[235px] rounded-[6px] text-white font-[700px] flex flex-col justify-end"   style={{backgroundImage:`url("${image}")`}}>
	//       {title}
	//   </div>
	// )
};
export default Task;
