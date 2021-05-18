import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardActions,
  Button,
  CardMedia,
  Grid,
  Avatar,
} from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const allImages = require.context("../../images", true, /.svg$/);


const CurentlyOffering = () => {
  const classes = useStyles();
  const skillsData = useSelector((state) => state.skillsReducer);
  // Create an array with five different skills from skills database
  const randomSkills = [];
  for (let i = 0; i <= 4; i++) {
    const randomNumberRange = Math.floor(
      Math.random() * (skillsData.length - 0) + 0
    );
    if (!randomSkills.includes(skillsData[randomNumberRange])) {
      randomSkills.push(skillsData[randomNumberRange]);
    }
  }

  console.log("hey", allImages);

  return (
    <>
      <Box mt={10} display="flex" alignItems="center">
        <Typography variant="h2" color="secondary">
          Currently offering
        </Typography>
      </Box>

      {/* CARDS */}

      <Grid item xs={12} display="flex">
        <Box className={classes.cardBox} mt={3} display="flex" textAlign="center" justifyContent="center">
          {randomSkills.length > 1 &&
            randomSkills.map((skill) => {
              //console.log(allImages(`./${skill.avatar}`));
              return (
                <Card className='card' className={classes.currentlyCard}  key={skill._id}>
                  <Box p={3}>
                    <Typography variant="h5" color="primary">
                      {skill.name}
                    </Typography>
                  </Box>
                  <Avatar
                    className={classes.media}
                    alt="boonee avatar"
                    src={allImages(`./${skill.avatar}`).default}
                  />

                  <CardActions className={classes.more}>
                    <Button
                      size="large"
                      color="primary"
                      variant="contained"
                      className={classes.button}
                    >
                      More
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
        </Box>
      </Grid>
    </>
  );
};

export default CurentlyOffering;
