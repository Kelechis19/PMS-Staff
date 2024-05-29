import React from "react";
import ReactDOM from "react-dom";
import { Tasks } from "../data/temp";

const Modal = ({ title, modal }) => {
	return ReactDOM.createPortal(
		<div
			className={`absolute inset-0 w-screen h-screen   z-50 flex items-center justify-center overflow-auto bg-black/20`}>
			<div className='absolute w-[780px] h-[458px] auto my-6 bg-white rounded-md shadow-lg w-max-w-md'>
				<div className='flex items-start justify-between p-4 border-b'>
					<h3 className='text-lg font-semibold'>Submit Task</h3>

					<button
						onClick={() => {
							modal();
						}}
						className='text-gray-500 hover:text-gray-700'>
						<span className='sr-only'>Close</span>
						<svg
							className='w-6 h-6'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path d='M6 18L18 6M6 6l12 12'></path>
						</svg>
					</button>
				</div>
				<div className='ml-[25px]'>
					<div className='text-black text-base font-bold   mt-[15px]'>
						Task title
					</div>
					<div className='text-black text-sm font-medium   mt-[5px] mb-[40px]'>
						Create presentation slides for meeting with concerning the...
					</div>
					<div className='text-base font-medium text-black '>
						<p>Report</p>
					</div>

					<textarea
						className='w-[734px] h-[198px] p-1 bg-white rounded border border-black border-opacity-20 resize-none outline-none'
						type='text'
						placeholder='Write Task Report '
					/>
					<div className='w-[65px] h-[30px] px-3 py-2 bg-blue-500 rounded shadow justify-center items-center gap-2 inline-flex ml-[668px] '>
						<div className='text-xs font-semibold text-center text-indigo-50 '>
							<button onClick={modal} className='w-full'>
								Submit
							</button>
						</div>
					</div>
				</div>

				<div className='p-4'>{title}</div>
			</div>
		</div>,
		document.getElementById("root")
	);
};
export default Modal;
