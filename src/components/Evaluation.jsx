import React from "react";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { goals } from "../data/temp";
import { IoMdAddCircle } from "react-icons/io";
import { Evaluations } from "../data/temp";
import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";

const Evaluation = () => {
	return (
		<>
			<div className=" mt-4 w-[full] h-[46px] bg-white rounded-tl-lg rounded-tr-lg shadow flex items-center">
				<div className="text-zinc-500 text-[18px] font-bold  pl-[120px]  ">
					Title
				</div>
				<div className="text-zinc-500 text-[18px] font-bold pl-[575px] ">
					Date
				</div>
				<div className="text-zinc-500 text-[18px] font-bold pl-[132px] ">
					Response
				</div>
			</div>

			<div className="">
				{Evaluations.map((item, key) => {
					return <TaskRow title={item.title} date={item.date} to={item.to} />;
				})}
			</div>
		</>
	);
};

const TaskRow = ({ title, date, status, to }) => {
	return (
		<div className=" w-full flex flex-col gap-[10px] ">
			<div>
				<div className="w-[full] h-[60px] bg-white shadow flex border-b-[3px] border-b-[#656667]/10 items-center ">
					<div className=" w-[4%] pl-[24px]">
						<img src="/src/assets/Ellipse 12.svg" alt="" />
					</div>
					<div className="w-[49%]  text-[20px] text-zinc-500  text-start ">
						{title}
					</div>
					<div className="w-[28%]  text-[20px] text-zinc-500  text-center ">
						{date}
					</div>
					<div className="flex gap-5 w-[8%]">
						<button className="w-[3%] text-[20px]">
							<LuThumbsUp />{" "}
						</button>
						<button className="w-[3%] text-[20px]">
							<LuThumbsDown />{" "}
						</button>
					</div>
					<div className="ml-[28px]">
						<button className="w-[71px] rounded border border-[#17417E] hover:bg-blue-300">
							View
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Evaluation;
