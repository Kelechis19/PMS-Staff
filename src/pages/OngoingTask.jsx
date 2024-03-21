import { OngoingTasks } from "../data/temp"
const OngoingTask = () => {
    return <div className="">
        <div className="flex items-center bg-white text-center mt-[20px] text-gray-400">
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
            OngoingTasks.map((item,key)=>{
                return(
                    <TaskRow title={item.title} status={item.status} date={item.date} people={item.people}/>
                )
            })
         }
        </div>
    </div>

}

const TaskRow=({title,status,date,people})=>{
    return(
        <div className="relative w-full flex flex-row items-center px-[10px] justify-between  bg-white pt-[10px] border-b-[1px] border-b-[#656667]/10">
                <div className="w-[35%] flex items-center gap-2.5 pb-[15px] ">
                    <div className="w-[20px] ">
                        <img src={`/src/assets/taskimg/${status==="Not approved"?"Warning.svg":"minus.svg"}`}/>
                    </div>
                    <div className="note">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="relative w-[15%] flex ">
                    <div className={`flex  w-[100px] h-[30px] rounded-[4px] ${status==="Not approved"?"bg-red-100 text-red-500":status==="Ongoing"?"bg-green-100 text-green-500":status==="Overdue"?"bg-amber-100 text-amber-300":""} text-center   w-[120px] mb-[25px]`}>
                        <p className="w-full h-full text-center">{status}</p>
                    </div>
                </div>
                
                <div className="w-[17%]">
                    <p>{date}</p>
                </div>
                {/* Make it dynamic */}
                <div className="flex w-[10%]">
                        <div className="holder ">
                            <img src={`/src/assets/member/${people=== 1 ? "Group1.svg" : people=== 2 ? ["Group2.svg "]: people===3?"Group3.svg":people=== 4? "Group4.svg": ""} `}  />
                        </div>
                        
                </div>
                <div className="bg-white text-center  w-[80px] mb-[23px] border-gray-500 border-[1px]  hover:bg-blue-500 hover:text-white rounded">
                    <button><p>Submit</p></button>
                </div>

            </div>
    )
}

export default OngoingTask;
