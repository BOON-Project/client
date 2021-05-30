import {
    Paper,
    Typography,
    Box,
    Card,
    Button,
    Grid,
    Avatar,
    CardContent,
    Container,
    Chip,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import useStyles from "./styles";
const allImages = require.context("../../images", true, /.jpg$/);

const TaskDetails = (props) => {
    const user = useSelector((state) => state.userReducer.user);
    const history = useHistory();
    const classes = useStyles();
    const task = props.location.state.task;

    //console.log(task.boonee.firstName);
    return (
        <>
            <Container maxWidth='md' className={classes.root}>
                <Paper className={classes.paperTaskDetails}>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <Grid item xs={12}>
                                {/* avatar and small avatar (badge)*/}
                                {user._id !== task.boonee._id ? (
                                    <Avatar
                                        className={classes.avatar}
                                        alt='boonee avatar'
                                        src={task.boonee.avatar}></Avatar>
                                ) : (
                                    <Avatar
                                        className={classes.avatar}
                                        alt='booner avatar'
                                        src={task.booner.avatar}></Avatar>
                                )}

                                <Chip
                                    label={task.skill.name}
                                    variant='outlined'
                                    color='info'
                                    className={classes.tag}>
                                    {task.skill.name}
                                </Chip>
                            </Grid>
                            {/* NAMES RATING AND SKILL CONTAINER */}
                            <Typography>
                                {user._id !== task.boonee._id ? (
                                    <b>Boonee: {task.boonee.userName}</b>
                                ) : (
                                    <b>Booner: {task.booner.userName}</b>
                                )}
                            </Typography>

                            {/* date  */}
                            <Typography>Date: {task.date}</Typography>

                            <Typography>Task code: {task._id}</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography>Message:</Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Typography variant='body1' p={4}>
                                {task.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {" "}
                            <img
                                alt='img'
                                src={
                                    allImages(`./${task.skill.avatar}`).default
                                }
                                className={classes.taskimg}></img>
                        </Grid>

                        {/* SKILL */}

                        {/* RATING TEXT */}
                        <Typography variant='body1' p={4}>
                            {task.status}
                        </Typography>

                        <Grid container>
                            <Grid item xs={4}>
                                asfwef
                            </Grid>
                            <Grid item xs={4}>
                                awefwe
                            </Grid>
                            <Grid item xs={4}>
                                awfwef
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                {/* Last last button at bottom */}
            </Container>
            <Box className={classes.buttonBox}>
                <Button
                    to='/home'
                    size='large'
                    //you can change this color as you like im only testing
                    color='primary'
                    variant='contained'
                    onClick={() => history.goBack()}
                    className={classes.button}>
                    Go back
                </Button>
            </Box>
        </>
    );
};

export default TaskDetails;
