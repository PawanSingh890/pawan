import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import { isAuthenticated } from "./helper/helper";
import Member from "./pages/Member";
import StoryPoints from "./pages/StoryPoints";
import { getPoints } from "./helper/helper";

const PlanningPoker = () => {
  const [showContent, setShowContent] = useState(false);
  const [showSelection, setShowSelection] = useState(false);
  const [Selection, setSelection] = useState(false);
  const [points, setPoints] = useState(); //points

  //setPoints(getPoints());
  if (showSelection) {
    setSelection(showSelection);
    setPoints(getPoints());
    setShowSelection(false);
  }
  const cardStyle = {
    color: "red",
    fontSize: 70,
    paddingBottom: 2000,
  };

  return (
    <>
      <Navbar
        showContent={false}
        setShowContent={setShowContent}
        showSelection={false}
        setShowSelection={setShowSelection}
      />
      {isAuthenticated() && isAuthenticated().teamDetails.manager == true && (
        <Box
          sx={{
            padding: 30,
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 105,
              textAlign: "center",
              paddingTop: 65,
              justifyContent: "center",
              alignItems: "center",
              verticalAlign: "middle",
              borderRadius: "25px",
              border: "4px solid #3f51b5",
            },
          }}
        >
          <Paper elevation={18}>
            <Typography
              sx={{ fontSize: 22 }}
              color="text.secondary"
              gutterBottom
            >
              {Selection == false ? (
                <b> Planning Porker</b>
              ) : (
                <Typography style={cardStyle}>{points}</Typography>
              )}

              {/* { showSelection == true && <b> {points} </b> && setShowSelection(false)} */}
            </Typography>
          </Paper>
        </Box>
      )}
      {isAuthenticated() && isAuthenticated().teamDetails.manager == false && (
        <Member />
      )}
      {showContent && <StoryPoints />}
    </>
  );
};

export default PlanningPoker;
