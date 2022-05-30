import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUserThunk = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_SERVER}/api/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data === null) {
          console.log("Login failed.");
        } else {
          console.log(res.data);
          localStorage.setItem("CTT", res.data.token);
          dispatch({ type: LOGIN_USER });
        }
      });
  };
};

export const signupUserThunk = (email, password) => {
  return () => {
    axios
      .post(`${process.env.REACT_APP_API_SERVER}/api/auth/signup`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        console.log("all done");
      });
  };
};

export const logoutNowThunk = () => (dispatch) => {
  localStorage.removeItem("CTT");
  dispatch({ type: LOGOUT_USER });
};
