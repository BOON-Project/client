import axios from "axios";
axios.defaults.baseURL =
  process.env.REACT_APP_API_BASE_URL || `http://localhost:5000`;

const extractApiError = (errAxios) => {
  return errAxios.response
    ? errAxios.response.data
    : { error: { message: "API not reachable" } };
};

// get users
export const getUsers = async () => {
  console.log(`im fetching the users`);
  try {
    const response = await axios.get(`/user`);
    return response;
  } catch (err) {
    return extractApiError(err);
  }
};

// GET SKILLS
export const getSkills = async () => {
  console.log(`im fetching the skills`);
  try {
    const response = await axios.get(`/skill`);
    return response;
  } catch (err) {
    return extractApiError(err);
  }
};

// GET TASKS
export const getTasks = async () => {
	console.log(`im fetching the tasks`);
	try {
		const response = await axios.get(`/task`);
		return response;
	} catch (err) {
		return extractApiError(err);
	}
};

// signup user

export const signupUser = async (formData) => {
  try {
    const response = await axios.post("http://localhost:5000/user", formData);
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// login user authentication

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/user/login",
      formData
    );

    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};


// edit user data (PRIVATE ROUTE, only user can be there & modify)

export const editUser = async (userId, updatedUser) =>{
	try {
		const response = axios.patch(
		`http://localhost:5000/user/${userId}`,
		updatedUser
		);
		return response;
	} catch (err) {
		return extractApiError(err);
	}
}

//user profile (publiccccccccc)

export const userProfile = async (userId)=>{
	try {
		const response = axios.get(
		`http://localhost:5000/user/${userId}`,
		userProfile
		);
		return response.data;
	} catch (err) {
		return extractApiError(err);
	}

}
