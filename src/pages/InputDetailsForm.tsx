import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InputDetailsForm = () => {
  const navigate = useNavigate();
  const handleOnFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("submited");
    navigate("questions/1");
  };
  return (
    <div className="headding">
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
        <TextField required={true}></TextField>
        <Button type="submit">{"submit"}</Button>
      </Box>
    </div>
  );
};

export default InputDetailsForm;
