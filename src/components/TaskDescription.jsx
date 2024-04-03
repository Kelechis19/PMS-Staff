import React from "react"
import ReactDOM from "react-dom"

const myData = {
    name: 'Task title',
    title: 'Create presentation slides for meeting with MD ',
    desc_name: 'Description',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolore deleniti aut et laboriosam, officiis, repudiandae dolorem dolor facere minima vitae assumenda voluptas amet voluptate fugit tenetur nisi autem distinctio, dignissimos at. Est eveniet atque blanditiis beatae quasi eius, quaerat voluptatibus ut possimus et quam assumenda sint non eaque officiis obcaecati quae. Vero q ',
    sub: 'Subtasks',
    subtasks: 'Research on topic and write a proposal',
    aasigned: 'Assigned on:',
    date: '3rd of January',
    due: 'Due Date:',
    deadline: '28th of March',
    status: 'Status:',
    status_color: 'Ongoing',
    team: 'Team Members:',
};

const Desc = ({opendesc}) => {
    return ReactDOM.createPortal(
        <>
            <div className={`absolute inset-0 w-screen h-screen  z-50 flex items-center justify-center overflow-auto bg-black/20`}>
                <div className="absolute inset-0 z-10 flex items-center justify-center w-screen h-screen overflow-auto bg-black/20" onClick={()=>{opendesc()}}/>
                <div className="absolute w-screen z-50 h-[70%] bottom-0 bg-slate-100 rounded-lg">
                    <div className="">
                        <img className="ml-[97.5%] mt-2  w-8 h-8" src="/src/assets/Close_round.svg" alt="lol" />
                    </div> 
                    <div className="flex ">
                        <div className=" bg-white  h-[440px] ml-[20px] rounded-lg w-[67%] ">
                            <div className="mt-3 ml-4 text-2xl font-semibold">
                                {myData.name}
                            </div>
                            <div className="mt-3 ml-4 font-semibold text-l">
                                {myData.title}
                            </div>
                            <div className="mt-6 ml-4 text-xl font-semibold">
                                {myData.desc_name}
                            </div>
                            <div className="ml-4 text-s text-neutral-900">
                                {myData.desc}
                            </div>
                            <div className="flex">
                                <div className="w-[470px] h-[152px] flex  ">
                                    <div className="flex ">
                                            <div className="mt-6 ml-4 text-xl font-semibold x">
                                                {myData.sub} 
                                                
                                                <div className="flex mt-2 mb-3 text-sm text-neutral-900 ">
                                                    <img src="/src/assets/Ellipse 12.svg" alt="" /> 
                                                    <div className="ml-2"> {myData.subtasks}</div>
                                                </div>

                                                <div className="flex mb-3 text-sm">
                                                    <img src="/src/assets/Ellipse 12.svg" alt="" /> 
                                                    <div className="ml-2"> {myData.subtasks}</div>
                                                </div>
                                                <div className="flex mb-3 text-sm">
                                                    <img src="/src/assets/Ellipse 12.svg" alt="" /> 
                                                    <div className="ml-2"> {myData.subtasks}</div>
                                                </div> 
                                            </div>
                                    </div> 
                                
                                </div>
                                <div className=" items-center h-[210px] w-[2px] mt-3 ml-5 border border-zinc-400 border-opacity-30"></div>
                                <div className="w-[306px] h-[176px]  mt-6 ml-4">
                                    <div className="flex w-full ">
                                        <div className="w-[50%] ">{myData.aasigned}</div>
                                        <div className="w-[50%] ml-[80px] ">{myData.date}</div>
                                    </div>
                                    <div className="flex w-full mt-5 ">
                                        <div className="w-[50%] ">{myData.due}</div>
                                        <div className="w-[50%] ml-[80px] ">{myData.deadline}</div>
                                    </div>
                                    <div className="flex w-full mt-5 ">
                                        <div className="w-[50%] ">{myData.status}</div>
                                        <div className="w-[50%] ml-[80px] bg-green-100 text-green-500 text-center rounded">
                                            {myData.status_color}
                                        </div>
                                    </div>
                                    <div className="flex w-full mt-5 ">
                                        <div className="w-[50%] ">{myData.team}</div>
                                        <div className="w-[50%] ml-[80px] flex">
                                            <img src="/src/assets/member/Group1.svg" alt="" />
                                            <img src="/src/assets/member/Group2.svg" alt="" />
                                        </div>
                                    </div>
                                    
                                </div> <button className="mt-[200px] ml-[100px]  rounded bg-[#6A91CB] w-[71px] h-[32px] text-white text-sm font-bold ">Submit</button>
                            </div>
                            
                                
                            
                            
                            
                        </div>
                    
                    <div className="bg-white h-[430px] w-[28%] mt-[10px] ml-6 rounded-lg ">kmgeuihgurgheuh
                    </div>
                    </div>
                    
                </div>
            </div>
        </>,
        document.getElementById("root")  
    );
    
};

export default Desc  