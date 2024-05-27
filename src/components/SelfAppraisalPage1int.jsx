import React from "react";

const SelfAppraisalPage1int = () => {
    return (
        <div className="relative h-[390px]">
            <div className="text-lg font-medium mt-[15px]">
                <p>Performance Rating Key</p>
            </div>
            <div className="text-sm font-medium">
                <div className="">
                    <p>5 - Outstanding</p>
                </div>
                <div className="mt-[5px]">
                    <p>4 - Very Good</p>
                </div>
                <div className="mt-[5px]">
                    <p>3 - Good</p>
                </div>
                <div className="mt-[5px]">
                    <p>2 - Fair</p>
                </div>
                <div className="mt-[5px]">
                    <p>1 - Poor</p>
                </div>
            </div>

            <div className="font-bold mt-[30px]">
                <p>INSTRUCTIONS FOR SELF APPRAISAL EVALUATION</p>
            </div>
            <div className="text-sm mt-[5px]">
                <p>Evaluate yourself on the following listed factors by choosing a score against each factor and entering details where necessary</p>
            </div>
            <div className="text-white bg-blue-500 w-[30%] px-16 p-1 rounded ml-[34%] mt-[60px] ">
                <button><p>Proceed to Evaluation</p></button>
            </div>
        </div>
    );
};

export default SelfAppraisalPage1int;
