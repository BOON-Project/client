import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER, EDIT_USER } from "./types";

export const signupAction = (formData) => async (dispatch) => {
    dispatch({
        type: SIGNUP_USER,
        payload: formData,
    });
};

export const loginAction = (userData) => async (dispatch) => {
    // console.log(userData);
    dispatch({
        type: LOGIN_USER,
        payload: userData,
    });
};

export const editUserAction = (user) => async (dispatch) => {
    dispatch({
        type: EDIT_USER,
        payload: user,
    });
};

//   export const editUserAction = (formData) => async (dispatch, getState) => {
//     const userId = getState().user.user._id;

//     const response = await helpEditUser(userId, formData);
//     console.log("formData from Action");
//     dispatch({
//       type: EDIT_USER,
//       payload: response.data,
//     });
//   };

export const logoutAction = () => {
    // const response = await helpCheckoutUser();

    return {
        type: LOGOUT_USER,
    };
};
