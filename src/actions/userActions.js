import axios from 'axios';

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,    
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL
} from '../constants/userTypes';

export const login = async (loginData, dispatch) => {
    dispatch({ loading: true, type: USER_LOGIN_REQUEST })

    const url = 'http://localhost:3500/signIn';

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
                payload: error.response ? error.response.data : 'Could not login to the website'
            });
        });
}

export const signUp = async (userData, dispatch) => {  
    dispatch({ loading: true, type: USER_SIGNUP_REQUEST });

    const url = 'http://localhost:3500/signUp';
    
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