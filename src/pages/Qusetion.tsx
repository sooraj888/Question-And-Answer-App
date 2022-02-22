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
import { idText } from "typescript";
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
  const [arrAnswer5, setArrAnswer5] = useState<any>([]);

  const handleOnAnswerSubmission = (e: any) => {
    e.preventDefault();
    navigate("/result", { state: answersArray });
  };

  useEffect(() => {
    console.log(answersArray, arrAnswer5);
  }, [answersArray, arrAnswer5]);

  useEffect(() => {
    setAnswersArray((values: any) => {
      const arr: any = [...values];
      arr[4] = arrAnswer5;
      return arr;
    });
  }, [arrAnswer5]);

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

  const handleMatchTheFollowing = (item: string) => {
    console.log(item);
    setArrAnswer5((prev: any) => {
      console.log(item);
      const updateArray = [...prev];
      !updateArray.includes(item) && updateArray.push(item);
      return updateArray;
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
                      arr[0] = e.target.value;
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
                        arrUpdate[1] = e.target.value;
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
                        checked={answersArray[2].includes(item)}
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
                        arrUpdate[3] = e.target.value;
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
              let arr5: any = quesionData?.[4];

              return (
                <>
                  <Button onClick={() => setArrAnswer5([])}>Retry </Button>

                  {arr5.questionOption.map((item: any, id: number) => {
                    console.log(item, arrAnswer5?.[id], arr5?.option?.[id]);

                    return (
                      <Box key={id} className="mathTheFollowing">
                        <span>{item}</span>
                        <span>{arrAnswer5?.[id]}</span>
                        <span>
                          <Button
                            disabled={
                              arrAnswer5.includes(arr5?.option?.[id]) && true
                            }
                            onClick={() => {
                              handleMatchTheFollowing(arr5?.option?.[id]);
                            }}
                          >
                            {arr5?.option?.[id]}
                          </Button>
                        </span>
                      </Box>
                    );
                  })}
                </>
              );
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
