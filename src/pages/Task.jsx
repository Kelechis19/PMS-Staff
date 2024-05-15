import React from "react";
import { useState } from "react";
import { Link, NavLink, Route, Routes, Navigate } from "react-router-dom";
import TaskReview from "./TaskReview";
import TaskHistory from "./TaskHistory";
import OngoingTask from "./OngoingTask";
const Task = () => {
	const [activeTab, setActiveTab] = useState(1);

	function handleClick(tabNumber) {
		setActiveTab(tabNumber);
	}

	return (
		<div className="w-full flex flex-col  mt-[20px] -ml-4 h-full">
			<div className='flex items-center bg-white text-center   font-[700] rounded-[10px] overflow-hidden  '>
				<div
					className={`w-full h-[45px] bg-[white] rounded-[5px] flex text-center text-[#205BB1]`}>
					<NavLink
						to={`ongoing-task`}
						className={({ isActive }) =>
							isActive
								? "bg-[rgba(29,83,161,0.09)] p-3 w-full rounded-[10px] "
								: "p-3 w-full rounded-[10px] "
						}>
						Ongoing Tasks
					</NavLink>
				</div>
				<div
					className={`w-full h-[45px] bg-[white] rounded-[5px] flex text-center text-[#205BB1]`}>
					<NavLink
						to={`task-review`}
						className={({ isActive }) =>
							isActive
								? "bg-[rgba(29,83,161,0.09)] p-3 w-full rounded-[10px] "
								: "p-3 w-full rounded-[10px] "
						}>
						Task Review
					</NavLink>
				</div>
				<div
					className={`w-full h-[45px] bg-[white] rounded-[5px] flex text-center text-[#205BB1]`}>
					<NavLink
						to={`task-history`}
						className={({ isActive }) =>
							isActive
								? "bg-[rgba(29,83,161,0.09)] p-3 w-full rounded-[10px] "
								: "p-3 w-full rounded-[10px] "
						}>
						Task History
					</NavLink>
				</div>
				
			</div>
			<div >
				<Routes>
					<Route path='ongoing-task' element={<OngoingTask />} />
					<Route path='task-review' element={<TaskReview />} />
					<Route path='task-history' element={<TaskHistory />} />
					<Route path='/' element={<Navigate to='ongoing-task' />} />
				</Routes>
			</div>
		</div>
	);
};

export default Task;
