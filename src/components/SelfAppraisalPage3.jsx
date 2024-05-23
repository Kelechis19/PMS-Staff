import React from 'react'

const SelfAppraisalPage3 = () => {
  return (
      <div>
          <div className="font-bold mt-[10px]">
              <p>SECTION 3-HPO SELF PERFORMANCE</p>
          </div>
          <div className="mt-[15px]">
              <p>
                  To which of the following order listed factors will you
                  attribute to your profession development since last year
              </p>
          </div>
          <div className="border-1 border-[#D7D7D7] w-[1000px] rounded-md  px-2">
              <NO />
          </div>
          <div className="text-sm mt-[10px]">
              <p>
                  List three (3) steps you can plan to take and/ or the
                  resources you need in order to improve your professional
                  capabilities
              </p>
          </div>
          <textarea className="w-[1000px] h-[90px] border-1 resize-none border-[#D7D7D7] mt-[5px] rounded-md"></textarea>
      </div>
  );
}
const NO = () =>{
  return (
      <>
          <div className="flex items-center gap-2 pt-[10px]">
              <input className="" type="checkbox" name="" id="" />
              <div className="text-sm">Offsite seminars/classes</div>
          </div>
          <div className="flex items-center gap-2 pt-[10px]">
              <input className="" type="checkbox" name="" id="" />
              <div className="text-sm">On-the-Job Training</div>
          </div>
          <div className="flex items-center gap-2 pt-[10px]">
              <input className="" type="checkbox" name="" id="" />
              <div className="text-sm">Poor Training</div>
          </div>
          <div className="flex items-center gap-2 pt-[10px]">
              <input className="" type="checkbox" name="" id="" />
              <div className="text-sm">Management Coaching or Monitoring</div>
          </div>
          <div className="flex items-center gap-2 pt-[10px] pb-[10px]">
              <input className="" type="checkbox" name="" id="" />
              <div className="text-sm">Other  ____________________________</div>
          </div>
      </>
  );
}
export default SelfAppraisalPage3