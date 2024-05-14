import React from "react";

const SelfAppraisalPage5 = () => {
    return (
        <>
            <div className="font-bold mt-[10px]">
                <p>SECTION 2-HPO SELF PERFORMANCE</p>
            </div>
            <div className="text-sm mt-[10px]">
                <p>
                    <span>LEADERSHIP</span> how do you coordinate
                    people/resources to achive your departmemtal goals
                </p>
            </div>
            <textarea className="w-[1000px] h-[90px] border-1 border-black mt-[5px] rounded-md"></textarea>
            <div className="text-sm mt-[10px]">
                <p>
                    <span>INNOVATION & CREATIVITY</span> have you added value or
                    developed innovation at work in your DEPARTMENT
                </p>
            </div>
            <div className="border-1 border-black w-[1000px] rounded-md px-2 p-2">
                <Num />
            </div>
            <div className="border-1 border-black w-[1000px] rounded-md  px-3 pb-[5px] mt-[10px]">
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">Yes</div>
                </div>
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">No</div>
                </div>
            </div>
            <div className="text-sm mt-[10px]">
                <p>
                    INTEGRITY. Have you been delay in remmitance of customers payment in the course of your departmental work 
                </p>
            </div>
            <div className="border-1 border-black w-[1000px] rounded-md  px-3 pb-[5px] mt-[10px]">
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">Yes</div>
                </div>
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">No</div>
                </div>
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">Not Applicable</div>
                </div>
            </div>
        </>
    );
}

const Num = () => {
    return (
        <>
            <div className="flex gap-8">
                <div className="hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer">
                    1
                </div>
                <p className="hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer">
                    2
                </p>
                <p className="hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer">
                    3
                </p>
                <p className="hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer">
                    4
                </p>
                <p className="hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer">
                    5
                </p>
                <p className="hover:bg-[#98B4DB] duration-300 hover:rounded-full w-10 flex items-center justify-center hover:text-white cursor-pointer ml-2">
                    N/A
                </p>
            </div>
        </>
    );
};
export default SelfAppraisalPage5;
