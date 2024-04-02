import React from "react"
import ReactDOM from "react-dom"

const Modal = ({ title, modal }) => {
    
    

    return ReactDOM.createPortal(
        <div
         
            className={`absolute inset-0 w-screen h-screen   z-50 flex items-center justify-center overflow-auto bg-black/20`}
            
        >
            <div className="absolute w-[780px] h-[458px] auto my-6 bg-white rounded-md shadow-lg w-max-w-md">
                <div className="flex items-start justify-between p-4 border-b">
                    <h3 className="text-lg font-semibold">Submit Task</h3>
                    
                    <button
                        onClick={()=>{modal()}}
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
                <div className="p-4">{title}</div>
            </div>
        </div>,
        document.getElementById("root")
    );};
export default Modal;