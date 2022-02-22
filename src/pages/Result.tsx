import { Button } from "@mui/material";
import { Box, width } from "@mui/system";

import { useLocation, useNavigate } from "react-router-dom";
import PieChart from "../components/PieChart";
import questionData from "./../quesionData.json";

const Result = () => {
  let localData: any = useLocation().state;
  const navigate = useNavigate();
  let isAnswerdRight = false;

  const rightAnswers = questionData.reduce((prev: any, question: any) => {
    return question.id == 3 &&
      JSON.stringify(question.answer.sort()) ==
        JSON.stringify(localData[question.id - 1].sort())
      ? prev + 1
      : JSON.stringify(question.answer) ===
        JSON.stringify(localData[question.id - 1])
      ? prev + 1
      : prev;
  }, 0);

  if (!localData) {
    return <h1>Not allowed</h1>;
  }
  return (
    <div className="center">
      <h1>You got {rightAnswers}/5</h1>
      <PieChart firstColourPercent={(rightAnswers * 100) / 5}></PieChart>

      {questionData.map((question: any) => {
        isAnswerdRight =
          question.id == 3 &&
          JSON.stringify(question.answer.sort()) ===
            JSON.stringify(localData[question.id - 1].sort())
            ? true
            : JSON.stringify(question.answer) ==
              JSON.stringify(localData[question.id - 1])
            ? true
            : false;

        return (
          <Box
            px={{
              marginTop: "20px",
            }}
            key={question.id}
          >
            <p>Q: {question.question}</p>
            <Box
              sx={{
                color: "white",
                bgcolor: isAnswerdRight ? "green" : "red",
                padding: "1rem",
                borderRadius: "5px",
                width: "300px",
              }}
            >
              {JSON.stringify(localData[question.id - 1])}
            </Box>
            {!isAnswerdRight && (
              <Box>
                <h5>Right answer: </h5>
                {JSON.stringify(question?.answer)}
              </Box>
            )}
          </Box>
        );
      })}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
        }}
      >
        <Button
          color="warning"
          onClick={() => navigate("/questions/1")}
          variant="contained"
        >
          Retry
        </Button>
        <Button
          color="warning"
          onClick={() => navigate("/")}
          variant="contained"
        >
          Exit
        </Button>
      </Box>
    </div>
  );
};

export default Result;
