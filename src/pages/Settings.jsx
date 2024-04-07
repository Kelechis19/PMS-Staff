import React from "react";
import { useState } from "react";
import { user } from "../data/temp";
import { MdOutlineModeEdit } from "react-icons/md";

const Settings = () => {
	const [activeView, setActiveView] = useState("account");
	const [editPersonal, setEditPersonal] = useState(true);
	const [firstname, setFirstname] = useState(user.firstname);
	const [middlename, setMiddleName] = useState(user.middlename);
	const [lastname, setLastName] = useState(user.lastname);
	const [email, setEmail] = useState(user.email);
	const [address, setAddress] = useState(user.address);
	const [phone, setPhone] = useState(user.phone);
	const [gender, setGender] = useState(user.gender);

	const handleEditPersonal = () => {
		setEditPersonal(false);
	};
	const handleButtonClick = (buttonName) => {
		setActiveView(buttonName);
	};
	return (
		<div className="w-full  flex flex-col gap-6 mt-[50px] ">
			<div className="w-full h-[45px]  bg-[white] rounded-[5px] flex  text-center">
				<button
					className={`text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] ${
						activeView === "account"
							? "bg-[#1D53A117]/10 w-[30%]  relative   shadow-[black]/10"
							: ""
					}`}
					onClick={() => {
						handleButtonClick("account");
					}}>
					Account
				</button>
				<button
					className={`text-[#205BB1] text-[16px] font-[700] flex-1  rounded-[5px]  ${
						activeView === "help_and_support"
							? "bg-[#1D53A117]/10 w-[30%]  relative  shadow-md shadow-[black]/10"
							: ""
					}`}
					onClick={() => {
						handleButtonClick("help_and_support");
					}}>
					Help and Support
				</button>
				<button
					className={`text-[#205BB1] text-[16px] font-[700] flex-1  rounded-[5px]  ${
						activeView === "about" ? "bg-[#1D53A117]/10 shadow-[black]/10" : ""
					}`}
					onClick={() => {
						handleButtonClick("about");
					}}>
					About
				</button>
			</div>
			<div className="bg-white w-full py-[30px] rounded-[5px] flex flex-col items-center justify-center gap-[30px] ">
				<div className=" w-[90%]  border border-[#ECE9E9] rounded-[8px] flex px-[50px] py-[10px] items-center gap-[20px]">
					<div className="w-[120px] h-[120px] rounded-[50%] bg-slate-400"></div>
					<div className="flex flex-col w-full gap-1">
						<span className="font-[700] text-[18px] text-black">
							{user.firstname} {user.middlename} {user.lastname}
						</span>
						<span className="font-[600] text-[#666667] text-[16px]">
							{user.designation}
						</span>
						<span className="font-500] text-[#666667] text-[14px]">
							{user.department}
						</span>
					</div>
				</div>
				<div
					onClick={handleEditPersonal}
					className=" relative rounded-[8px] border-[#ECE9E9] w-[90%]   border py-[90px] px-[50px]">
					<div className="absolute top-5 right-10 border-[2px] rounded-[20px] border-[#ECE9E9] text-[#ECE9E9] hover:text-[#cccbcb]  hover:border-[#cccbcb] w-[90px] h-[40px] flex items-center text-center justify-center gap-2 cursor-pointer">
						<span>Edit</span>
						<span className="text-[20px]">
							<MdOutlineModeEdit />
						</span>
					</div>
					<p className="text-black text-[20px] font-bold">
						Personal Information
					</p>
					<div className="w-full flex flex-wrap gap-x-[90px] gap-y-[30px] ">
						<span className="flex flex-col">
							<label className="text-[14px] text-[#666667] font-light">
								First Name
							</label>
							<input
								value={firstname}
								onChange={(e) => {
									setFirstname(e.currentTarget.value);
								}}
								className="decoration-none  text-[16px] font-bold outline-none dec"
								// disabled={editPersonal}
							/>
						</span>
						<span className="flex flex-col">
							<label className="text-[14px] text-[#666667] font-light">
								Middle Name
							</label>
							<input
								value={middlename}
								className="decoration-none  text-[16px] font-bold"
								onChange={(e) => {
									setMiddleName(e.currentTarget.value);
								}}
								disabled={editPersonal}
							/>
						</span>
						<span className="flex flex-col">
							<label className="text-[14px] text-[#666667] font-light">
								Last Name
							</label>
							<input
								value={lastname}
								className="decoration-none  text-[16px] font-bold"
								disabled={editPersonal}
								onChange={(e) => {
									setLastName(e.currentTarget.value);
								}}
							/>
						</span>
						<span className="flex flex-col">
							<label className="text-[14px] text-[#666667] font-light">
								Email Address
							</label>
							<input
								value={email}
								className="decoration-none  text-[16px] font-bold"
								disabled={editPersonal}
								onChange={(e) => {
									setEmail(e.currentTarget.value);
								}}
							/>
						</span>
						<span className="flex flex-col">
							<label className="text-[14px] text-[#666667] font-light">
								Phone
							</label>
							<input
								value={phone}
								className="decoration-none  text-[16px] font-bold"
								disabled={editPersonal}
								onChange={(e) => {
									setPhone(e.currentTarget.value);
								}}
							/>
						</span>
						<span className="flex flex-col">
							<label className="text-[14px] text-[#666667] font-light">
								Gender
							</label>
							<input
								value={gender}
								className="decoration-none  text-[16px] font-bold"
								onChange={(e) => {
									setGender(e.currentTarget.value);
								}}
								disabled={editPersonal}
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
