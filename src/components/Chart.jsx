import {
	Card,
	CardBody,
	CardHeader,
	Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
	type: "bar",
	height: 240,
	series: [
		{
			name: "Assigned Tasks",
			data: [5, 10, 20, 12, 30, 40, 6],
		},
		{
			name: "Achieved Task",
			data: [2, 4, 8, 9, 20, 8, 1],
		},
	],
	options: {
		chart: {
			toolbar: {
				show: false,
			},
		},
		title: {
			show: "Task Count",
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#17417E", "#98B4DB"],
		plotOptions: {
			bar: {
				columnWidth: "40%",
				borderRadius: 2,
			},
		},
		xaxis: {
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			labels: {
				style: {
					colors: "#616161",
					fontSize: "12px",
					fontFamily: "inherit",
					fontWeight: 400,
				},
			},
			categories: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
		},
		yaxis: {
			labels: {
				style: {
					colors: "#616161",
					fontSize: "12px",
					fontFamily: "inherit",
					fontWeight: 400,
				},
			},
		},
		grid: {
			show: true,
			borderColor: "#dddddd",
			strokeDashArray: 5,
			xaxis: {
				lines: {
					show: true,
				},
			},
			padding: {
				top: 5,
				right: 20,
			},
		},
		fill: {
			opacity: 0.8,
		},
		tooltip: {
			theme: "dark",
		},
	},
};

export default function ChartTasks() {
	return (
		<Card>
			<CardBody className="px-2 pb-0">
				<Chart {...chartConfig} />
			</CardBody>
		</Card>
	);
}
