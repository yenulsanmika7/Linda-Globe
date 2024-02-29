import axios from 'axios';

import {
    OTP_CODE_REQUEST,
    OTP_CODE_SUCCESS,
    OTP_CODE_FAIL
} from '../constants/otpTypes';

export const otpVerifiy = (email, dispatch) => {
    dispatch({ loading: true, type: OTP_CODE_REQUEST });

    const url = 'http://localhost:3500/sendOTP';

    return axios.post(url, email) 
        .then(({ data }) => {
            dispatch({
                type: OTP_CODE_SUCCESS,
                message: data
            });
            return data; 
        })
        .catch((error) => {
            dispatch({
                type: OTP_CODE_FAIL,
                error: error.response ? error.response.data : "OTP didn't send correctly!",
            });
            throw error; 
        });
}
