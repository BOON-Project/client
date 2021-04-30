import React, { useEffect, useState } from 'react'
import {Typography, Container, Box, Card, CardContent} from "@material-ui/core"
import CurentlyOffering from "./CurrentlyOffering"
import useStyles from "./styles"
import TopRatedUsers from './TopRatedUsers';
import Search from './Search';
import TopRatedBoons from './TopRatedBoons';
import { getUsers } from '../../helpers/apiCalls';

const Home = () => {
    const classes = useStyles();
    const [users,setUsers] = useState([])

    useEffect(() => {
        console.log('Home is fetching users');
        const getData = async () => {
          let users = await getUsers();
          setUsers(users);
        };
    
        getData();
      }, []);
    
    console.log(users);

    return (
        <Container maxWidth="lg" className={classes.root}>
                {/* DICTIONARY CARD */}
                <Card className={classes.card} elevation={8}>
                    <CardContent>
                        <Box pb={2}>
                            <Typography variant="h2" color="primary">Boon</Typography>
                            <Typography variant="subtitle1">/buːn/</Typography>
                        </Box>
                        <Typography variant="h5" color="info">1. A thing that is helpful or beneficial</Typography>
                        <Typography variant="h5" color="info">2. A favour or request.</Typography>
                    </CardContent>
                </Card>
                <Typography variant="h5" color="info"> We make exchange based economy a reality with our money free exchange platform  </Typography>


                {/* SEARCH */}
                <Search/>

                {/* CURRENTLY OFFERING */}
                <CurentlyOffering/>

                {/* TOP RATED BOONERS */}
                <TopRatedUsers/>

                {/* TOP RATED BOONS */}
                <TopRatedBoons/>
        </Container>
    )
}


export default Home
