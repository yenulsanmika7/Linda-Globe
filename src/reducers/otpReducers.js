import {
    OTP_CODE_REQUEST,
    OTP_CODE_SUCCESS,
    OTP_CODE_FAIL,
} from '../constants/otpTypes';

const initialState = {
    message: '',
    error: null,
}

export const otpVerificationReducer = (state=initialState, action) => {
    switch (action.type) {
        case OTP_CODE_REQUEST:
            return {
                message: '',
                error: null
            }
        case OTP_CODE_SUCCESS:
            return {
                ...state,
                message: action.message,
                error: null,
            };
        case OTP_CODE_FAIL:
            return {
                ...state,
                message: '',
                error: action.error,
            };
        default:
            return state;
    }
}