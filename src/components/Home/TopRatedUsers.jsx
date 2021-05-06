import React from "react";
import {Typography, Box, Card, CardActions, Button, Avatar} from "@material-ui/core"
import StarIcon from '@material-ui/icons/Star';
import useStyles from "./styles"
import { useSelector } from "react-redux";

const TopRatedUsers = () => {
    const classes = useStyles();
    
    const users = useSelector((state) => state.usersReducer);
    
    return(
        // TITLE
        <>
        <Box mt={8} display="flex"  alignItems="center">
            <Typography variant="h2" color="primary">Top Rated Booners</Typography>
        </Box>

        {/* CARDS */}
        <Box mt={5} display="flex" textAlign="center" justifyContent="center" alignItems="flex-start">

                {/* SORTING THE 4 BEST USERS AND MAPING THEM */}
                {users.sort((a,b)=>b.rating - a.rating ).slice(0,4).map((user)=> {
                    return(
                    <Card className={classes.userCard} elevation={8} key={user._id} >
                        <Box display="flex" flexDirection="column">
                            <Box m={3}>
                                <Typography variant="h4" color="info">{user.userName}</Typography>
                                <Box display="flex" justifyContent="center" alignItems="center">
                                        <Typography variant="h6" color="info">{user.rating}</Typography>
                                        <StarIcon color="secondary"/>
                                </Box>
                                <Box m={4} display="flex" justifyContent="center"> 
                                    <Avatar alt="Remy Sharp" src="https://picsum.photos/200" className={classes.avatarBooners} />
                                </Box>

                                {/* MAP THROUGHT THE SKILLS */}
                                {user.skills.map((skill) => {
                                    return ( 
                                    <Box display="flex" justifyContent="center" flexDirection="column" pt={1} key={skill.skillID._id}>
                                        <Button size="medium" color="info" variant="outlined" className={classes.tag}>{skill.skillID.name}</Button>
                                    </Box>
                                    );
                                })} 
                            </Box>
                            <CardActions style={{padding:"0"}}>
                                <Button size="large" color="secondary" variant="contained" className={classes.button}>More</Button>
                            </CardActions>
                        </Box>
                    </Card>
                )})
                }) 

        </Box>
        </>
    )
}

export default TopRatedUsers;