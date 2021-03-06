import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
//styingggggggggggggggggggggg
import {
    Typography,
    Box,
    Card,
    CardActions,
    Button,
    Avatar,
    Grid,
    ButtonGroup,
    Chip,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import useStyles from "./styles";
import Skeleton from "@material-ui/lab/Skeleton";

//general imports like components or logical helpers
import { useSelector } from "react-redux";
import useFullPageLoader from "../hooks/useFullPageLoader";

const SkillByUser = () => {
    //material ui classes
    const classes = useStyles();

    // to go back
    const history = useHistory();

    //getting all users with skills !!
    const users = useSelector((state) => state.usersReducer.usersWithSkill);
    console.log("state", users.length);


    //loading state
    const [loader, showLoader, hideLoader] = useFullPageLoader();

    //setting skeletong initial state
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        showLoader();
        setLoading(true);
        setTimeout(() => {
            users.users = users;
            setLoading(false);
            hideLoader();
        }, 3000);
    }, [users]);


    return (
        <>
            <Box className={classes.main} display='flex' alignItems='center'>
                <Typography variant='h3' color='primary'>
                    Available users
                </Typography>
            </Box>

            {/* CARDS */}
            <Grid container spacing={1}>
                {/* SORTING THE 4 BEST USERS AND MAPING THEM */}
                {users.length == '0' ? <Typography variant='h4' color='primary'>
                    No users available 😞 <br /> You can also try with a different skill 😉
                </Typography>


                :
                    users
                        .sort((a, b) => b.rating - a.rating)
                        .map((user) => {
                            return (
                                <>
                                    {loader}

                                    <Grid item xs={12} md={3}>
                                        <Card
                                            className={classes.userCard}
                                            elevation={8}
                                            key={user._id}>
                                            <Box
                                                display='flex'
                                                flexDirection='column'>
                                                <Box m={2}>
                                                    {/* NAME */}
                                                    {loading ? (
                                                        <Skeleton variant='text' />
                                                    ) : (
                                                        <Typography
                                                            variant='h4'
                                                            color='info'>
                                                            {user.userName}
                                                        </Typography>
                                                    )}

                                                    {/* RATING */}
                                                    <Box
                                                        display='flex'
                                                        justifyContent='center'
                                                        alignItems='center'>
                                                        {loading ? (
                                                            <Skeleton variant='text' />
                                                        ) : (
                                                            <Typography
                                                                variant='h6'
                                                                color='info'>
                                                                {user.rating}
                                                            </Typography>
                                                        )}
                                                        <StarIcon color='secondary' />
                                                    </Box>
                                                    <Box
                                                        m={4}
                                                        display='flex'
                                                        justifyContent='center'>
                                                        {loading ? (
                                                            <Skeleton variant='circle' />
                                                        ) : (
                                                            <Avatar
                                                                alt='Remy Sharp'
                                                                src={
                                                                    user.avatar
                                                                }
                                                                className={
                                                                    classes.avatarBooners
                                                                }
                                                            />
                                                        )}
                                                    </Box>

                                                    {/* MAP THROUGHT THE SKILLS */}
                                                    {user.skills &&
                                                        user.skills.map(
                                                            (skill) => {
                                                                return (
                                                                    <Box
                                                                        display='flex'
                                                                        justifyContent='center'
                                                                        //flexDirection="column"
                                                                        flexWrap='wrap'
                                                                        pt={1}
                                                                        key={
                                                                            skill
                                                                                .skillID
                                                                                ._id
                                                                        }>
                                                                        {loading ? (
                                                                            <Skeleton variant='text' />
                                                                        ) : (
                                                                            <Chip
                                                                                label={
                                                                                    skill
                                                                                        .skillID
                                                                                        .name
                                                                                }
                                                                                variant='outlined'
                                                                                color='primary'

                                                                                //className={classes.tag}
                                                                            ></Chip>
                                                                        )}
                                                                    </Box>
                                                                );
                                                            }
                                                        )}
                                                </Box>
                                                <CardActions
                                                    style={{
                                                        padding: "0",
                                                    }}>
                                                    <Link
                                                        to={{
                                                            pathname: `/UserProfile/${user._id}`,
                                                            state: { user },
                                                        }}
                                                        style={{
                                                            width: "100%",
                                                            textDecoration: "none",
                                                        }}>
                                                        <Button
                                                            size='large'
                                                            color='secondary'
                                                            variant='contained'
                                                            className={
                                                                classes.button
                                                            }>
                                                            Check out this user
                                                        </Button>
                                                    </Link>
                                                </CardActions>
                                            </Box>
                                        </Card>
                                    </Grid>
                                </>
                            );
                        })}

                <Grid
                    container
                    justify='center'
                    alignItems='center'
                    className={classes.container}>
                    <Grid item md={3}>
                        <ButtonGroup variant='contained'>
                            <Button
                                type='button'
                                size='large'
                                color='secondary'
                                variant='contained'
                                onClick={() => history.push("/")}
                                className={classes.button}>
                                Go back
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SkillByUser;
