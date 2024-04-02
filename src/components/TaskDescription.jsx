import React from "react"
import ReactDOM from "react-dom"

function data () {
    
}

const Desc = ({opendesc}) => {
    return ReactDOM.createPortal(
        <>
            <div className={`absolute inset-0 w-screen h-screen  z-50 flex items-center justify-center overflow-auto bg-black/20`}>
                <div className="absolute inset-0 z-10 flex items-center justify-center w-screen h-screen overflow-auto bg-black/20" onClick={()=>{opendesc()}}/>
                <div className="absolute w-screen z-50 h-[70%] bottom-0 bg-slate-100 rounded-lg">
                    <div className="">
                        <img className="ml-[97.5%] mt-2  w-8 h-8" src="/src/assets/Close_round.svg" alt="lol" />
                    </div> 
                    <div className="flex "><div className="bg-white  h-[440px] ml-[20px] rounded-lg w-[67%] ">
                        oerinhgnierugnirngoirng
                    </div>
                    
                    <div className="bg-white h-[430px] w-[28%] mt-[10px] ml-6 rounded-lg ">
                       <div className="pl-[30px] mt-[15px] p-3">
                       <div className="text-black text-base font-bold ">
                            <p>comments</p>
                        </div>
                       <div className="flex items-center justify-between ">
                       <div className="hold">
                        <div className="flex items-center gap-1">
                            <div className="hold">
                            <div className="mt-[15px]">
                                <img src="/src/assets/desc/subt1.svg" alt="" />
                            </div>
                            <div className="w-2 h-2 bg-lime-500 rounded-full ml-[21px] mt-[-10px]" />
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="text-black text-sm font-bold">
                               <p>Adoyiza omuya </p>
                               </div>
                               <div className="text-black text-[10px] font-light">
                               <p>02:00 pm</p>
                               </div>
                            </div>
                            
                        </div>
                        <div className="text-black text-xs font-medium ml-[35px] mt-[-15px] "><p>Morning, team! How's progress?</p></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-[15px] h-[15px] relative origin-top-left">
                                <img src="/src/assets/desc/share.svg" alt="" />
                            </div>
                            <div className="w-[31px] h-3.5 text-black text-[10px] font-light">
                                <p>Reply</p>
                            </div>
                        </div>
                       </div>

                       <div className="flex items-center justify-between ">
                       <div className="hold">
                        <div className="flex items-center gap-1">
                            <div className="hold">
                            <div className="mt-[15px]">
                                <img src="/src/assets/desc/subt4.svg" alt="" />
                            </div>
                            <div className="w-2 h-2 bg-lime-500 rounded-full ml-[21px] mt-[-10px]" />
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="text-black text-sm font-bold">
                               <p>Robert Peters </p>
                               </div>
                               <div className="text-black text-[10px] font-light">
                               <p>02:00 pm</p>
                               </div>
                            </div>
                            
                        </div>
                        <div className="text-black text-xs font-medium ml-[35px] mt-[-15px] "><p>Market research done; budget on track.</p></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-[15px] h-[15px] relative origin-top-left">
                                <img src="/src/assets/desc/share.svg" alt="" />
                            </div>
                            <div className="w-[31px] h-3.5 text-black text-[10px] font-light">
                                <p>Reply</p>
                            </div>
                        </div>
                       </div>

                       <div className="flex items-center justify-between ">
                       <div className="hold">
                        <div className="flex items-center gap-1">
                            <div className="hold">
                            <div className="mt-[15px]">
                                <img src="/src/assets/desc/subt1.svg" alt="" />
                            </div>
                            <div className="w-2 h-2 bg-lime-500 rounded-full ml-[21px] mt-[-10px]" />
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="text-black text-sm font-bold">
                               <p>Adoyiza omuya</p>
                               </div>
                               <div className="text-black text-[10px] font-light">
                               <p>02:00 pm</p>
                               </div>
                            </div>
                            
                        </div>
                        <div className="text-black text-xs font-medium ml-[35px] mt-[-15px] w-[230px]"><p>Perfect! It sounds like we're on track. Ashley, make 
                        sure to loop in Robert and Stephen on the design updates.</p></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-[15px] h-[15px] relative origin-top-left">
                                <img src="/src/assets/desc/share.svg" alt="" />
                            </div>
                            <div className="w-[31px] h-3.5 text-black text-[10px] font-light">
                                <p>Reply</p>
                            </div>
                        </div>
                       </div>

                       <div className="flex items-center justify-between ">
                       <div className="hold">
                        <div className="flex items-center gap-1">
                            <div className="hold">
                            <div className="mt-[15px]">
                                <img src="/src/assets/desc/subt2.svg" alt="" />
                            </div>
                            <div className="w-2 h-2 bg-red-500 rounded-full ml-[21px] mt-[-10px]" />
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="text-black text-sm font-bold">
                               <p>Ashley olika</p>
                               </div>
                               <div className="text-black text-[10px] font-light">
                               <p>02:00 pm</p>
                               </div>
                            </div>
                            
                        </div>
                        <div className="text-black text-xs font-medium ml-[35px] mt-[-15px] w-[230px]"><p>Will do. By the way, I scheduled a client feedback session for later this week.</p></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-[15px] h-[15px] relative origin-top-left">
                                <img src="/src/assets/desc/share.svg" alt="" />
                            </div>
                            <div className="w-[31px] h-3.5 text-black text-[10px] font-light">
                                <p>Reply</p>
                            </div>
                        </div>
                       </div>

                       <div className="flex items-center justify-between ">
                       <div className="hold">
                        <div className="flex items-center gap-1">
                            <div className="hold">
                            <div className="mt-[15px]">
                                <img src="/src/assets/desc/subt3.svg" alt="" />
                            </div>
                            <div className="w-2 h-2 bg-red-500 rounded-full ml-[21px] mt-[-10px]" />
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="text-black text-sm font-bold">
                               <p>Stephen Vem</p>
                               </div>
                               <div className="text-black text-[10px] font-light">
                               <p>02:00 pm</p>
                               </div>
                            </div>
                            
                        </div>
                        <div className="text-black text-xs font-medium ml-[35px] mt-[-15px] w-[230px]"><p>Just a reminder, we have a team meeting tomorrow with the GM.</p></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-[15px] h-[15px] relative origin-top-left">
                                <img src="/src/assets/desc/share.svg" alt="" />
                            </div>
                            <div className="w-[31px] h-3.5 text-black text-[10px] font-light">
                                <p>Reply</p>
                            </div>
                        </div>
                       </div>
                       <div className="flex items-center ">
                       <textarea placeholder="Add a comment" className=  " mt-[15px] w-[450px] h-[47px] bg-white rounded-[20px] border border-black border-opacity-20  text-black text-opacity-40 text-[13px] font-medium pt-[10px] pl-[10px] " />
                       <div className="w-6 h-6 relative mt-[20px] ">
                       <img src="/src/assets/desc/sent.svg" alt="" />
                       </div>
                       
                       </div>
                       
                    
                       </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>,
        document.getElementById("root")  
    );
    
};

export default Desc  