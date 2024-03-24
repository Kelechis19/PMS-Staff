import React, { useState } from "react";
import { OngoingTasks } from "../data/temp"

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
            }}
        >
            <div className="relative w-11/12 max-w-md mx-auto my-6 bg-white rounded-md shadow-lg">
                <div className="flex items-start justify-between p-4 border-b">
                    <h3 className="text-lg font-semibold">Modal Title</h3>
                    
                    <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
const OngoingTask = () => {
    return <div className="">
        <div className="flex items-center bg-white text-center mt-[20px] text-gray-400">
            <div className="w-[400px] ">
                <p>Task Title</p>
            </div>
            <div className="w-[205px]">
                <p>Rating</p>
            </div>
            <div className="w-[250px]">
                <p>Date conpleted</p>
            </div>
            <div className="w-[170px]">
                <p>Members</p>
            </div>

        </div>


        <div className="">


            {
                OngoingTasks.map((item, key) => {
                    return (
                        <TaskRow title={item.title} status={item.status} date={item.date} people={item.people} />
                    )
                })
            }
        </div>
    </div>

}

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
                    <div className="w-[20px] ">
                        <img src={`/src/assets/taskimg/check.svg`} />
                    </div>
                    <div className="note">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="relative w-[15%] flex ">
                    <div> {/* style that was here for background color of completed task and all flex `flex  w-[100px] h-[30px] rounded-[4px] ${status === "Not approved" ? "bg-red-100 text-red-500" : status === "Ongoing" ? "bg-green-100 text-green-500" : status === "Overdue" ? "bg-amber-100 text-amber-300" : ""} text-center   w-[120px] mb-[25px]`*/}
                        <p>{rating}</p>
                    </div>
                </div>

                <div className="w-[17%]">
                    <p>{date}</p>
                </div>
                {/* Make it dynamic */}
                <div className="flex w-[10%]">
                    <div className="holder ">
                        <img src={`/src/assets/member/${people === 1 ? "Group1.svg" : people === 2 ? ["Group2.svg "] : people === 3 ? "Group3.svg" : people === 4 ? "Group4.svg" : ""} `} />
                    </div>

                </div>
                <div className="bg-white text-center  w-[80px] mb-[23px] border-gray-500 border-[1px]  hover:bg-blue-500 hover:text-white rounded">
                    <button onClick={openModal}><p>Submit</p></button>
                </div>
                {isOpen && (
                    <Modal isOpen={isOpen} onClose={closeModal}>
                        <p className="text-center">Modal Content Here</p>
                        <button
                            onClick={closeModal}
                            className="block w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                            Close Modal
                        </button>
                    </Modal>
                )}

            </div>
        </>

    )
}

export default OngoingTask;