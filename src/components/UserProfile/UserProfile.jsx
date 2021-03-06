import React from "react";
import { Link } from "react-router-dom";
//MUI styling =>
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemSecondaryAction,
    Paper,
    Divider,
    CssBaseline,
    Grid,
    Button,
    ButtonGroup,
    Container,
} from "@material-ui/core";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Rating from "@material-ui/lab/Rating";

//general imports
import useStyles from "./styles";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";

// start of our User Profile
export default function UserProfile(props) {
    //user location

    //in order to use Material UI u need this =>
    const classes = useStyles();

    // to go back
    const history = useHistory();

    //deconstruct user's info
    const user = props.location.state.user;

    const boonee = useSelector((state) => state.userReducer.user);

    const { firstName, userName, bio, rating, avatar, skills } =
        props.location.state.user;

    const skillsList = skills.map((skill) => {
        return (
            <Box display='flex' alignItems='center' m={1}>
                <Button size='large' color='primary' variant='outlined'>
                    {skill.skillID.name}
                </Button>
                <Box m={2}>
                    <Typography>{skill.boons} boons per hour</Typography>
                </Box>
            </Box>
        );
    });

    const linkConditional = () => {
        if (boonee) {
            console.log("this");
            return (
                <Link
                    style={{ textDecoration: "none" }}
                    to={{
                        pathname: `/RequestBoon/${user._id}`,
                        state: { user },
                    }}>
                    <Button
                        size='large'
                        color='secondary'
                        variant='contained'
                        className={classes.button}>
                        Request a Boon
                    </Button>
                </Link>
            );
        } else {
            return (
                <Button
                    size='large'
                    color='secondary'
                    variant='contained'
                    className={classes.button}
                    onClick={() => history.push("/login")}>
                    Request a Boon
                </Button>
            );
        }
    };

    return (
        <CssBaseline>
            <Container maxWidth="md">
             <Box className={classes.container} component='div' >
                <Grid container spacing={3}>
                    <Paper className={classes.paper}>
            {/* first name */}
            <Typography variant='h3' color='secondary' className={classes.hero}>
                {firstName}
            </Typography>
            <Divider variant='middle' />

            {/* avatar */}
            <Grid container spacing={2} className={classes.container}>
                <Box component='div'>
                    <Grid className={classes.imgWrapper} item xs={6}>
                        <img
                            src={avatar}
                            alt='avatar'
                            className={classes.image}
                        />
                    </Grid>
                </Box>
                {/* rating */}
                <Box>
                <List className={classes.skills}>
                    <ListItem alignItems='flex-start'>
                        <Typography variant='h5' color='secondary'>
                            Current rating:{" "}
                        </Typography>

                        {/* User Rating =>  */}
                        <ListItemSecondaryAction>
                            <Rating
                                name='size-large'
                                defaultValue={rating}
                                size='large'
                                precision={0.5}
                                readOnly
                            />
                        </ListItemSecondaryAction>
                    </ListItem>

                    {/* skills  */}
                    <ListItem alignItems='flex-start'>
                        <Typography variant='h6' color='primary'>
                            Offered skills:
                        </Typography>
                    </ListItem>
                    {skillsList}
                </List>
                </Box>
            </Grid>

            <div className={classes.root}>
                {/* BIO */}
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Typography variant='p' color='primary'>
                            Bio
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>{bio}</Paper>
                    </Grid>
                </Grid>
                {/* NAME */}
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Typography variant='p' color='primary'>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>{userName}</Paper>
                    </Grid>
                </Grid>
                {/* LOCATION */}

                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Typography variant='p' color='primary'>
                            Location
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <PersonPinIcon className={classes.icon} /> Berlin |
                            10629
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            {/* Last 2 Buttons!  */}

            <Box className={classes.root} textAlign='center' mt={3}>
                <ButtonGroup variant='contained'>
                    <Button
                        component={Link}
                        to='/home'
                        size='large'
                        color='secondary'
                        variant='contained'
                        onClick={() => history.goBack()}
                        className={classes.button}>
                        Go back
                    </Button>
                    {linkConditional()}
                </ButtonGroup>
            </Box>
            </Paper>
            </Grid>
            </Box>
            </Container>
            <Footer/>
        </CssBaseline>
    );
}
