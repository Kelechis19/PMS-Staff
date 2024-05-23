import React from "react";
import { useState } from "react";
import { Link, Route, Routes, Navigate, NavLink } from "react-router-dom";
import SelfAppraisal from "./SelfAppraisal";
import Peer_Review from "./Peer_Review";

const Review = () => {
	const [activeTab, setActiveTab] = useState(1);

	function handleClick(tabNumber) {
		setActiveTab(tabNumber);
	}
	return ( 
		<div className="w-full overflow-hidden -ml-4">
			<div className='flex items-center bg-white text-center mt-[20px]  font-[700] rounded-[10px]   overflow-hidden'>
				<div
					className={`w-full h-[45px] bg-[white] rounded-[5px] flex text-center text-[#205BB1]`}>
					<NavLink
						to={`Self Appraisal`}
						className={({ isActive }) =>
							isActive
								? "bg-[rgba(29,83,161,0.09)] p-3 w-full rounded-[10px] "
								: "p-3 w-full rounded-[10px] "
						}>
						Self Appraisal
					</NavLink>
				</div>
				<div
					className={`w-full h-[45px] bg-[white] rounded-[5px] flex text-center text-[#205BB1]`}>
					<NavLink
						to={`Peer Review`}
						className={({ isActive }) =>
							isActive
								? "bg-[rgba(29,83,161,0.09)] p-3 w-full rounded-[10px] "
								: "p-3 w-full rounded-[10px] "
						}
						onClick={() => handleClick(1)}>
						Peer Review
					</NavLink>
				</div>
			</div>
			<div>
				<Routes>
					<Route path='Self Appraisal' element={<SelfAppraisal />} />
					<Route path='Peer Review' element={<Peer_Review />} />
					<Route path='/' element={<Navigate to='Self Appraisal' />} />
				</Routes>
			</div>
		</div>
	);
};

export default Review;
