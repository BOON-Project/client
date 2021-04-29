import axios from "axios";


// axios.defaults.withCredentials = true;


// get records from API endpoint

export const helpFetchRecords = () =>
  axios.get("http://localhost:5000/records");

// signup user

export const helpAddUser = (formData) =>
  axios.post("http://localhost:5000/user", formData);

// login user authentication

export const helpCheckUser = (formData) =>
  axios.post("http://localhost:5000/user/login", formData);

// logout user

export const helpCheckoutUser = () =>
  axios.get("http://localhost:5000/users/logout");

// edit user data

export const helpEditUser = (userId, updatedUser) =>
  axios.patch(`http://localhost:5000/users/${userId}`, updatedUser);