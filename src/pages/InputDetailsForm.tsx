import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const InputDetailsForm = () => {
  const navigate = useNavigate();
  const handleOnFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("submited");
    navigate("questions/1");
  };
  return (
    <Box
      component="form"
      onSubmit={handleOnFormSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "330px",
        width: "300px",
        textAlign: "center",
        justifyContent: "space-between",
        p: 8,
        border: "1px solid grey",
      }}
    >
      <TextField required></TextField>
      <Link to="questions/1">
        <Button type="submit">as</Button>
      </Link>
    </Box>
  );
};

export default InputDetailsForm;
