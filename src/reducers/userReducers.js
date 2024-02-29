import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    // USER_LOGOUT,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL
} from '../constants/userTypes';

const initialState = {
    error: null,
    user: null,
};

export const userSignUpReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return {
                loading: true,
            };
        
        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            };
        case USER_SIGNUP_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const userLoginReducer = (state=initialState, action) =>  {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,                
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state, 
                loading: false,
                userToken: action.payload.token, 
                user: action.payload.userData, 
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}