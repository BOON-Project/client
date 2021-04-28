import React from "react";
import avatar from "./img/avatar.jpg";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Paper,
  Divider,
  Container,
  CssBaseline,
  Grid,
  Button,
} from "@material-ui/core";
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PersonPinIcon from "@material-ui/icons/PersonPin";

import useStyles from "./styles";

const UserProfile = () => {
  const classes = useStyles();
  return (
    <CssBaseline>
      <Typography variant="h3" color="secondary" className={classes.hero}>
        Eniko
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
        </List>
      </Grid>

      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="p">Bio</Typography>
          </Grid>
          <Grid item xs>
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
            <Typography variant="p">Name</Typography>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Eniko V</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="p">Location</Typography>
          </Grid>
          <Grid item xs>
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