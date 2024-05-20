import React, { useState } from "react";
import { Departments } from "../data/temp";
import { CiSearch } from "react-icons/ci";

const Peer_Review = () => {
	const data = Departments;
	const [emplpoyeeOpenPage, setEmployeeOpenPage] = useState(0);

	return (
		<div className='bg-white h-full relative   mt-4 -m-2'>
			{/* <div className=' relative  h-full items-center  '>
				<div className='relative w-full h-[30px] flex bg-[white] items-center rounded-lg border border-[#00000040]'>
					<span className='text-[20px] pl-[10px] pr-[5px] '>
						<CiSearch />
					</span>

					<input
						className='no-underline outline-none w-full rounded-[30px]'
						placeholder='Search Employee'
					/>
				</div>
				<div className='relative flex text-sm mt-6 font-semibold gap-3 items-center '>
					<p>Department</p>
					<div className='w-[50%] h-[40px] animate-appearance-in flex rounded-lg  '>
						<div className=' items-center content-center w-full h-full rounded-lg bg-[#E9EFF7] '>
							<select className='w-full outline-none rounded-lg bg-[#E9EFF7]'>
								<option className='bg-white'>HOD</option>
								<option className='bg-white'>GM</option>
								<option className='bg-white'>HR</option>
								<option className='bg-white'>All Departments</option>
							</select>
						</div>
					</div>
				</div>
				<p className='pt-6 mb-6 '>Employeee</p>
				<div className='pl-9 relative'>
					<EmployeeRow />
				</div>
			</div> */}ronorkmg
		</div>
	);
};

const EmployeeRow = () => {
	const position = ["GM", "AGM", "HOD"];
	const admindata = Departments["Administration"];

	return (
		<div className='flex items-center relative'>
			<img src='/joe.jpg' className='w-[50px] h-[50px] rounded-[50%] mr-5' />
			<div className='flex flex-col'>
				<div className='lol font-semibold'>{admindata.HOD.name}</div>
				<div className=' font-normal'>{position[0]}</div>
			</div>
			<div className='font-normal ml-[100px] mr-24'>
				{admindata.HOD.position}
			</div>

			{[...Array(5)].map((_, index) => (
				<div
					key={index}
					className='relative w-[4%] bg-[#D9D9D9] h-[8px] rounded-full flex flex-row mr-2'>
					<div className='w-full h-full bg-inherit rounded-full relative duration-1000'></div>
				</div>
			))}

			<div className='w-[130px] h-[30px] bg-black rounded shadow ml-[75%] mt-[10px] mb-[8px] '>
				<div className='text-xs font-semibold text-indigo-50 '>Submit</div>
			</div>
		</div>
	);
};

export default Peer_Review;
