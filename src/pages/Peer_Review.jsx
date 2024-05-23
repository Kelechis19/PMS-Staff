import React, { useState } from "react";
import { Departments } from "../data/temp";
import { CiSearch } from "react-icons/ci";
import CloseIcon from "@mui/icons-material/Close";
import PeerReviewPage1 from "../components/PeerReviewPage1";
import PeerReviewPage2 from "../components/PeerReviewPage2";
import PeerReviewPage3 from "../components/PeerReviewPage3";
import PeerReviewPage4 from "../components/PeerReviewPage4";
import PeerReviewPage5 from "../components/PeerReviewPage5";

const Peer_Review = () => {
	const data = Departments;
	const [emplpoyeeOpenPage, setEmployeeOpenPage] = useState(0);
	const percentage1 = 80;
	const [currentPage, setCurrentPage] = useState(0);
	const totalPages = 8;
	const goToNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const goToPreviousPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	}; /* this is for the pages to go next or prev to understand better go to self appraisal page */

	return (
		<div className='relative h-full mt-4 bg-white rounded-lg '>
			<div className='relative items-center h-full p-2 '>
				<div className='relative w-full h-[30px] flex bg-[white] items-center rounded-lg border border-[#00000040]'>
					<span className='text-[20px] pl-[10px] pr-[5px] '>
						<CiSearch />
					</span>

					<input
						className='no-underline outline-none w-full rounded-[30px]'
						placeholder='Search Employee'
					/>
				</div>
				<div className='relative flex items-center gap-3 mt-6 text-sm font-semibold '>
					<p>Department</p>
					<div className='w-[50%] h-[40px]  flex rounded-lg  '>
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
				<div className='relative space-y-2 '>
					<EmployeeRow />
					<EmployeeRow />
					<EmployeeRow />
					<EmployeeRow />
					<EmployeeRow />
				</div>
			</div>
			{/* this is where the pages start from  */}
			<div className='relative flex flex-col w-full h-full p-4 '>
				<div className='flex justify-between mb-4'>
					<div className='flex'>
						<img
							src='/src/assets/member/Group1.svg'
							alt=''
							className='w-[90px] h-[90px] mr-2'
						/>
						<div className='flex-col mt-3 '>
							<p className='text-base font-bold'>
								{Departments.Broadband.HOD.name}
							</p>
							<p className='text-sm font-medium'>
								{Departments.Broadband.HOD.position}
							</p>
						</div>
					</div>
					<div className='items-end justify-end'>
						<CloseIcon />
					</div>
				</div>
				<div className='flex items-center pl-2 '>
					<div className='flex flex-col w-full gap-4 '>
						<div>
							<p className='text-[16px] font-semibold'>
								{(currentPage / totalPages) * 100} %Completed
							</p>
						</div>
						<div className='relative w-[80%] bg-[#D9D9D9] h-[8px] rounded-full'>
							<div
								className='relative h-full duration-1000 bg-blue-400 rounded-full '
								style={{ width: `${percentage1}%` }}></div>
						</div>
					</div>
					<div className='flex items-center gap-7 mt-[25px] text-white mb-4'>
						<button
							className='cursor pointer bg-[#4D7CC1] w-[120px]  p-1 cursor-pointer items-center justify-center flex border border-[#17417E] rounded'
							onClick={goToPreviousPage}
							disabled={currentPage === 0}>
							Previous
						</button>
						<button
							className='cursor-pointer bg-[#4D7CC1] w-[120px]  p-1 items-center justify-center flex border border-[#17417E] rounded'
							onClick={goToNextPage}
							disabled={currentPage === totalPages}>
							Next
						</button>
					</div>
				</div>
				<p className='text-base font-bold mb-2 pl-2'>Instructions:</p>
				<p className='pl-2 text-pretty mb-4 w-[90%]'>
					Please indicate the rating that corresponds to the degree to which you
					observe this person demonstrating the listed behavior, according to
					the rating key listed below. NA should be used if you have not been in
					situations which would afford you the opportunity to observe the
					behavior.
				</p>
				<p className='pl-2 text-pretty mb-4 w-[90%]'>
					Kindly provide comments and examples which support your ratings. If
					you have questions, please contact the immediate supervisor of the
					feedback recipient.
				</p>
				<p className='text-base font-bold mb-2 pl-2'>Rating Key:</p>
				<p className='pl-2 mb-4'>
					1 = Poor; 2 = Fair; 3 = Good; 4 = Very Good; 5 = Outstanding; NA = Not
					Applicable
				</p>
				<div>
					<PeerReviewPage1 />
				</div>
				{/* first page  */}
				<div>
					<PeerReviewPage2 />
				</div>
				{/* Sedond page  */}
				<div>
					<PeerReviewPage3 />
				</div>
				{/* You get the idea  */}
				<div>
					<PeerReviewPage4 />
				</div>
				<div>
					<PeerReviewPage5 />
				</div>
				<div className='relative flex flex-col'>
					<p className='text-base font-bold mb-2 pl-2'>
						WRITTEN COMMENT SECTION
					</p>
					<p className='text-base mb-8 pl-2'>
						Comments are very important and a useful part of the appraisal
						system. Please be very specific to help your comment be actionable
						and helpful. Your comments are anonymous; so be very candid and free
						to offer them. Elaborate on most positive skills and attitudes.
					</p>
					<p className='text-base mb-2 pl-2'>
						Tell us about what officer should do differently. Is there anything
						that people are afraid of telling the officer? If any, tell us about
						it and why people are afraid of telling the officer.
					</p>
				</div>
				<textarea className='w-full h-[150px] border-2 resize-none border-[#D7D7D7] outline-none rounded p-1 mt-[5px]'></textarea>

				{/* This is the last Page that says thank you */}
				<div class='flex justify-center items-center h-screen '>
					<div class=' w-full h-full flex  flex-col justify-center items-center gap-4 border-2 rounded-lg border-[#D7D7D7]'>
						<p className=' text-5xl font-bold '>Thank you!</p>
						<p className=' text-2xl font-medium'>
							Your evaluation has been recorded
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const EmployeeRow = () => {
	const position = ["GM", "AGM", "HOD"];
	const admindata = Departments["Administration"];

	return (
		<div className='flex items-center relative text-nowrap w-full h-full gap-40 hover:border hover:border-[#98B4DB]  duration-500  rounded-lg p-2 hover:transition scroll-smooth '>
			<div className='flex h-full '>
				<img src='/joe.jpg' className='w-[50px] h-[50px] rounded-[50%] mr-4 ' />
				<div className='flex flex-col text-nowrap'>
					<div className='font-semibold '>{admindata.HOD.name}</div>
					<div className='font-normal '>{position[0]}</div>
				</div>
			</div>
			<div className='h-full font-normal text-center'>
				{admindata.HOD.position}
			</div>

			<div className='relative flex duration-1000 '>
				{[...Array(5)].map((_, index) => (
					<div
						key={index}
						className='relative w-10 bg-[#D9D9D9] h-[8px] rounded-full flex  mr-2'></div>
				))}
			</div>
			<div className='w-[90px] h-[30px] bg-white rounded  flex items-center justify-center border-[#6A91CB] border  cursor-pointer text-[#6A91CB] hover:bg-[#4D7CC1] hover:text-white duration-300'>
				<div className='text-xs font-semibold '>Review</div>
			</div>
		</div>
	);
};

export default Peer_Review;
