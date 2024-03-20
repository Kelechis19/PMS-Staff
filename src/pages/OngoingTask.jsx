const OngoingTask = () => {
    return <div className="">
        <div className="flex items-center bg-white text-center mt-[20px] text-gray-400">
            <div className="w-[470px] ">
                <p>Task Title</p>
            </div>
            <div className="w-[220px]">
                <p>Status</p>
            </div>
            <div className="w-[120px]">
                <p>Deadline</p>
            </div>
            <div className="w-[170px]">
                <p>Members</p>
            </div>

        </div>


        <div className=" ">

        <TaskRow title="Create a new satellite" status="Not approved" date="29th of March,2023"  />
        <TaskRow title="delete satellite"status="Ongoing" date="12th of April,2024"/>
        <TaskRow title="delete satellite"status="Overdue" date="30th of April,2024"/>


        </div>
    </div>

}

const TaskRow=({title,status,date})=>{
    return(
        <div className="flex justify-around mt-[px] bg-white pt-[10px] border-b-[1px] border-b-[#656667]/10">
                <div className="flex items-center gap-2.5 pb-[25px] ">
                    <div className="w-[20px] ">
                        <img src={`/src/assets/taskimg/${status==="Not Approved"?"Vector.png":status==="Ongoing"?"minus":""}`}/>
                    </div>
                    <div className="note">
                        <p>{title}</p>
                    </div>
                </div>
                <div className={`${status==="Not approved"?"bg-red-100 text-red-500":status==="Ongoing"?"bg-green-100 text-green-500":status==="Overdue"?"bg-amber-100 text-amber-300":""} text-center   w-[120px] mb-[25px]`}>
                    <button><p>{status}</p></button>
                </div>
                <div className="mb-[25px]">
                    <p>{date}</p>
                </div>
                {/* Make it dynamic */}
                <div className="flex  ">
                    <div className="holder">
                        <img src="/src/assets/member/Group4.svg" alt="" />
                    </div>
                    <div className="ml-[-10px] ">
                        <img src="/src/assets/member/Group2.svg" alt="" />
                    </div>
                    <div className="ml-[-10px] ">
                        <img src="/src/assets/member/Group3.svg" alt="" />
                    </div>
                    <div className="ml-[-10px] ">
                        <img src="/src/assets/member/Group1.svg" alt="" />
                    </div>



                </div>
                <div className="bg-white text-center  w-[80px] mb-[23px] border-gray-500 border-[1px]  hover:bg-blue-500 hover:text-white">
                    <button><p>Submit</p></button>
                </div>

            </div>
    )
}

export default OngoingTask;
