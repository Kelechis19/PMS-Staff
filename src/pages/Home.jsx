import React from "react";
import { useState } from "react";
import GoalForm from "../components/GoalForm";
import Date from "../components/Date";
import { Link } from "react-router-dom";
import ComplaintPopup from "../components/ComplaintPopup";
import ReactStars from "react-rating-stars-component";

const Home = () => {
	const [complaintPopup, setComplainPopup] = useState(false);
	const complain = () => {
		setComplainPopup(!complaintPopup);
	};
	const percentage1 = 50;
	const percentage2 = 70;
	const [goalform, setGoalForm] = useState(false);

	const closeGoalForm = () => {
		setGoalForm(false);
	};

	return (
		<div className='flex flex-col bg-[#F1F4F9] p-4	 w-full h-full'>
			{complaintPopup ? <ComplaintPopup complain={complain} /> : ""}
			{goalform && <GoalForm close={closeGoalForm} addGoal={setGoals} />}

			<div className='w-full gap-4  flex relative h-[160px]'>
				<Link to='/task/task-history'>
					<div className='flex bg-white h-full w-[300px] px-4 rounded-[8px] items-center '>
						<div className='flex flex-col gap-4 relative'>
							<div>
								<p className='text-[16px] font-[700]'>Overall Task Completed</p>
								<p className='font-[300] text-[12px] '>28/56 tasks completed</p>
							</div>
							<div className='relative w-[250px] bg-[#D9D9D9] h-[8px] rounded-full'>
								<div
									className='absolute h-full bg-[#cdc307ed] rounded-full'
									style={{
										width: `${percentage1}%`,
									}}></div>
							</div>
							<span className='text-[20px] font-[600] '>{percentage1}%</span>
						</div>
					</div>
				</Link>
				<Link to='/task/task-review'>
					<div className='flex bg-white h-full w-[300px] rounded-[8px] items-center p-[30px] gap-6 '>
						<div className='flex flex-col gap-4'>
							<div>
								<p className='text-[16px] font-[700]'>Average Task Review</p>
								<p className='font-[300] text-[12px] '>
									Reviewed by GM on 13/05/2023
								</p>
							</div>

							<div className='relative w-[250px] bg-[#D9D9D9] h-[8px] rounded-full'>
								<div
									className='absolute h-full rounded-full bg-lime-500'
									style={{
										width: `${percentage2}%`,
									}}></div>
							</div>

							<div className='flex items-center justify-between'>
								<span className='text-[20px] font-[600] '>{percentage2}%</span>
								<div className='text-lg font-normal text-black'>
									<p>Excellent</p>
								</div>
							</div>
						</div>
					</div>
				</Link>

				<div className='w-[500px] h-full bg-white rounded-[8px]'>
					{<Date />}
				</div>
			</div>

			<div className='flex mt-[15px] w-full h-full gap-4 rounded-lg'>
				<div className='relative w-full h-full flex flex-col gap-3 '>
					<div className=' bg-white  items-center rounded-lg h-full w-full'>
						<div className='flex items-center justify-between p-2 '>
							<div className='text-base font-bold text-black '>
								<p>Ongoing Tasks</p>
							</div>
							<Link to='/task/ongoing-task'>
								<div className='flex items-center text-sm font-medium text-black '>
									<button className='flex '>
										See all <img src='/src/assets/star/arrow.svg' alt='' />
									</button>
								</div>
							</Link>
						</div>
						<div className='p-1'>
							<TaskList tasks={tasks} />
						</div>
					</div>
					<div className='w-full bg-white rounded-lg h-full'>
						<div className='flex items-center justify-between p-[11.5px] '>
							<div className='text-base font-bold text-black '>
								<p>Task Review</p>
							</div>
							<div className='flex items-center text-sm font-medium '>
								<Link to='/task/task-review'>
									<div className='flex'>
										<button>See all</button>
										<div className='relative w-6 h-6'>
											<img src='/src/assets/star/arrow.svg' alt='' />
										</div>
									</div>
								</Link>
							</div>
						</div>
						<div className='h-fit w-full pb-1 px-1'>
							<ONGOING />
							<ONGOING />
							<ONGOING />
						</div>
					</div>
				</div>

				<div className='h-full w-full'>
					<div className=' bg-white rounded-lg p-3 h-full'>
						<div className='flex items-center justify-between'>
							<div className='text-base font-bold text-black '>
								<p>Complaints</p>
							</div>
							<Link to='/Complaints'>
								<div className='flex items-center text-sm font-medium text-black '>
									<button className='flex '>
										See all <img src='/src/assets/star/arrow.svg' alt='' />
									</button>
								</div>
							</Link>
						</div>
						<div className='text-black text-xs font-normal  pt-[6px] mb-[10px] '>
							<p>You can send complaints or feedback to your General Manager</p>
						</div>

						<div className='flex   justify-between'>
							<div className='w-[85%]'>
								<div className='k'>
									<p className=''>TITLE</p>
								</div>
								<input
									className='w-[95%] h-[27px] border-[#00000033] border-1 text-wrap rounded outline-none text-sm'
									placeholder=' Complaint Title..'
									type='text'
								/>
							</div>
							<div className='ll'>
								<div className='kk'>
									<p>TO:</p>
								</div>
								<div className='w-[90px] h-[27px] outline-none bg-white rounded border-1 border-[#00000033] border-opacity'>
									<select className='w-full  rounded text-sm text-gray-500 outline-none'>
										<option>HOD/GM</option>
										<option>HR</option>
									</select>
								</div>
							</div>
						</div>
						<div className='pt-[7px] '>
							<p>Report</p>
						</div>
						<textarea
							className='w-full h-[215px] border-[#00000033] border-1 mt-[8px] text-sm  p-2 text-wrap rounded outline-none  resize-none'
							placeholder='Write Complaint'
							type='text'
						/>

						<button
							className='w-[130px] h-[30px] bg-[#4D7CC1] rounded shadow ml-[75%] mt-[10px] mb-[8px] '
							>
							<div className='text-xs font-semibold text-indigo-50 '>
								Submit
							</div>
						</button>
					</div>
				</div>
			</div>

			<div className='flex gap-4 mt-[14px] w-full h-full'>
				<div className='  bg-white rounded-lg w-full '>
					<div className='flex items-center justify-between p-2 '>
						<div className='text-base font-bold text-black '>
							<p>Comment</p>
						</div>
						<div className='flex items-center gap-1 text-sm font-medium text-black'>
							<button>See all</button>
							<div className='relative w-6 h-6'>
								<img src='/src/assets/star/arrow.svg' alt='' />
							</div>
						</div>
					</div>
					<div className='h-fit'>
						<ChatMessage />
						<ChatMessage />
						<ChatMessage />
					</div>

					<div className='relative px-2 '>
						<input
							type='text'
							placeholder='Add a comment'
							className='border rounded-2xl border-gray-300  px-4 py-2 w-full'
						/>
						<img
							src='/src/assets/desc/sent1.svg'
							alt='Image'
							className='absolute ml-[90%] top-1/2 transform -translate-y-1/2 h-6 w-6'
						/>
					</div>
				</div>

				<div className='w-full bg-white rounded-lg'>
					<div className='  px-[15px]  p-2 '>
						<div className='text-base font-bold '>
							<p>Peer Reviews</p>
						</div>
						<div className='flex items-center justify-between mt-[5px] pt-[10px] pb-[18px]'>
							<div className='text-sm'>
								<p>Review colleges you have worked with anoymously</p>
							</div>
							<Link to={"/review/Self Appraisal"}>
								<div className='w-[142px] h-[38px] px-4 py-3 bg-[#4D7CC1] rounded border border-black border-opacity-0 justify-center items-center gap-2 inline-flex '>
									<div className='text-xs font-bold text-indigo-50 '>
										Review Colleagues
									</div>
								</div>
							</Link>
						</div>
						<div className=''>
							<PeerReviewRow />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const PeerReviewRow = () => {
	return (
		<>
			<div className=''>
				<RatingItem title='Strategy and Education' />
				<RatingItem title='Character Traits' />
				<RatingItem title='Strategy and Education' />
				<RatingItem title='Interpersonal Relationship' />
				<RatingItem title='Ability to Build Talent' />
				<RatingItem title='Leadership and motivation skills' />
			</div>
		</>
	);
};
const ONGOING = () => {
	return (
		<>
			<div className='flex items-center justify-between p-1 text-xs font-normal mb-[5px]'>
				<div className='flex items-center'>
					<div className=''>
						<img src='/src/assets/taskimg/check.svg' alt='' />
					</div>
					<div className='text-sm '>
						Create presentation slides for meeting with
					</div>
				</div>
				<div className='flex  w-fit h-[17.86px] '>
					{
						<ReactStars
							count={5}
							value={3}
							size={21}
							ishalf={true}
							edit={false}
							activeColor='#F5BA45'
						/>
					}
				</div>
				<div className='text-sm'>
					<p>3rd March 2024</p>
				</div>
			</div>
		</>
	);
};

const TaskItem = ({ text, date }) => (
	<div className='flex justify-between p-1 mt-[-10px]'>
		<div className='flex items-center'>
			<div className='w-[26px]'>
				<img src='/src/assets/taskimg/check.svg' alt='' />
			</div>
			<div className='text-sm'>
				<p>{text}</p>
			</div>
		</div>
		<div className='flex items-center w-[55px] mt-[5px]'>
			<div className='img'>
				<img src='/src/assets/homee/hme.svg' alt='' />
			</div>
			<div className='ml-[-13px]'>
				<img src='/src/assets/homee/hme2.svg' alt='' />
			</div>
			<div className='ml-[-13px]'>
				<img src='/src/assets/homee/hme3.svg' alt='' />
			</div>
		</div>
		<div className='text-sm'>
			<p>{date}</p>
		</div>
	</div>
);
const TaskList = ({ tasks }) => (
	<div className=' text-xs font-normal space-y-1 h-full '>
		{tasks.map((task, index) => (
			<TaskItem key={index} text={task.text} date={task.date} />
		))}
	</div>
);
const tasks = [
	{
		text: "People financial projections for upcoming..",
		date: "23rd March 2024",
	},
	{
		text: "People financial projections for upcoming..",
		date: "3rd March 2024",
	},
	{
		text: "People financial projections for upcoming..",
		date: "13th March 2024",
	},
	{
		text: "People financial projections for upcoming..",
		date: "13th March 2024",
	},
	{
		text: "People financial projections for upcoming..",
		date: "13th March 2024",
	},
];

const ChatMessage = () => {
	return (
		<div className='p-1 relative'>
			{/* First chat message */}
			<div className='flex  px-[10px] pb-[5px] items-center'>
				<div className='mr-4'>
					<img src='/src/assets/star/Eli14.svg' alt='' />
				</div>
				<div className='flex gap-2 mr-[250px]'>
					<div className='text-sm font-bold text-black'>
						<p>Hr</p>
					</div>
					<div className='text-black text-[10px] font-light'>
						<div className='pt-[-40px]'>
							<p>2.00pm</p>
						</div>
						<div className='ml-[-26px]'>
							<p>Onboarding for new employees completed...</p>
						</div>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<div className='w-[15px] h-[15px] relative origin-top-left'>
						<img src='/src/assets/star/share.svg' alt='' />
					</div>
					<div className='w-[31px] h-3.5 text-black text-[10px] font-light'>
						<p>Reply</p>
					</div>
				</div>
			</div>
			<div className='w-full h-[0px] border border-black border-opacity-10 '></div>
		</div>
	);
};
const RatingItem = ({ title }) => {
	const [starValue, setStarValue] = useState(3);
	const handleStarChange = (newValue) => {
		setStarValue(newValue);
	};
	return (
		<>
			<div className='flex items-center mb-1'>
				<div className='text-xs font-bold w-full mr-40'>
					<p className=' text-pretty'>{title}</p>
				</div>
				<div className='w-full flex items-center'>
					<ReactStars
						count={5}
						value={3}
						size={21}
						ishalf={true}
						edit={true}
						activeColor='#F5BA45'
						onChange={handleStarChange}
					/>
				</div>
				<div>{starValue}/5</div>
			</div>
		</>
	);
};

export default Home;
