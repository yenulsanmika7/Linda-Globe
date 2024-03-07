import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import filterSlice from "../features/filter/filterSlice";
import propertiesSlice from "../features/properties/propertiesSlice";

import { configureStore } from "@reduxjs/toolkit";
import { userSignUpReducer, userLoginReducer } from "@/reducers/userReducers";
import { otpVerificationReducer } from "@/reducers/otpReducers";
import { propertyCreateReducer, allPropertiesReducer, propertyDeleteReducer } from "@/reducers/propertyReducers";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        properties: propertiesSlice,
        filter: filterSlice,
        agent: agentSlice,

        userSignUp: userSignUpReducer,
        userLogin: userLoginReducer,
        otpVerification: otpVerificationReducer,

        allProperties: allPropertiesReducer,  
        propertyCreate: propertyCreateReducer,        
        propertyDelete: propertyDeleteReducer,      
    }
})

export default store;