import React from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Box,
  Card,
  Button,
  Grid,
  Avatar,
  CardContent,
  Badge,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

const TopRatedBoons = () => {
  const classes = useStyles();


    const tasks = useSelector((state) => state.tasksReducer.allTasks);
   const users = useSelector((state) => state.usersReducer.allUsers)


  const sortedTasks = tasks
    .filter((task) => task.rating > 0)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  // console.log("sorted", sortedTasks);

  // GRID
  return (
    <>
      <Box my={8} display="flex" alignItems="center">
        <Typography variant="h2" color="primary">
          Top Rated Boons
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {sortedTasks.map((task) => {
          const rating = task.rating;
          return (
            <Grid item xs={12} md={6} key={task._id}>
              <Card className={classes.ratingCard} elevation={8} p={2}>
                <CardContent>
                  <Grid container alignItems={"stretch"}>
                    <Grid item xs={4}>
                      {/* NAMES RATING AND SKILL CONTAINER */}
                      <Typography>
                        <b>Bonee:</b> {task.boonee.userName}
                      </Typography>
                      <Typography>
                        <b>Booner:</b> {task.booner.userName}
                      </Typography>
                      {/* avatar and small avatar (badge)*/}

                      <Badge
                        overlap="circle"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        badgeContent={<Avatar src={task.boonee.avatar} />}
                      >
                        <Avatar
                          className={classes.miniavatar}
                          alt="boonee avatar"
                          src={task.booner.avatar}
                        ></Avatar>
                      </Badge>

                      {/* RATING */}

                      <Rating name="read-only" value={rating} readOnly />

                      {/* SKILL */}

                      <Button
                        size="small"
                        color="info"
                        variant="outlined"
                        className={classes.tag}
                      >
                        {task.skill.name}
                      </Button>
                    </Grid>
                    <Grid item xs={8}>
                      {/* RATING TEXT */}
                      <Typography variant="body1" p={4}>
                        {task.message}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>

                {/* </Box> */}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default TopRatedBoons;
