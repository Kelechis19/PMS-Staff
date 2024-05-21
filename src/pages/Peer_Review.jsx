import React, { useState } from "react";
import { Departments } from "../data/temp";
import { CiSearch } from "react-icons/ci";

const Peer_Review = () => {
	const data = Departments;
	const [emplpoyeeOpenPage, setEmployeeOpenPage] = useState(0);

	return (
		<div className='bg-white h-full relative rounded-lg  mt-4'>
			<div className=' relative  h-full items-center p-2'>
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
				<div className=' relative space-y-3 '>
					<EmployeeRow />
					<EmployeeRow />
					<EmployeeRow />
					<EmployeeRow />
					<EmployeeRow />
				</div>
			</div>
		</div>
	);
};

const EmployeeRow = () => {
	const position = ["GM", "AGM", "HOD"];
	const admindata = Departments["Administration"];

	return (
		<div className='flex items-center relative text-nowrap w-full h-full gap-40 hover:border hover:border-[#98B4DB] duration-600 ease-in-out rounded-lg px-2'>
			<div className="flex h-full ">
				<img src='/joe.jpg' className='w-[50px] h-[50px] rounded-[50%] mr-4 ' />
				<div className='flex flex-col text-nowrap'>
					<div className=' font-semibold '>{admindata.HOD.name}</div>
					<div className=' font-normal'>{position[0]}</div>
				</div>
			</div>
			<div className='font-normal h-full  text-center'>
				{admindata.HOD.position}
			</div>

			<div className='flex duration-1000 relative '>
				{[...Array(5)].map((_, index) => (
					<div
						key={index}
						className='relative w-10 bg-[#D9D9D9] h-[8px] rounded-full flex  mr-2'></div>
				))}
			</div>
			<div className='w-[90px] h-[30px] bg-white rounded shadow flex items-center justify-center border-[#6A91CB] border  cursor-pointer'>
				<div className='text-xs font-semibold text-[#6A91CB]'>Review</div>
			</div>
		</div>
	);
};

export default Peer_Review;
