import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import filterSlice from "../features/filter/filterSlice";
import propertiesSlice from "../features/properties/propertiesSlice";

import { configureStore } from "@reduxjs/toolkit";
import { userSignUpReducer, userLoginReducer, updateUserReducer } from "@/reducers/userReducers";
import { otpVerificationReducer } from "@/reducers/otpReducers";
import { propertyCreateReducer, allPropertiesReducer, propertyDetailsReducer, propertyDeleteReducer, searchPropertiesReducer } from "@/reducers/propertyReducers";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        properties: propertiesSlice,
        filter: filterSlice,
        agent: agentSlice,

        userSignUp: userSignUpReducer,
        userLogin: userLoginReducer,
        otpVerification: otpVerificationReducer,  
        userUpdate: updateUserReducer,

        allProperties: allPropertiesReducer,  
        searchProperty: searchPropertiesReducer,
        getProperty: propertyDetailsReducer,
        propertyCreate: propertyCreateReducer,        
        propertyDelete: propertyDeleteReducer,    
    }
})

export default store;