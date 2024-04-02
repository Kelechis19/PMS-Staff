import React from "react"
import ReactDOM from "react-dom"

const Desc = ({opendesc}) => {
    return ReactDOM.createPortal(
        <>
            <div className={`absolute inset-0 w-screen h-screen  z-50 flex items-center justify-center overflow-auto bg-black/20`}>
                <div className="absolute inset-0 z-10 flex items-center justify-center w-screen h-screen overflow-auto bg-black/20" onClick={()=>{opendesc()}}/>
                <div className="absolute w-screen z-50 h-[65%] bottom-0 bg-slate-100 ">
                    <div className="bg-white mg">
                        oerinhgnierugnirngoirng
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("root")  
    );
    
};

export default Desc  