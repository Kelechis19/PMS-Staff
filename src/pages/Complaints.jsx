import React from 'react'

const Complaints = () => {
  return (
      <div>
          <div className="mt-[10px] flex items-center border-1 border-White px-3 p-1 text-blue-300 rounded-md ">
              <div className="">
                  <p>Complaints</p>
              </div>
              <div className="ml-[950px]">
                  <p>X</p>
              </div>
          </div>
          <div className="flex bg-white p-2  mt-[10px] rounded-md">
              <div className="pl-[5%]">
                  <p>Title</p>
              </div>
              <div className="pl-[52%]">
                  <p>To</p>
              </div>
              <div className="pl-[16%]">
                  <p>Status</p>
              </div>
          </div>
          <div className="hold">
              <Comp />
          </div>
      </div>
  );
}

const Comp = () => {
  return (
      <>
          <div className="bg-white h-[500px] px-2 mt-[10px] rounded-lg">
              <div className="flex items-center pt-[15px]">
                  <div className="">
                      <p>
                          <span className="font-black ">.</span>{" "}
                          <span className="pl-[8px]">
                              Create presentation slides for..
                          </span>
                      </p>
                  </div>
                  <div className="pl-[38%]">
                      <p>HR</p>
                  </div>
                  <div className="border-1 ml-[15%]  border-yellow-600 text-yellow-600 bg-yellow-200 w-[80px] px-2">
                      <p>Pending</p>
                  </div>
                  <div className="border-1 border-black px-3  w-[60px] ml-[7%]">
                      <p>View</p>
                  </div>
              </div>
              <div className="border-1 border-gray-300 mt-[10px]"></div>

              <div className="flex items-center pt-[15px]">
                  <div className="">
                      <p>
                          <span className="font-black ">.</span>{" "}
                          <span className="pl-[8px]">
                              Create presentation slides for..
                          </span>
                      </p>
                  </div>
                  <div className="pl-[38%]">
                      <p>HR</p>
                  </div>
                  <div className="border-1 ml-[15%]  border-yellow-600 text-yellow-600 bg-yellow-200 w-[80px] px-2">
                      <p>Pending</p>
                  </div>
                  <div className="border-1 border-black px-3  w-[60px] ml-[7%]">
                      <p>View</p>
                  </div>
              </div>
              <div className="border-1 border-gray-300 mt-[10px]"></div>

              <div className="flex items-center pt-[15px]">
                  <div className="">
                      <p>
                          <span className="font-black ">.</span>{" "}
                          <span className="pl-[8px]">
                              Create presentation slides for..
                          </span>
                      </p>
                  </div>
                  <div className="pl-[38%]">
                      <p>GM</p>
                  </div>
                  <div className="border-1 ml-[14.5%]  border-yellow-600 text-yellow-600 bg-yellow-200 w-[80px] px-2">
                      <p>Pending</p>
                  </div>
                  <div className="border-1 border-black px-3  w-[60px] ml-[7.2%]">
                      <p>View</p>
                  </div>
              </div>
              <div className="border-1 border-gray-300 mt-[10px]"></div>
              <div className="flex items-center pt-[15px]">
                  <div className="">
                      <p>
                          <span className="font-black ">.</span>{" "}
                          <span className="pl-[8px]">
                              Create presentation slides for..
                          </span>
                      </p>
                  </div>
                  <div className="pl-[38%]">
                      <p>HR</p>
                  </div>
                  <div className="border-1 ml-[15%]  border-green-600 text-green-500 bg-green-200 w-[80px] px-2">
                      <p>Received</p>
                  </div>
                  <div className="border-1 border-black px-3  w-[60px] ml-[7%]">
                      <p>View</p>
                  </div>
              </div>
              <div className="border-1 border-gray-300 mt-[10px]"></div>

              <div className="flex items-center pt-[15px]">
                  <div className="">
                      <p>
                          <span className="font-black ">.</span>{" "}
                          <span className="pl-[8px]">
                              Create presentation slides for..
                          </span>
                      </p>
                  </div>
                  <div className="pl-[38%]">
                      <p>GM</p>
                  </div>
                  <div className="border-1 ml-[14.5%]  border-green-600 text-green-500 bg-green-200 w-[80px] px-2">
                      <p>Received</p>
                  </div>
                  <div className="border-1 border-black px-3  w-[60px] ml-[7.2%]">
                      <p>View</p>
                  </div>
              </div>
              <div className="border-1 border-gray-300 mt-[10px]"></div>
              <div className="flex items-center pt-[15px]">
                  <div className="">
                      <p>
                          <span className="font-black ">.</span>{" "}
                          <span className="pl-[8px]">
                              Create presentation slides for..
                          </span>
                      </p>
                  </div>
                  <div className="pl-[38%]">
                      <p>GM</p>
                  </div>
                  <div className="border-1 ml-[14.5%]  border-green-600 text-green-500 bg-green-200 w-[80px] px-2">
                      <p>Received</p>
                  </div>
                  <div className="border-1 border-black px-3  w-[60px] ml-[7.2%]">
                      <p>View</p>
                  </div>
              </div>
              <div className="border-1 border-gray-300 mt-[10px]"></div>
          </div>
      </>
  );
}

export default Complaints