import React from "react"
import ReactDOM from "react-dom"

const Desc = ({opendesc}) => {
    return ReactDOM.createPortal(
        <>
            <div className={`absolute inset-0 w-screen h-screen  z-50 flex items-center justify-center overflow-auto bg-black/20`}>
                <div className="absolute inset-0 z-10 flex items-center justify-center w-screen h-screen overflow-auto bg-black/20" onClick={()=>{opendesc()}}/>
                <div className="absolute w-screen z-50 h-[70%] bottom-0 bg-slate-100 rounded-lg">
                    <div className="">
                        <img className="ml-[1450px] mt-2  w-8 h-8" src="/src/assets/Close_round.svg" alt="lol" />
                    </div> 
                    <div className="flex "><div className="bg-white  h-[440px] ml-[20px] rounded-lg w-[1000px] ">
                        oerinhgnierugnirngoirng
                    </div>
                    
                    <div className="bg-white h-[430px] w-[430px] mt-[10px] ml-6 rounded-lg">kmgeuihgurgheuh
                    </div>
                    </div>
                    
                </div>
            </div>
        </>,
        document.getElementById("root")  
    );
    
};

export default Desc  