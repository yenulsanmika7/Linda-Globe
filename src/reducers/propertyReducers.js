import {
    PROPERTY_CREATE_REQUEST,
    PROPERTY_CREATE_SUCCESS,
    PROPERTY_CREATE_FAIL,

    PROPERTY_DELETE_REQUEST,
    PROPERTY_DELETE_FAIL,
    PROPERTY_DELETE_SUCCESS,

    ALL_PROPERTIES_REQUEST,
    ALL_PROPERTIES_SUCCESS,
    ALL_PROPERTIES_FAIL,
    
    SEARCH_PROPERTIES_REQUEST,
    SEARCH_PROPERTIES_SUCCESS,
    SEARCH_PROPERTIES_FAIL,

    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_SUCCESS,
    PROPERTY_DETAILS_FAIL,
} from '../constants/propertyTypes';

export const propertyCreateReducer = (state={ error: null, property: {}, loading: false }, action) => {
    switch (action.type) {
        case PROPERTY_CREATE_REQUEST:
            return {
                ...state,
                loading: true, 
                error: null,               
            }
        case PROPERTY_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                property: action.payload,
            }
        case PROPERTY_CREATE_FAIL:
            return { 
                ...state,
                loading: false, 
                error: action.payload 
            }
        default:
            return state;
    }
}

export const propertyDetailsReducer = (state={ error: null, property: {}, loading: false }, action) => {
    switch (action.type) {
        case PROPERTY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true, 
                error: null,               
            }
        case PROPERTY_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                property: action.payload,
            }
        case PROPERTY_DETAILS_FAIL:
            return { 
                ...state,
                loading: false, 
                error: action.payload 
            }
        default:
            return state;
    }
}

export const propertyDeleteReducer = (state={ error: null, loading: false }, action) => {
    switch (action.type) {
        case PROPERTY_DELETE_REQUEST:
            return {
                ...state,
                loading: true, 
                error: null,               
            }
        case PROPERTY_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                message: action.payload,
            }
        case PROPERTY_DELETE_FAIL:
            return { 
                ...state,
                loading: false, 
                error: action.payload 
            }
        default:
            return state;
    }
}

export const allPropertiesReducer = (state={ error: null, properties: [], loading: false }, action) => {
    switch (action.type) {
        case ALL_PROPERTIES_REQUEST:
            return {
                ...state,
                loading: true, 
                error: null,               
            }
        case ALL_PROPERTIES_SUCCESS:
            console.log('Property action', action);
            return {
                ...state,
                loading: false,
                properties: action.properties,
            }
        case ALL_PROPERTIES_FAIL:
            return { 
                ...state,
                loading: false, 
                error: action.payload 
            }
        default:
            return state;
    }
}

export const searchPropertiesReducer = (state={ error: null, properties: [], loading: false }, action) => {
    switch (action.type) {
        case SEARCH_PROPERTIES_REQUEST:
            return {
                ...state,
                loading: true, 
                error: null,               
            }
        case SEARCH_PROPERTIES_SUCCESS:
            return {
                ...state,
                loading: false,
                properties: action.properties,
            }
        case SEARCH_PROPERTIES_FAIL:
            return { 
                ...state,
                loading: false, 
                error: action.payload 
            }
        default:
            return state;
    }
}