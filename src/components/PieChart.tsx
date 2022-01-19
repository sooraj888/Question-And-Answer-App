import React from "react";
import { Box } from "@mui/material";
const PieChart = ({ firstColourPercent }: any) => {
  return (
    <Box
      sx={{
        background: `conic-gradient(green ${firstColourPercent}%, red 0% )`,
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        display: "block",
        margin: "50px",
      }}
    ></Box>
  );
};

export default PieChart;
