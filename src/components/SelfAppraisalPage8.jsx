import React from "react";

const SelfAppraisalPage8 = () => {
    return (
        <>
            <div className="font-bold mt-[10px]">
                <p>SECTION 3-HPO STRATEGIC OBJECTIVE ASSESSMENT</p>
            </div>
            <div className="text-sm mt-[10px]">
                <p>
                    PROFESSIONALISM What is the estimated TAT (turn Around Time)
                    for the product/service delivered by your department?
                </p>
            </div>
            <div className="border-1 border-black w-[1000px] rounded-md  px-3 pb-[5px] mt-[10px]">
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">72 Hours</div>
                </div>
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">48 Hours</div>
                </div>
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">96 Hours</div>
                </div>
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">24 Hours</div>
                </div>
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">Not Applicable in my Department</div>
                </div>
            </div>
        </>
    );
}

export default SelfAppraisalPage8;
