import React, { useState } from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

// Create the container
const Container = styled.div`
  border-radius: 12px;
  box-shadow: 0px 0px 2px grey;
  height: 53vh;
  max-height: 65vh;
  width: 60px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: white;
`;

// Create a bar that moves
const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.percentageDiff}%;
  background-color: ${(props) => (props.isPastGoal ? "#D9B44A" : "#125447")};
  transition: height 0.8s ease;
`;

// Create a line for the limit
const LimitLine = styled.div`
  position: absolute;
  bottom: ${(props) => props.goalAmountPercentage}%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #125447;
`;

// Create a lable in the graph
const DayLabel = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-family: Barlow;
  color: 092A23;
  margin-top: 10px;
`;

// Create a label for the goal amount
const GoalLabel = styled.div`
  position: absolute;
  bottom: ${(props) => props.goalAmountPercentage + 2}%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-family: Barlow;
  color: #125447;
  display: flex;
  align-items: center;
  text-align: center;
`;
// Calculates how filled the bar should be
const Progressbar = ({ spendingAmount, total, goalAmount, timeUnit }) => {
  const percentageDiff = Math.round((spendingAmount / total) * 100);
  const goalAmountPercentage = (goalAmount / total) * 100;
  const isPastGoal = percentageDiff >= goalAmountPercentage;

  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }
  // Returns a progressBar, swithces the label depending on input
  // example for input
  //<Progressbar spendingAmount={50} total={100} goalAmount={80} timeUnit='vecka' />
  return (
    <div>
      <Container onClick={handleOpen}>
        <ProgressBar
          percentageDiff={percentageDiff}
          isPastGoal={isPastGoal}
        ></ProgressBar>
        <LimitLine goalAmountPercentage={goalAmountPercentage} />
        <GoalLabel goalAmountPercentage={goalAmountPercentage}>
          {goalAmount} kWh
        </GoalLabel>
        <DayLabel>{timeUnit === "dag" ? "Dag" : "Vecka"}</DayLabel>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontFamily: "Barlow",
            }}
          >
            {timeUnit === "dag"
              ? "Daglig energiförbrukning"
              : "Veckovis energiförbrukning"}
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: "#ffff", color: "white" }}>
            <DialogContentText
              id="alert-dialog-description"
              sx={{
                backgroundColor: "#ffff",
                color: "black",
                fontFamily: "Barlow",
              }}
            >
              Denna graf visar det dagliga eller veckovisa energiförbrukningen
              av ditt hushåll. Om grafens färg ändrar färg från grön till gul så
              betyder det att du använt mer energi än det målet du angett.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
};

export default Progressbar;
