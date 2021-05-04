import React from "react";
import avatar from "./img/avatar.jpg";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Link,
  ListItemAvatar,
  ListItemSecondaryAction,
  Paper,
  Divider,
  Container,
  CssBaseline,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { userLoginAction } from "../../store/actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import Fab from "@material-ui/core/Fab";

import useStyles from "./styles";

const UserProfile = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  console.log("user", user);

  return (
    <CssBaseline>
      <Typography variant="h3" color="secondary" className={classes.hero}>
        {user.firstName}
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={2} className={classes.container}>
        <Box component="div">
          <Grid item xs={6}>
            <img src={avatar} alt="lady" className={classes.image} />
          </Grid>
        </Box>
        <List className={classes.skills}>
          <ListItem alignItems="flex-start">
            <Typography variant="h4" color="secondary">
              Current rating:{" "}
            </Typography>
            <ListItemSecondaryAction>
              <StarIcon color="secondary" />
              <StarIcon color="secondary" />
              <StarIcon color="secondary" />
              <StarIcon color="secondary" />
              <StarIcon color="secondary" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Typography variant="h5" color="primary">
              Skills offered:{" "}
            </Typography>
            <ListItemSecondaryAction>
              <AddIcon color="primary" />
              <MoreHorizIcon color="primary" />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Typography variant="h6" color="primary">
              Add up to 5 skills
            </Typography>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Button size="large" color="primary" variant="outlined">
              Photography <LinkedCameraIcon className={classes.icon} />
            </Button>

            <ListItemSecondaryAction>
              <ListItemText primary={`50 boons per hour`} />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem alignItems="flex-start">
            <Link underline="none" href="/editUser">
              <Button size="large" color="primary" variant="outlined">
                Edit profile
              </Button>
            </Link>
          </ListItem>
        </List>
      </Grid>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="p" color="primary">
              Bio
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              tenetur ullam dignissimos animi veritatis exercitationem ex
              maiores voluptas sit dolore? Repellendus, ipsam harum, perferendis
              eos repellat voluptate voluptas quod mollitia soluta, voluptatum
              expedita temporibus recusandae. Unde architecto blanditiis et sed
              dolorum iure porro earum quis. Modi nisi repellendus labore quo?
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="p" color="primary">
              Name
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Eniko V</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="p" color="primary">
              Location
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <PersonPinIcon className={classes.icon} /> Berlin | 10629
            </Paper>
          </Grid>
        </Grid>
      </div>
    </CssBaseline>
  );
};

export default UserProfile;