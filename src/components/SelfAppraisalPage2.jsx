import React from 'react'

const SelfAppraisalPage2 = () => {
  return (
      <div className='relative'>
          <div className="font-bold mt-[10px]">
              <p>SECTION 2-HPO SELF PERFORMANCE</p>
          </div>
          <div className="text-sm mt-[5px]">
              <p>
                  Let your most significant accomplishment or contribution since
                  last year.(list 3 only)
              </p>
          </div>
          <textarea className="w-[1000px] h-[90px] border-1 border-[#D7D7D7] outline-none resize-none rounded p-1 mt-[5px]"></textarea>
          <div className="text-sm mt-[10px] rounded-md">
              <p>
                  Since the last appraisal period have you successfuly performed
                  any new task or additional duties outside the scope of your
                  regular responsibility? if so, please specify
              </p>
          </div>
          <textarea className="w-[1000px] h-[90px] border-1 border-[#D7D7D7] outline-none resize-none rounded p-1 mt-[5px]"></textarea>
          <div className="text-sm mt-[10px] rounded-md">
              <p>
                  what activities have you initailed participated in an effort
                  to encourage camaderie and teamarck with your group or office?
              </p>
          </div>
          <textarea className="w-[1000px] h-[90px] border-1 border-[#D7D7D7] outline-none resize-none rounded p-1 mt-[5px] "></textarea>
      </div>
  );
}

export default SelfAppraisalPage2