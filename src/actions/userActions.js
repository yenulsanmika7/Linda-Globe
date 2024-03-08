import axios from 'axios';

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,   
    USER_LOGOUT, 

    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,

    PROFILE_PIC_UPDATE_REQUEST,
    PROFILE_PIC_UPDATE_SUCCESS,
    PROFILE_PIC_UPDATE_FAIL,

    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,

    GET_USER_DATA_REQUEST,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAIL,
} from '../constants/userTypes';

// eslint-disable-next-line no-undef
const API_URL = import.meta.env.VITE_NODE_BACKEND_URL; 

export const login = async (loginData, dispatch) => {
    dispatch({ loading: true, type: USER_LOGIN_REQUEST })

    const url = `${API_URL}/auth/signIn`;

    axios.post(url, loginData)
        .then(({ data }) => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { 
                    token: data.token,
                    userData: data.user,
                }
            });
            localStorage.setItem("USER-TOKEN", data.token);
        })
        .catch(error => {
            dispatch({
                type: USER_LOGIN_FAIL,
                message: error.message ? error.response : 'Could not login to the website'
            });
        });
}

export const signUp = async (userData, dispatch) => {  
    dispatch({ loading: true, type: USER_SIGNUP_REQUEST });

    const url = `${API_URL}/auth/signUp`;
    
    axios.post(url, userData)
        .then(({ data }) => {            
            dispatch({
                type: USER_SIGNUP_SUCCESS,
                payload: data, 
            });
            return login({ email: userData.email, password: userData.password }, dispatch);
        })
        .catch(error => {
            dispatch({
                type: USER_SIGNUP_FAIL,
                payload: error.response ? error.response.data : 'Could not connect to the website',
            });
        });
}

export const logout = async (dispatch) => {
    localStorage.removeItem("USER-TOKEN");
    dispatch({ type: USER_LOGOUT });
    window.location.reload();
}

// USER UPDATE ACTIONS
export const profilePicUpdate = async (formData, dispatch) => {
    dispatch({ loading: true, type: PROFILE_PIC_UPDATE_REQUEST });

    const url = `${API_URL}/user/uploadProfilePic/profile`;

    await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    })
    .then(({ data }) => {
        dispatch({ 
            type: PROFILE_PIC_UPDATE_SUCCESS,
            payload: {
                message: data.message,
                user: data.user,
            }
        });        
    })
    .catch((error) => {
        dispatch({
            type: PROFILE_PIC_UPDATE_FAIL,
            error: error.response ? error.response.data : 'Could not login to the website',
        })
    })    
}

export const getUserData = async (dispatch) => {
    dispatch({ loading: true, type: GET_USER_DATA_REQUEST })

    const url = `${API_URL}/user/profileData`;
    const secret_token = localStorage.getItem("USER-TOKEN")

    await axios.get(url, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${secret_token}`,
      },
    })
    .then(({ data }) => {
        dispatch({
            type: GET_USER_DATA_SUCCESS,
            payload: data.user
        })
    })
    .catch(error => {
        dispatch({
            type: GET_USER_DATA_FAIL,
            payload: error.response ? error.response.data : 'Could not fetch user data',
        });
        dispatch(logout());
    });
}

export const updateUser = async (updatedData, dispatch) => {
    dispatch({ type: USER_UPDATE_REQUEST });

    const secret_token = localStorage.getItem("USER-TOKEN")
    const url = `${API_URL}/user/updateUser`;

    await axios.put(url, updatedData, {        
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${secret_token}`,
        }
    })
    .then(({ data }) => {
        dispatch({
            type: USER_UPDATE_SUCCESS,
            user: data.payload,
        })
    })
    .catch((error) => {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.message ? error.message : 'Could not update the user',
        })
    })
}