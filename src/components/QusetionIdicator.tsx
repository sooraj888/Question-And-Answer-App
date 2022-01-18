import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import questionData from "./../quesionData.json";

const QusetionIdicator = ({ answersArray, id }: any) => {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {questionData.map((quesion: any) => {
        const isAnswered =
          answersArray[quesion.id - 1].length > 0 ? true : false;
        let highlight = false;
        if (Number(id) === quesion.id) {
          highlight = true;
        }
        return (
          <Circle
            key={quesion.id}
            highlight={highlight}
            isAnswered={isAnswered}
            id={quesion.id}
          ></Circle>
        );
      })}
    </Box>
  );
};

export default QusetionIdicator;

const Circle = ({ id, isAnswered, highlight }: any) => {
  return (
    <Link to={`/questions/${id}`}>
      <Box
        sx={{
          bgcolor: isAnswered ? "rgb(236, 111, 61)" : "gray",
          border: highlight ? "3px solid blue " : "",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {id}
      </Box>
    </Link>
  );
};
