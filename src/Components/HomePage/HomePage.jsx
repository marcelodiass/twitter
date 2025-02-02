import { Grid } from "@mui/material";
import React from "react";

const HomePage = () => {
	return (
		<Grid container xs={12} className="px-5 lg:px-36 justify-between">
			<Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative border">
				<p className="text-center">
                    Left Part
                </p>
			</Grid>
			<Grid item xs={12} lg={6} className="hidden lg:block w-full relative border">
				<p className="text-center">
                    Middle Part
                </p>
			</Grid>
            <Grid item xs={0} lg={3} className="hidden lg:block w-full relative border">
				<p className="text-center">
                    Right Part
                </p>
			</Grid>
		</Grid>
	);
};

export default HomePage;
