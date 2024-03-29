import React, { useState } from "react";
import { Tasks } from "../data/temp"
import People from "../components/Peopleimg";


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
            <div className="relative w-[780px] h-[458px] auto my-6 bg-white rounded-md shadow-lg w-max-w-md">
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
        <div className="flex items-center bg-white text-center mt-[20px] text-gray-400 rounded-lg">
            <div className="w-[400px] ">
                <p>Task Title</p>
            </div>
            <div className="w-[205px]">
                <p>Status</p>
            </div>
            <div className="w-[250px]">
                <p>Deadline</p>
            </div>
            <div className="w-[170px]">
                <p>Members</p>
            </div>

        </div>


        <div className="">


            {
                Tasks.map((item, key) => {
                    return (
                        <TaskRow title={item.title} status={item.status} date={item.date} people={item.people} />
                    )
                })
            }
        </div>
    </div>

}

const TaskRow = ({ title, status, date, people }) => {
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
                    <div className="w-[30px]  ">
                        <img src={`/src/assets/taskimg/${status === "Not approved" ? "Warning.svg " : "minus.svg"}`} />
                    </div>
                    <div className="note">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="relative w-[15%] flex ">
                    <div className={`flex  w-[100px] h-[30px] rounded-[4px] ${status === "Not approved" ? "bg-red-100 text-red-500" : status === "Ongoing" ? "bg-green-100 text-green-500" : status === "Overdue" ? "bg-amber-100 text-amber-300" : ""} text-center   w-[120px] mb-[25px]`}>
                        <p className="w-full h-full text-center">{status}</p>
                    </div>
                </div>

                <div className="w-[17%]">
                    <p>{date}</p>
                </div>
                {/* Make it dynamic */}
                <div className="flex w-[10%]">
                    <div className="flex ">
                        <People people={people}/>     
                    </div>

                </div>
                <div className="bg-white text-center  w-[80px] mb-[23px] border-gray-500 border-[1px]  hover:bg-blue-500 hover:text-white rounded">
                    <button onClick={openModal} className="w-full">Submit</button>
                </div>
                {isOpen && (
                    <Modal isOpen={isOpen} onClose={closeModal}>
                         <p className="text-lg font-[500] text-gray-500">Task title</p>
                        <div className="text-sm ">
                        <input type="text" className="w-[100%] p-1 border-gray-500 border-1 " placeholder="Task title"  /> 
                        </div>
                        <div className="mt-[10px]">
                            <p>Report</p>
                        </div>
                        <div className="text-sm">
                        <input type="text" className="w-[100%] py-28 pt-[5px]  border-gray-500 border-1 " placeholder="Write Task Report"/> 
                        </div>
                        <p className="text-center"></p>
                        <button
                            onClick={closeModal}
                            className="block w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                           Submit
                        </button>
                    </Modal>
                )}

            </div>
        </>

    )
}

export default OngoingTask;