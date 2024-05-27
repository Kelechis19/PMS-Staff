import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelfAppraisalPage1 from "../components/SelfAppraisalPage1";
import SelfAppraisalPage2 from "../components/SelfAppraisalPage2";
import SelfAppraisalPage3 from "../components/SelfAppraisalPage3";
import SelfAppraisalPage4 from "../components/SelfAppraisalPage4";
import SelfAppraisalPage5 from "../components/SelfAppraisalPage5";
import SelfAppraisalPage6 from "../components/SelfAppraisalPage6";
import SelfAppraisalPage7 from "../components/SelfAppraisalPage7";
import SelfAppraisalPage8 from "../components/SelfAppraisalPage8";
import SelfAppraisalPage9 from "../components/SelfAppraisalPage9";

const Self_Appraisal = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const totalPages = 8
	const navigate = useNavigate();

	useEffect(() => {
		if (currentPage === totalPages) {
			const timer = setTimeout(() => {
				navigate("/dashboard"); // Replace '/home' with the path to your home page
			}, 4000); // 3000 milliseconds = 3 seconds

			return () => clearTimeout(timer);
		}
	}, [currentPage, totalPages, navigate]);
	;
	const goToNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const goToPreviousPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};
	const pages = [
		<SelfAppraisalPage1 key={0} />,
		<SelfAppraisalPage2 key={1} />,
		<SelfAppraisalPage3 key={2} />,
		<SelfAppraisalPage4 key={3} />,
		<SelfAppraisalPage5 key={4} />,
		<SelfAppraisalPage6 key={5} />,
		<SelfAppraisalPage7 key={6} />,
		<SelfAppraisalPage8 key={7} />,
		<SelfAppraisalPage9 key={8} />,
	];

	const percentage1 = (currentPage / totalPages) * 100;

	return (
		<>
			<div className='w-full bg-white px-7 h-full p-2 rounded-lg relative mt-4'>
				<div className='flex items-center gap-5 pt-[20px]'>
					<div className='im'>
						<img src='/src/assets/taskimg/Group330.svg' alt='' />
					</div>
					<div className='text'>
						<div className='font-bold text-black'>
							<p>Adoyiza omuya</p>
						</div>
						<div className='text-sm font-normal mt-[10px]'>
							<p>General Manager</p>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-between mt-[20px]'>
					<div className='flex flex-col gap-4 w-[250px]'>
						<div>
							<p className='text-[16px] font-semibold'>
								{Math.ceil((currentPage / totalPages) * 100)} %Completed
							</p>
						</div>
						<div className='relative w-full bg-[#D9D9D9] h-[8px] rounded-full'>
							<div
								className='h-full bg-blue-400 rounded-full relative duration-1000'
								style={{ width: `${percentage1}%` }}></div>
						</div>
					</div>
					<div className='flex items-center gap-7 mt-[25px] text-white'>
						{currentPage !== totalPages && (
							<button
								className='cursor pointer bg-[#4D7CC1] w-[120px] p-1 cursor-pointer items-center justify-center flex border border-[#17417E] rounded'
								onClick={goToPreviousPage}
								disabled={currentPage === 0}>
								Previous
							</button>
						)}
						{currentPage !== totalPages && (
							<button
								className='cursor-pointer bg-[#4D7CC1] w-[120px] p-1 items-center justify-center flex border border-[#17417E] rounded'
								onClick={goToNextPage}>
								Next
							</button>
						)}
					</div>
				</div>

				{currentPage !== totalPages && (
					<>
						<div className='font-bold mt-[26px]'>
							<p>Instructions</p>
						</div>
						<div className='mt-[5px]'>
							<p>
								Evaluate yourself on the following listed factors by choosing a
								score against each factor and entering details where necessary.
							</p>
						</div>
						<div className='mt-[10px]'>
							<div className='font-bold mb-[10px]'>
								<p>Rating Key</p>
							</div>
							<div className='mb-[12px]'>
								<p>
									1 = Poor; 2 = fair; 3 = Good; 4 = Very Good; 5 = Outstanding;
									N/A - Not Applicable
								</p>
							</div>
						</div>
					</>
				)}

				<div className='relative'>{pages[currentPage]}</div>
			</div>
		</>
	);
};

export default Self_Appraisal;
