import React from "react";
import useStyles from "./styles";
import {
    AppBar,
    Container,
    Grid,
    Toolbar,
    Typography,
    Link
} from "@material-ui/core";

const Footer = () => {
    const classes = useStyles();

    // FUNCTION COPYRIGHT
    function Copyright() {
        return (
            <Typography variant='body2' color='inherit' align='center'>
                {"Copyright © "}
                <Link
                    s
                    href='/'
                    style={{ color: "inherit", textDecoration: "none" }}>
                    Boon
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        );
    }

    return (
        <AppBar className={classes.footer} color='primary'>
            <Container className={classes.container} align='center'>
                <Toolbar align='center'>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography align='center' color='inherit'>
                                <Copyright />
                            </Typography>
                            <Typography>
                                <a
                                    href='https://icons8.com/icon/JoAq-WcWdsp8/jake'
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}>
                                    Jake icon by Icons8
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;
