/* eslint-disable no-unused-vars */
import * as React from "react";
import { useNavigate } from "react-router";
const Form = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[565px] w-[554px] bg-white  rounded-3xl border-[1.5px] border-black p-[30px] ">
      <h1 className="text-4xl font-semibold">Sign In To Your Account</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Enter Your Credentials used in Anomis
      </p>
      <div className="mt-8 ">
        <div>
          <label className="text-lg font-medium">Staff ID</label>
          <input
            className="w-full border-[2px] border-gray-100 rounded-xl p-[4px] mt-[1px] bg-transparent"
            placeholder="Staff ID"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-[2px] border-gray-100 rounded-xl p-[4px] mt-[1px] bg-transparent"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remeber" />
            <label className="ml-2 font-medium text-base" itemID="remeber">
              Remember Me
            </label>
          </div>
          <button className="font-medium text-base text-blue-400">
            Forgot Password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4 ">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl h-[53px] bg-blue-400 text-white text-lg font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Form;
