const People = ({ people }) => {
	return people.length > 3 ? (
		<>
			{people.slice(0, 3).map((person, key) => {
				return (
					<div className={`rounded-full  -mr-[15px] z-[${key * 10}]`}>
						<img
							className="object-cover"
							src={`/src/assets/member/${person.profile_pic}`}
						/>
					</div>
				);
			})}
			<div className="size-8 rounded-full bg-[#EAEBEC] text-[#656667] text-[13px] flex items-center justify-center text-center font-bold border-[1px] border-[white]">
				<span>+{people.length - 3}</span>
			</div>
		</>
	) : (
		people.map((person, key) => {
			return (
				<div className={`rounded-full  -mr-[15px] z-[${key * 10}]`}>
					<img
						className="object-cover"
						src={`/src/assets/member/${person.profile_pic}`}
					/>
				</div>
			);
		})
	);
};

export default People;
