import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdAnalytics } from "react-icons/io";
import { MdChecklist } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineEventNote } from "react-icons/md";

const Nav = () => {
	const navigate = useNavigate();
	const activeLink =
		"text-[#205BB1] bg-[#1D53A117]  w-full h-[40px] shadow-lg shadow-[black]/10 font-medium   flex  rounded-[10px]";
	const normal =
		"w-full  hover:bg-[#1D53A117]/10 h-[40px] rounded-[10px] flex ";
	return (
		<div className="relative w-[303px] h-[90vh] bg-[white] rounded-[20px] flex flex-col items-center">
			<img src={logo} className="relative mt-[30px]" />
			<div className="flex flex-col w-full px-[20px] text-black gap-5 mt-[40px] justify-between h-full ">
				<div className="flex flex-col w-full px-[20px] text-black gap-5 ">
					<NavLink
						to="/dashboard"
						className={({ isActive, isPending }) =>
							isActive ? activeLink : normal
						}>
						<span className="flex gap-3 w-full items-center pl-[10px]">
							<LuLayoutDashboard />
							<span>Dashboard</span>
						</span>
					</NavLink>
					<NavLink
						to="task"
						className={({ isActive, isPending }) =>
							isActive ? activeLink : normal
						}>
						<span className="flex gap-3 w-full items-center pl-[10px]">
							<MdOutlineEventNote />
							<span>Task</span>
						</span>
					</NavLink>
					<NavLink
						to="analytics"
						className={({ isActive, isPending }) =>
							isActive ? activeLink : normal
						}>
						<span className="flex gap-3 w-full items-center pl-[10px]">
							<IoMdAnalytics />
							<span>Analytics</span>
						</span>
					</NavLink>
					<NavLink
						to="review"
						className={({ isActive, isPending }) =>
							isActive ? activeLink : normal
						}>
						<span className="flex gap-3 w-full items-center pl-[10px]">
							<MdChecklist />

							<span>Review</span>
						</span>
					</NavLink>
				</div>
				<div className="flex flex-col w-full px-[10px] gap-4 pb-[30px] ">
					<div className="flex gap-3 w-full items-center pl-[10px]  cursor-pointer ">
						<NavLink
							to="settings"
							className={({ isActive, isPending }) =>
								isActive ? activeLink : normal
							}>
							<span className="flex gap-3 w-full items-center pl-[10px]">
								<IoSettingsOutline />
								Settings
							</span>
						</NavLink>
					</div>
					<div
						onClick={() => {
							navigate("/signin");
						}}
						className="w-full border-solid border-[2px] border-[#4D7CC1] h-[40px] text-[#4D7CC1] rounded-[10px] flex items-center pl-[10px] gap-4 hover:bg-[#e9f0f1] cursor-pointer ">
						<span className="text-[30px]">
							<IoLogOutOutline />
						</span>
						Logout
					</div>
				</div>
			</div>
		</div>
	);
};

// const NavLink = ()=>{
//     return (
//         <></>
//     )
// }
export default Nav;
