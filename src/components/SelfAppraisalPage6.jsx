import React from "react";

const SelfAppraisalPage6 = () => {
    return (
        <>
            <div className="font-bold mt-[10px]">
                <p>SECTION 2-HPO SELF PERFORMANCE</p>
            </div>

            <div className="text-sm mt-[10px]">
                <p>
                    CUSTOMER CENTRIC. Have you gone beyond the course of normal
                    duty to satisfy a customer (Externally or internally)
                </p>
            </div>
            <div className="border-1 border-[#D7D7D7] outline-none resize-none p-1 w-[1000px] rounded-md  px-3 pb-[5px] mt-[10px]">
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

            <div className="text-sm mt-[10px]">
                <p>
                    CUSTOMER CENTRIC. Has your input in the department
                    contributed to the IGR (internally Generated Revenue of the
                    organization)
                </p>
            </div>
            <div className="border-1 border-[#D7D7D7] outline-none resize-none p-1 w-[1000px] rounded-md  px-3 pb-[5px] mt-[10px]">
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">
                        {" "}
                        My job role contributed directly to the IGR
                    </div>
                </div>
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">
                        Partially, my job roles is not directly responsible for
                        IGR
                    </div>
                </div>
                <div className="flex items-center gap-2 pt-[10px]">
                    <input className="" type="checkbox" name="" id="" />
                    <div className="text-sm">No</div>
                </div>
            </div>
            <div className="text-sm mt-[10px]">
                <p>CUSTOMER CENTRIC. How often do customers complain about the products/services from your department</p>
            </div>
            <textarea className="w-[1000px] h-[90px] border-1 border-[#D7D7D7] outline-none resize-none p-1 mt-[5px] rounded-md"></textarea>
        </>
    );
};
export default SelfAppraisalPage6;
