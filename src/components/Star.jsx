// NewFile.jsx (or NewFile.js)

// Import React and necessary components from Material-UI
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

// Labels for rating values
const labels = {
	0.5: "",
	1: "",
	1.5: "",
	2: "",
	2.5: "",
	3: "",
	3.5: "",
	4: "",
	4.5: "",
	5: "",
};

// Function to get label text based on value
function getLabelText(value) {
	return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

// Component definition
export default function HoverRating() {
	const [value, setValue] = useState(2);
	const [hover, setHover] = useState(-1);

	return (
		<Box
			sx={{
				width: 200,
				display: "flex",
				alignItems: "center",
			}}>
			<Rating
				name="hover-feedback"
				value={value}
				precision={0.5}
				getLabelText={getLabelText}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				onChangeActive={(event, newHover) => {
					setHover(newHover);
				}}
				emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
			/>
			{value !== null && (
				<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
			)}
		</Box>
	);
}
