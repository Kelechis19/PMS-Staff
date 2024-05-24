import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Departments } from "../data/temp";


const Complaints = () => {
	return (
		<div className='w-full relative h-full -ml-4'>
			<div className='mt-[10px] flex items-center border-1 justify-between border-White px-3 p-1 text-blue-300 rounded-md '>
				<p>Complaints</p>

				<CloseIcon />
			</div>
			<div className='flex bg-white p-2  mt-[10px] rounded-md'>
				<div className='pl-[5%]'>
					<p>Title</p>
				</div>
				<div className='pl-[52%]'>
					<p>To</p>
				</div>
				<div className='pl-[16%]'>
					<p>Status</p>
				</div>
			</div>
			<div className='hold'>
				<ComplaintsRow />{/*  I want this to just be the complaints like a single entity row  */}
			</div>
		</div>
	);
};
/* See ehn you can look at the code at the tasks tab and see how to get the ongoing tasks tab and follow that syntax  */
const ComplaintsRow = () => {
	return (
		<>
			<div className='bg-white h-[500px] px-2 mt-[10px] rounded-lg'>
				<div className='flex items-center pt-[15px]'>
					<div className=''>
						<p className="flex items-center ">
							<span className='font-black '>.</span>{" "} {/* Do not use a fullstop instead import the svg from figma and align it centrally next to the text */}
							<span className='pl-[8px]'>Create presentation slides for..</span>
						</p>
					</div>
					<div className='pl-[38%]'>
						<p>HR</p>
					</div>
					<div className='border-1 ml-[15%]  border-yellow-600 text-yellow-600 bg-yellow-200 w-[80px] px-2'>{/* Get the right colors from figma the hex value dont use talwind colors  */}
						<p>Pending</p>
					</div>
					<div className='border-1 border-black px-3  w-[60px] ml-[7%]'>
						<p>View</p>
					</div>
				</div>
				<div className='border-1 border-gray-300 mt-[10px]'></div>

				<div className='flex items-center pt-[15px]'>
					<div className=''>
						<p>
							<span className='font-black '>.</span>{" "}
							<span className='pl-[8px]'>Create presentation slides for..</span>
						</p>
					</div>
					<div className='pl-[38%]'>
						<p>HR</p>
					</div>
					<div className='border-1 ml-[15%]  border-yellow-600 text-yellow-600 bg-yellow-200 w-[80px] px-2'>
						<p>Pending</p>
					</div>
					<div className='border-1 border-black px-3  w-[60px] ml-[7%]'>
						<p>View</p>
					</div>
				</div>
				<div className='border-1 border-gray-300 mt-[10px]'></div>

				<div className='flex items-center pt-[15px]'>
					<div className=''>
						<p>
							<span className='font-black '>.</span>{" "}
							<span className='pl-[8px]'>Create presentation slides for..</span>
						</p>
					</div>
					<div className='pl-[38%]'>
						<p>GM</p>
					</div>
					<div className='border-1 ml-[14.5%]  border-yellow-600 text-yellow-600 bg-yellow-200 w-[80px] px-2'>
						<p>Pending</p>
					</div>
					<div className='border-1 border-black px-3  w-[60px] ml-[7.2%]'>
						<p>View</p>
					</div>
				</div>
				<div className='border-1 border-gray-300 mt-[10px]'></div>
				<div className='flex items-center pt-[15px]'>
					<div className=''>
						<p>
							<span className='font-black '>.</span>{" "}
							<span className='pl-[8px]'>Create presentation slides for..</span>
						</p>
					</div>
					<div className='pl-[38%]'>
						<p>HR</p>
					</div>
					<div className='border-1 ml-[15%]  border-green-600 text-green-500 bg-green-200 w-[80px] px-2'>
						<p>Received</p>
					</div>
					<div className='border-1 border-black px-3  w-[60px] ml-[7%]'>
						<p>View</p>
					</div>
				</div>
				<div className='border-1 border-gray-300 mt-[10px]'></div>

				<div className='flex items-center pt-[15px]'>
					<div className=''>
						<p>
							<span className='font-black '>.</span>{" "}
							<span className='pl-[8px]'>Create presentation slides for..</span>
						</p>
					</div>
					<div className='pl-[38%]'>
						<p>GM</p>
					</div>
					<div className='border-1 ml-[14.5%]  border-green-600 text-green-500 bg-green-200 w-[80px] px-2'>
						<p>Received</p>
					</div>
					<div className='border-1 border-black px-3  w-[60px] ml-[7.2%]'>
						<p>View</p>
					</div>
				</div>
				<div className='border-1 border-gray-300 mt-[10px]'></div>
				<div className='flex items-center pt-[15px]'>
					<div className=''>
						<p>
							<span className='font-black '>.</span>{" "}
							<span className='pl-[8px]'>Create presentation slides for..</span>
						</p>
					</div>
					<div className='pl-[38%]'>
						<p>GM</p>
					</div>
					<div className='border-1 ml-[14.5%]  border-green-600 text-green-500 bg-green-200 w-[80px] px-2'>
						<p>Received</p>
					</div>
					<div className='border-1 border-black px-3  w-[60px] ml-[7.2%]'>
						<p>View</p>
					</div>
				</div>
				<div className='border-1 border-gray-300 mt-[10px]'></div>
			</div>
		</>
	);
};

export default Complaints;
