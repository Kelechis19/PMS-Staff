import React, { useState } from "react";
import { Tasks } from "../data/temp";
import People from "../components/Peopleimg";
import { TaskReviews } from "../data/temp";
import HoverRating from "../components/Star";
import ReactStars from "react-rating-stars-component";

const Modal = ({ isOpen, onClose, children }) => {
	const [opacity, setOpacity] = useState(isOpen ? "opacity-100" : "opacity-0");
	const [pointerEvents, setPointerEvents] = useState(
		isOpen ? "pointer-events-auto" : "pointer-events-none"
	);

	const closeModal = () => {
		setOpacity("opacity-0");
		setPointerEvents("pointer-events-none");
		setTimeout(() => {
			onClose();
		}, 300);
	};

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 ${opacity} ${pointerEvents}`}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					closeModal();
				}
			}}>
			<div className="relative  w-[782px] bg-white rounded-md shadow-lg my-auto h-[690px]">
				<div className="flex items-start justify-between p-3">
					<h3 className="text-lg font-semibold">Overall Rating</h3>

					<button
						onClick={closeModal}
						className="text-gray-500 hover:text-gray-700">
						<span className="sr-only">Close</span>
						<svg
							className="w-6 h-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};
const TaskReview = () => {
	return (
		<div className="">
			<div className="flex items-center bg-white text-center mt-[20px] text-gray-400 rounded-lg">
				<div className="w-[400px] ">
					<p>Task Title</p>
				</div>
				<div className="w-[205px]">
					<p>Status</p>
				</div>
				<div className="w-[250px]">
					<p>Rating</p>
				</div>
				<div className="w-[170px]">
					<p>Members</p>
				</div>
			</div>

			<div className="pb-96">
				{TaskReviews.map((item, key) => {
					return (
						<TaskRow
							title={item.title}
							status={item.status}
							date={item.date}
							people={item.people}
						/>
					);
				})}
			</div>
		</div>
	);
};

const TaskRow = ({ title, status, date, people, rating }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	return (
        <>
            <div className="relative w-full flex flex-row items-center px-[10px] justify-between  bg-white pt-[10px] border-b-[1px] border-b-[#656667]/10">
                <div className="w-[35%] flex items-center gap-2.5 pb-[15px] ">
                    <div className="w-[30px] ">
                        <img
                            src={`/src/assets/taskimg/${
                                status === "Not approved"
                                    ? "Warning.svg"
                                    : "check.svg"
                            }`}
                        />
                    </div>
                    <div className="note">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="relative w-[15%] flex ">
                    <div
                        className={`flex  w-[100px] h-[30px] rounded-[4px] ${
                            status === "Not approved"
                                ? "bg-red-100 text-red-500"
                                : status === "Completed"
                                ? "bg-green-100 text-green-500"
                                : status === "Pending"
                                ? "bg-amber-100 text-amber-300"
                                : ""
                        } text-center   w-[120px] mb-[25px]`}>
                        <p className="w-full h-full text-center">{status}</p>
                    </div>
                </div>

                <div className="w-[17%]">
                    <p>{<HoverRating />}</p>
                </div>
                <div className="flex w-[10%]">
                    <div className="flex ">
                        <People people={people} />
                    </div>
                </div>
                <div className="bg-white text-center  w-[80px] mb-[23px] border-gray-500 border-[1px]  hover:bg-blue-500 hover:text-white rounded">
                    <button onClick={openModal} className="w-full">
                        View
                    </button>
                </div>
                {isOpen && (
                    <Modal isOpen={isOpen} onClose={closeModal}>
                       <View/>
                    </Modal>
                )}
            </div>
        </>
    );
};


const View = () => {
	return (
        <>
            <div className="flex items-center gap-3"></div>
            <div className="flex  w-[fit] h-[26.86px] ">
                {
                    <ReactStars
                        count={5}
                        value={0}
                        size={21}
                        ishalf={true}
                        edit={false}
                        activeColor="#F5BA45"
                    />
                }
            </div>
            <div className="mt-[10px]">No Rating</div>

            <div className="flex items-center justify-between mt-[35px] font-bold">
                <div className="">
                    <p>Create presentation slides for meeting with MD</p>
                </div>
                <div className="mr-[20px]">
                    <p>23rd Feb April 2024</p>
                </div>
            </div>
            <div class="mt-[10px] text-sm max-h-[89px] max-w-[750px]  break-words border-1 rounded-lg text-wrap p-2">
                Lorem ipsum dolor sit amet consectetur. Orci mattis et
                vestibulum tortor in id etiam. Eget lectus elit ullamcorper
                tincidunt ut eget ullamcorper. Cursus purus urna fermentum
                lectus convallis. Mattis pellentesque laoreet elit nibh tortor
                tempus mauris ut. Viverra rhoncus quam porttitor netus gravida
                ut. Montes eleifend faucibus duis massa mi pulvinar
                sollicitudin. Nec enim.
            </div>

            <div className="w-[38%] h-2 bg-white border-2 mt-[20px] rounded "></div>
            <div className="flex items-center gap-6 mt-4">
                <div className="12">
                    <p className="mt-[10px]">2/2 task completed</p>
                </div>
                <div className="flex ">
                    <div className="imgg">
                        <img src="/src/assets/task/ima.svg" alt="" />
                    </div>
                    <div className="ml-[-10px]">
                        <img src="/src/assets/task/imaa.svg" alt="" />
                    </div>
                    <div className="ml-[-10px]">
                        <img src="/src/assets/task/ima.svg" alt="" />
                    </div>
                    <div className="ml-[-10px]">
                        <img src="/src/assets/task/imaa.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex  flex-wrap ">
                <div className="flex items-center gap-2 mt-[15px]">
                    <div className="img">
                        <img src="/src/assets/taskimg/minus.svg" alt="" />
                    </div>
                    <div className="para">
                        <p>Create presentation slides 1-30</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-[10px] ml-[50px] ">
                    <div className="img">
                        <img src="/src/assets/taskimg/minus.svg" alt="" />
                    </div>
                    <div className="para">
                        <p>Create presentation slides 31-50</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-[15px] ">
                    <div className="img">
                        <img src="/src/assets/taskimg/minus.svg" alt="" />
                    </div>
                    <div className="para">
                        <p>Create presentation slides 1-30</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-[10px]  ml-[50px]">
                    <div className="img">
                        <img src="/src/assets/taskimg/minus.svg" alt="" />
                    </div>
                    <div className="para">
                        <p>Create presentation slides 31-50</p>
                    </div>
                </div>
            </div>

            <div className="font-bold mt-[10px]">
                <p>Comment by GM</p>
            </div>

            <div className="hold">
                <textarea
                    type="text"
                    className="w-[100%] border-1 border-gray-300 rounded p-2 h-[150px]"
                    textarea
                />
            </div>
        </>
    );
}

export default TaskReview;
