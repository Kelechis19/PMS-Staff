import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

const ComplaintPopup = ({ complain }) => {
	return ReactDOM.createPortal(
		<div className="absolute inset-0 w-screen max-h-screen flex flex-row items-center justify-center px-[10px]  bg-black/40 pt-[10px] border-b-[1px] border-b-[#656667]/10 ">
			<div className="w-[782px] h-[459px] bg-white rounded">
				<div className="flex mt-[24px]">
					<div className="ml-[24px] text-lg font-bold">File a complaint</div>
					<div
						className="cursor-pointer text-[30px] ml-[580px]"
						onClick={() => complain()}>
						<IoClose />
					</div>
				</div>
				<div className="flex mt-[20px]">
					<div className="text-base font-semibold ml-[24px] ">Title</div>
					<div className="text-base font-semibold ml-[550px] mt-[5px] ">
						To:
					</div>
				</div>
				<div className="flex">
					<input
						className="ml-[24px] w-[556px] h-[38px] text-wrap rounded border border-black border-opacity-20"
						placeholder="Complaint Title..."></input>
					<div className="ml-[24px] w-[130px] bg-white rounded border border-black border-opacity-20">
						<select name="" id="" className="w-full h-full rounded">
							<option>GM/HOD</option>
							<option>HR</option>
						</select>
					</div>
				</div>
				<div className="mt-[24px] ml-[24px] text-base font-semibold">
					<div>Report</div>
				</div>
				<textarea className="h-[200px] mt-[8px] ml-[24px] w-[712px] rounded border border-black border-opacity-20 "></textarea>
				<button className="w-[65px] h-[30px] bg-[#4D7CC1] rounded shadow justify-center items-center ml-[700px] mt-2">
					<div className="text-xs font-semibold text-center text-indigo-50 ">
						Submit
					</div>
				</button>
			</div>
		</div>,

		document.getElementById("root")
	);
};

export default ComplaintPopup;
