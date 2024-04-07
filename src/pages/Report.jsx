import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Report = () => {
	const [activeTab, setActiveTab] = useState(1);

	function handleClick(tabNumber) {
		setActiveTab(tabNumber);
	}
	return (
		<div>
			<div className="flex items-center bg-white text-center mt-[20px]  font-[700] rounded-[10px] overflow-hidden ">
				<div className={`w-full font-[700]`}>
					<Link to={`complaints`}>
						<button
							className={`${
								activeTab === 1
									? "bg-[rgba(29,83,161,0.09)] rounded-[10px]"
									: ""
							} p-3 w-full rounded-[10px] text-[#205BB1]`}
							onClick={() => handleClick(1)}>
							Complaints
						</button>
					</Link>
				</div>
				<div className=" w-full font-[700] font-[#205BB1]">
					<Link to={`evaluation`}>
						<button
							className={`${
								activeTab === 2 ? "bg-[rgba(29,83,161,0.09)]" : ""
							} p-3 w-full rounded-[10px] text-[#205BB1]`}
							onClick={() => handleClick(2)}>
							Evaluation
						</button>
					</Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Report;
