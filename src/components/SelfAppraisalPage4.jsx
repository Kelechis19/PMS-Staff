import React from "react";

const SelfAppraisalPage4 = () => {
    return (
        <>
            <div className="font-bold mt-[10px]">
                <p>SECTION 2-HPO SELF PERFORMANCE</p>
            </div>
            <div className="hold">
                <div className="text-sm mt-[10px]">
                    <p>
                        Studies have shown that high customer and employee
                        satisfaction is closely linked. What are your ideas for
                        improving the company's client and/or employee
                        satisfaction and retention?
                    </p>
                </div>
                <textarea className="w-[1000px] h-[110px] border-1 border-[#D7D7D7] outline-none resize-none p-1 mt-[5px] rounded-md"></textarea>

                <div className="text-sm mt-[10px]">
                    <p>
                       State two career goals for the coming year and indicate how you plan to accomplish them
                    </p>
                </div>
                <textarea className="w-[1000px] h-[110px] border-1 border-[#D7D7D7] outline-none resize-none p-1 mt-[5px] rounded-md"></textarea>
            </div>
        </>
    );
}

export default SelfAppraisalPage4;
