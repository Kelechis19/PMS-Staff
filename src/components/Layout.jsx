import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({ children }) => {
	return (
		<>
			<div id="home"></div>
			<div className=" bg-[#F1F4F9]   flex flex-row  relative w-full max-h-screen overflow-x-hidden py-[20px] pl-[20px] pr-[20px]">
				<div className="relative w-[25%]">
					<div className="fixed top-[30px]">
						<Nav />
					</div>
				</div>

				<div className="w-[78%]  h-full  relative flex flex-col items-center justify-center ">
					<div className="w-[89%] fixed top-[10px] h-[80px] z-100  ">
						<Header />
					</div>
					<div className="w-full h-full relative flex mt-[40px] ">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
