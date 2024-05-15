import React from "react";
import { useState } from "react";
import { goals } from "../data/temp";
import HoverRating from "../components/Star";
import GoalForm from "../components/GoalForm";
import Date from "../components/Date";
import { Link } from "react-router-dom";
import ComplaintPopup from "../components/ComplaintPopup";
import ReactStars from "react-rating-stars-component";
// go to line 116 that div there sort it out  cause when i comment it out the whole layout of the dashboard is messed up

const Home = () => {
	const [complaintPopup, setComplainPopup] = useState(false);
	const complain = () => {
		setComplainPopup(!complaintPopup);
	};

	const [goalsList, setGoals] = useState([...goals]);

	const percentage1 = 50;
	const percentage2 = 70;
	const [goalform, setGoalForm] = useState(false);
	const handleAddGoal = (e) => {
		setGoalForm(true);
	};
	const closeGoalForm = () => {
		setGoalForm(false);
	};

	return (
        <div className="flex flex-col bg-[#F1F4F9] w-full">
            {complaintPopup ? <ComplaintPopup complain={complain} /> : ""}
            {goalform && <GoalForm close={closeGoalForm} addGoal={setGoals} />}

            <div className="w-full gap-4 mt-[10px] flex">
                <Link to="TaskHistory">
                    <button>
                        <div className="flex bg-white h-[160px] w-[280px] px-4 rounded-[8px] items-center p-[30px] gap-6 ">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <p className="text-[16px] font-[700]">
                                        Overall Task Completed
                                    </p>
                                    <p className="font-[300] text-[12px] ">
                                        28/56 tasks completed
                                    </p>
                                </div>
                                <div className="relative w-[250px] bg-[#D9D9D9] h-[8px] rounded-full">
                                    <div
                                        className="absolute h-full bg-[#cdc307ed] rounded-full"
                                        style={{
                                            width: `${percentage1}%`,
                                        }}></div>
                                </div>
                                <span className="text-[20px] font-[600] ">
                                    {percentage1}%
                                </span>
                            </div>
                        </div>
                    </button>
                </Link>
                <Link to="TaskReview">
                    <button>
                        <div className="flex bg-white h-[160px] w-[300px] rounded-[8px] items-center p-[30px] gap-6 ">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <p className="text-[16px] font-[700]">
                                        Average Task Review
                                    </p>
                                    <p className="font-[300] text-[12px] ">
                                        Reviewed by GM on 13/05/2023
                                    </p>
                                </div>

                                <div className="relative w-[250px] bg-[#D9D9D9] h-[8px] rounded-full">
                                    <div
                                        className="absolute h-full rounded-full bg-lime-500"
                                        style={{
                                            width: `${percentage2}%`,
                                        }}></div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-[20px] font-[600] ">
                                        {percentage2}%
                                    </span>
                                    <div className="text-lg font-normal text-black">
                                        <p>Excellent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </Link>
                <button>
                    {" "}
                    <div className="w-[430px] h-[160px] bg-white rounded-[8px]">
                        {<Date />}
                    </div>
                </button>
            </div>

            <div className="flex mt-[15px] justify-between px-2 flex-wrap">
                <div className="">
                    <div className=" bg-white   w-[515px]  items-center rounded-lg ">
                        <div className="flex items-center justify-between p-2 pt-[-15px]">
                            <div className="text-base font-bold text-black ">
                                <p>Ongoing Tasks</p>
                            </div>
                            <Link to="OngoingTasks">
                                <div className="flex items-center text-sm font-medium text-black ">
                                    <button className="flex ">
                                        See all{" "}
                                        <img
                                            src="/src/assets/star/arrow.svg"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <TaskList tasks={tasks} />
                        </div>
                    </div>
                </div>
                <div className="hol2">
                    <div className="w-[515px] bg-white rounded-lg p-3">
                        <div className="flex items-center justify-between p-2 pt-[-15px]">
                            <div className="text-base font-bold text-black ">
                                <p>Complaints</p>
                            </div>
                            <Link to="OngoingTasks">
                                <div className="flex items-center text-sm font-medium text-black ">
                                    <button className="flex ">
                                        See all{" "}
                                        <img
                                            src="/src/assets/star/arrow.svg"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </Link>
                        </div>
                        <div className="text-black text-xs font-normal  pt-[6px] pb-[10px]">
                            <p>
                                You can send complaints or feedback to your
                                General Manager
                            </p>
                        </div>

                        <input
                            className="w-[65%] h-[27px] border-[#00000033] border-1 text-wrap rounded outline-none"
                            type="text"
                        />
                        <div className="pt-[7px] ">
                            <p>Report</p>
                        </div>
                        <textarea
                            className="w-[95%] h-[77px] border-[#00000033] border-1 mt-[8px] text-sm  p-2 text-wrap rounded outline-none "
                            placeholder="Write Complaint"
                            type="text"
                        />

                        <button
                            className="w-[130px] h-[30px] bg-[#4D7CC1] rounded shadow ml-[68%] mt-[10px] mb-[8px] "
                            onClick={complain}>
                            <div className="text-xs font-semibold text-indigo-50 ">
                                Submit
                            </div>
                        </button>
                    </div>
                </div>
                <div className="hol3">
                    <div className="w-[515px] bg-white rounded-lg  mt-[-150px]">
                        <div className="flex items-center justify-between p-2 pt-[-15px]">
                            <div className="text-base font-bold text-black ">
                                <p>Task Review</p>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium text-black">
                                <Link to="OngoingTasks">
                                    <div className="flex">
                                        <button>See all</button>
                                        <div className="relative w-6 h-6">
                                            <img
                                                src="/src/assets/star/arrow.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="ji">
                            <ONGOING />
                            <ONGOING />
                        </div>
                    </div>
                </div>
                <div className="hol4">
                    <div className="w-[515px]  bg-white rounded-lg px-[15px] mt-[10px] p-2">
                        <div className="text-base font-bold text-black ">
                            <p>Peer Reviews</p>
                        </div>
                        <div className="flex items-center justify-between mt-[5px] pt-[10px] pb-[18px]">
                            <div className="text-sm">
                                <p>
                                    review collage you have worked with
                                    anoymously
                                </p>
                            </div>
                            <div className="w-[142px] h-[38px] px-4 py-3 bg-[#4D7CC1] rounded border border-black border-opacity-0 justify-center items-center gap-2 inline-flex ">
                                <div className="text-xs font-bold text-indigo-50 ">
                                    Review Colleagues
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <PeerReviewRow />
                        </div>
                    </div>
                </div>
                <div className="hol5">
                    <div className="w-[515px]  bg-white rounded-lg mt-[-328px]">
                        <div className="flex items-center justify-between p-2 pt-[-15px]">
                            <div className="text-base font-bold text-black ">
                                <p>Comment</p>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium text-black">
                                <button>See all</button>
                                <div className="relative w-6 h-6">
                                    <img
                                        src="/src/assets/star/arrow.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-fit">
                            <ChatMessage />
                            <ChatMessage />
                            <ChatMessage />
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
	<div className='mt-[-10px] text-black text-xs font-normal'>
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
