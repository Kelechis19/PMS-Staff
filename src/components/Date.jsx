const Calendar = () => {
	function getWeekCalendar(date) {
		const dayOfWeek = date.getDay();
		const startOfWeek = new Date(date);
		startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);

		const calendar = [];

		for (let i = 0; i < 7; i++) {
			const currentDate = new Date(startOfWeek);
			currentDate.setDate(currentDate.getDate() + i);
			calendar.push(currentDate);
		}

		return calendar;
	}

	// Example usage
	const date = new Date();
	const today = date.getDate();
	const weekCalendar = getWeekCalendar(date);
	const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sun"];
	console.log(weekCalendar);
	return (
		<div className="relative flex  items-center justify-center w-full bg-[white] h-full rounded-[10px]">
			<span className=" absolute text-[16px] font-bold right-3 top-4">
				{date.getDate()}-{date.getMonth()}-{date.getFullYear()}
			</span>
			<div className="relative flex items-center justify-center w-full">
				{weekCalendar.map((item, key) => {
					return (
						<div
							className={`transition-all duration-400 ease-in-out w-full h-full py-[10px]  font-[600] cursor-pointer rounded-[8px] flex flex-col text-[15px] items-center justify-center gap-[8px] ${
								today === item.getDate()
									? "bg-[#E9EFF7] drop-shadow-md"
									: "hover: hover:bg-[#f7faff] "
							} `}>
							<span className="">{days[item.getDay()]}</span>
							<span>{item.getDate()}</span>
							<div className="rounded-full black w-[5px] h-[5px] bg-black" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Calendar;
