import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box, flexbox } from "@mui/system";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QusetionIdicator from "../components/QusetionIdicator";
import quesionData from "./../quesionData.json";

const Qusetion = () => {
  const navigate = useNavigate();
  const params: any = useParams();
  let id = params.id;
  if (!id) {
    id = 1;
  }
  const [answersArray, setAnswersArray] = useState<any>(Array(5).fill([]));

  const handleOnAnswerSubmission = (e: any) => {
    e.preventDefault();
    navigate("/result", { state: answersArray });
  };

  useEffect(() => {
    console.log(answersArray);
  }, [answersArray]);

  const handleOnCheckBox = (optionValue: any) => {
    setAnswersArray((value: any) => {
      let arr = [...value];

      if (!arr[2].includes(optionValue)) {
        arr[2] = [...arr[2], optionValue];
      } else {
        arr[2] = arr[2].filter((item: any) => {
          return item !== optionValue;
        });
      }

      return arr;
    });
  };

  if (id > 5) {
    return <div className="headding">id noyt found</div>;
  }
  // !
  return (
    <Box component="form" onSubmit={handleOnAnswerSubmission}>
      <QusetionIdicator answersArray={answersArray} id={id}></QusetionIdicator>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="qusion">
          <h3 style={{ display: "inline-block", paddingRight: "40px" }}>
            {id} )
          </h3>
          <b>{quesionData?.[id - 1].question}</b>
        </div>
      </Box>
      <Button
        sx={{ left: "50px", bottom: "30%", position: "absolute" }}
        disabled={id <= 1}
        onClick={() => navigate(`/questions/${id - 1}`)}
      >
        Back
      </Button>

      {/* {console.log(quesionData[1].option)} */}
      <div className="headding s">
        {(() => {
          switch (id) {
            case "1":
              return (
                <TextField
                  value={answersArray[0]}
                  onChange={(e: any) =>
                    setAnswersArray((values: any) => {
                      const arr: any = [...values];
                      arr[0] = [e.target.value];
                      return arr;
                    })
                  }
                ></TextField>
              );
            case "2":
              let arr1: any = quesionData?.[1]?.option;
              return (
                <FormControl>
                  <RadioGroup
                    value={answersArray[1]}
                    onChange={(e: any) => {
                      setAnswersArray((value: any) => {
                        const arrUpdate: any = [...value];
                        arrUpdate[1] = [e.target.value];
                        return arrUpdate;
                      });
                    }}
                  >
                    {arr1.map((item: any) => {
                      return (
                        <FormControlLabel
                          key={item}
                          label={item}
                          value={item}
                          control={<Radio />}
                        ></FormControlLabel>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              );
            case "3":
              let arr: any = quesionData?.[2].option;
              return (
                <FormGroup>
                  {arr.map((item: any) => {
                    return (
                      <FormControlLabel
                        key={item}
                        control={<Checkbox />}
                        label={item}
                        onChange={() => handleOnCheckBox(item)}
                      />
                    );
                  })}
                </FormGroup>
              );
            case "4":
              let arr4: any = quesionData?.[3].option;
              return (
                <FormControl>
                  <RadioGroup
                    value={answersArray[3]}
                    onChange={(e: any) => {
                      setAnswersArray((value: any) => {
                        const arrUpdate: any = [...value];
                        arrUpdate[3] = [e.target.value];
                        return arrUpdate;
                      });
                    }}
                  >
                    {arr4.map((item: any) => {
                      return (
                        <FormControlLabel
                          key={item}
                          label={item}
                          value={item}
                          control={<Radio />}
                        ></FormControlLabel>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              );
            case "5":
              return <>qasdas5</>;
          }
        })()}
      </div>
      <Button
        sx={{ right: "50px", bottom: "30%", position: "absolute" }}
        disabled={id >= 5}
        onClick={() => navigate(`/questions/${Number(id) + 1}`)}
      >
        Next
      </Button>
      <Button
        sx={{ right: "45%", bottom: "20%", position: "absolute" }}
        type="submit"
        disabled={!(id == 5)}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Qusetion;
