import { configureStore } from "@reduxjs/toolkit";
import { userSignUpReducer, userLoginReducer } from "@/reducers/userReducers";
import { otpVerificationReducer } from "@/reducers/otpReducers";

const store = configureStore({
    reducer: {
        userSignUp: userSignUpReducer,
        userLogin: userLoginReducer,
        otpVerification: otpVerificationReducer,
    }
})

export default store;