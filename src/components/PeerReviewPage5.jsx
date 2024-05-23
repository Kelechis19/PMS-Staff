const Section = ({ title, items }) => {
	return (
		<div className='border-2 border-[#D7D7D7] px-7 rounded-lg p-3 mb-5 space-y-5'>
			<div className='font-bold'>
				<p>{title}</p>
			</div>
			{items.map((item, index) => (
				<div
					key={index}
					className='flex items-center justify-between mt-[10px]'>
					<div className='hol'>
						<p>{item}</p>
					</div>
					<Nums />
				</div>
			))}
		</div>
	);
};

const PeerReviewPage5 = () => {
	const sections = [
		{
			title: "SECTION 5 - LEADERSHIP AND MOTIVATION SKILLS",
			items: [
				"Articulates strategy in plain language",
				"Delegates authority",
				"Facilitates work process without dominating",
				"Encourages others to have passion for the job",
				"Communicates an inspiring vision",
				"Creates friendly atmosphere that motivates higher productivity",
				"Acknowledges excellent performance",
				
			],
		},
	];

	return (
		<>
			{sections.map((section, index) => (
				<Section key={index} title={section.title} items={section.items} />
			))}
		</>
	);
};
const Nums = () => {
	return (
		<>
			<div className='flex '>
				<div className='hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer'>
					1
				</div>
				<p className='hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer'>
					2
				</p>
				<p className='hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer'>
					3
				</p>
				<p className='hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer'>
					4
				</p>
				<p className='hover:bg-[#98B4DB] duration-300 hover:rounded-full w-6 flex items-center justify-center hover:text-white cursor-pointer'>
					5
				</p>
				<p className='hover:bg-[#98B4DB] duration-300 hover:rounded-full w-10 flex items-center justify-center hover:text-white cursor-pointer ml-2'>
					N/A
				</p>
			</div>
		</>
	);
};

export default PeerReviewPage5;
