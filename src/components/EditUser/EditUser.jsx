import React, { useState } from "react";
import { useGeolocation } from "react-use";
import {
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from "@material-ui/core";

import MyLocationIcon from "@material-ui/icons/MyLocation";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

import Rating from "@material-ui/lab/Rating";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useForm, Controller } from "react-hook-form";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { editUserAction } from "../../store/actions/userActions";
import { editUser } from "../../helpers/apiCalls";
import {
    hideErrorAction,
    setErrorAction,
} from "../../store/actions/errorActions";
import { setUserInStorage } from "../../helpers/localStorage";
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay";
import Footer from "../Footer/Footer";

const EditUser = () => {
    const user = useSelector((state) => state.userReducer.user);

    const classes = useStyles();

    const [avatarPreview, setAvatarPreview] = useState(user.avatar);

    const geoLocation = useGeolocation();
    console.log("====================================");
    console.log(geoLocation);
    console.log("====================================");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const history = useHistory();

    const dispatch = useDispatch();

    const onAvatarChange = (e) => {
        let fileSelected = e.target.files[0]; // grab selected file

        if (!fileSelected) return;

        let fileReader = new FileReader();
        fileReader.readAsDataURL(fileSelected); // concert to base64 encoded string
        // wait until file is fully loaded / converted to base64
        fileReader.onloadend = (ev) => {
            console.log(fileReader.result);
            // load base64 into preview img tag
            setAvatarPreview(fileReader.result);
        };
    };
    const onEditSKills = () => {};

    const onShareLocation = (e) => {
        if (e.target.checked) {
            user.location.latitude = geoLocation.latitude;
            user.location.longitude = geoLocation.longitude;
        }
    };

    const onSubmitForm = async (data) => {
        data.location = {
            latitude: geoLocation.latitude,
            longitude: geoLocation.longitude,
        };

        // data.location = geoLocation.longitude;
        data.avatar = avatarPreview;
        let result = await editUser(user._id, data);

        // handle error case
        if (result.error) {
            console.log(result.error);
            dispatch(setErrorAction(result.error));
            dispatch(hideErrorAction());
            return errors;
        }
        // merge avatar file with data

        setUserInStorage(result);
        dispatch(editUserAction(result));
    };
    // const displayBD = user.birthday.slice(0, 10);
    /**
     * @todo modify Birthday format
     * @body we should take care of the format(The specified value "2003-04-30T00:00:00.000Z" does not conform to the required format, "yyyy-MM-dd")
     */

    return (
        <CssBaseline>
            <ErrorDisplay />
            <Container component='main' maxWidth='md'>
                <Grid container spacing={3}>
                    <Paper className={classes.paper}>
                        <Typography
                            component='h1'
                            color='primary'
                            variant='h3'
                            mt='2'>
                            My Booner Profile
                        </Typography>
                        {/* form */}
                        <form
                            className={classes.form}
                            noValidate
                            autoComplete='off'
                            onSubmit={handleSubmit(onSubmitForm)}>
                            {/* Avatar input */}
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <label
                                        className={classes.imgWrapper}
                                        htmlFor='avatar'
                                        display='flex'>
                                        <img
                                            className={classes.avatar}
                                            width='70%'
                                            src={user.avatar}
                                            alt='avatar'
                                            label='image'
                                        />
                                    </label>
                                </Grid>
                                {/* Skills */}
                                <Grid item xs={12} sm={6}>
                                    <List className={classes.skills}>
                                        {" "}
                                        <ListItem alignItems='flex-start'>
                                            {" "}
                                            <Typography
                                                variant='h5'
                                                color='secondary'>
                                                {" "}
                                                Current rating:{" "}
                                            </Typography>{" "}
                                            <ListItemSecondaryAction>
                                                <Rating
                                                    name='size-medium'
                                                    defaultValue={user.rating}
                                                    size='large'
                                                    precision={0.5}
                                                    readOnly
                                                />
                                            </ListItemSecondaryAction>
                                        </ListItem>{" "}
                                        <ListItem alignItems='flex-start'>
                                            {" "}
                                            <Typography
                                                variant='h6'
                                                color='primary'>
                                                {" "}
                                                Add up to 5 skills
                                                <IconButton
                                                    onCLick={onEditSKills}>
                                                    <MoreHorizIcon />
                                                </IconButton>
                                            </Typography>{" "}
                                        </ListItem>{" "}
                                        {user.skills &&
                                            user.skills.map((skill) => {
                                                return (
                                                    <ListItem alignItems='flex-start'>
                                                        {" "}
                                                        <Button
                                                            size='large'
                                                            color='primary'
                                                            variant='outlined'>
                                                            {skill.skillID.name}
                                                        </Button>
                                                        <ListItemSecondaryAction>
                                                            <ListItemText
                                                                primary={`${skill.boons} boons per hour`}
                                                            />
                                                        </ListItemSecondaryAction>
                                                    </ListItem>
                                                );
                                            })}
                                    </List>
                                </Grid>
                                {/* first name input! */}
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name='firstName'
                                        control={control}
                                        defaultValue={user.firstName}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                        }) => (
                                            <TextField
                                                autoComplete='firstName'
                                                name='firstName'
                                                fullWidth
                                                id='firstName'
                                                label='First Name'
                                                autoFocus
                                                onChange={onChange}
                                                error={!!error}
                                                value={value}
                                                helperText={
                                                    error ? error.message : null
                                                }
                                            />
                                        )}
                                    />
                                </Grid>
                                {/* last name input!  */}
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name='lastName'
                                        control={control}
                                        defaultValue={user.lastName}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                        }) => (
                                            <TextField
                                                label='Last Name'
                                                autoComplete='lastName'
                                                name='lastName'
                                                fullWidth
                                                id='lastName'
                                                onChange={onChange}
                                                value={value}
                                                error={!!error}
                                                helperText={
                                                    error ? error.message : null
                                                }
                                            />
                                        )}
                                    />
                                </Grid>
                                {/* second row! */}
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name='userName'
                                        control={control}
                                        defaultValue={user.userName}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                        }) => (
                                            <TextField
                                                autoComplete='userName'
                                                name='userName'
                                                fullWidth
                                                id='userName'
                                                label='Username'
                                                onChange={onChange}
                                                value={value}
                                                error={!!error}
                                                helperText={
                                                    error ? error.message : null
                                                }
                                            />
                                        )}
                                    />
                                    <Controller
                                        name='password'
                                        control={control}
                                        defaultValue=''
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                        }) => (
                                            <TextField
                                                label='Password'
                                                margin='normal'
                                                type='password'
                                                fullWidth
                                                id='password'
                                                value={value}
                                                onChange={onChange}
                                                error={!!error}
                                                helperText={
                                                    error ? error.message : null
                                                }
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name='birthday'
                                        control={control}
                                        defaultValue={user.BDay}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                        }) => (
                                            <TextField
                                                name='birthday'
                                                type='date'
                                                fullWidth
                                                id='birthday'
                                                label='Birthday'
                                                autoComplete='Birthday'
                                                onChange={onChange}
                                                value={value}
                                                helperText={
                                                    error ? error.message : null
                                                }
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                {/* 3rd row! */}
                                <Grid item xs={12}>
                                    <Controller
                                        name='email'
                                        control={control}
                                        defaultValue={user.email}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                        }) => (
                                            <TextField
                                                fullWidth
                                                id='email'
                                                label='Email Address'
                                                name='email'
                                                autoComplete='email'
                                                onChange={onChange}
                                                value={value}
                                                error={!!error}
                                                helperText={
                                                    error ? error.message : null
                                                }
                                            />
                                        )}
                                    />
                                </Grid>
                                {/* 4th row! */}
                                <Grid item xs={12}>
                                    <Controller
                                        name='bio'
                                        control={control}
                                        defaultValue={user.bio}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                        }) => (
                                            <TextField
                                                fullWidth
                                                id='bio'
                                                label='Bio'
                                                name='bio'
                                                multiline
                                                rows={4}
                                                autoComplete='bio'
                                                onChange={onChange}
                                                value={value}
                                                error={!!error}
                                                helperText={
                                                    error ? error.message : null
                                                }
                                            />
                                        )}
                                    />
                                </Grid>
                                {/* File Input */}
                                <Grid item xs={12}>
                                    <Box className={classes.buttonsBox}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    icon={
                                                        <LocationSearchingIcon />
                                                    }
                                                    checkedIcon={
                                                        <MyLocationIcon />
                                                    }
                                                    onChange={onShareLocation}
                                                />
                                            }
                                            label='Share location'
                                        />
                                        <Button
                                            onClick={() => history.push("/")}
                                            variant='outlined'>
                                            Go Back
                                        </Button>
                                        <Button
                                            type='submit'
                                            variant='outlined'>
                                            Save changes
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box display='none'>
                                <input
                                    className={classes.input}
                                    accept='image/*'
                                    type='file'
                                    id='avatar'
                                    name='avatar'
                                    onChange={onAvatarChange}
                                />
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Container>
            <Footer />
        </CssBaseline>
    );
};

export default EditUser;
