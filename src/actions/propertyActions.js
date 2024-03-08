import axios from 'axios';

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

const API_URL = import.meta.env.VITE_NODE_BACKEND_URL; 

export const createProperty = async (formData, dispatch, navigate) => {
    dispatch({ loading: true, type: PROPERTY_CREATE_REQUEST  })

    const url = `${API_URL}/property/createProperty/property`

    await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form/data',
        }
    })
    .then(({ data }) => {
        dispatch({
            type: PROPERTY_CREATE_SUCCESS,
            success: true,
            message: data.message,
        });
        navigate('/my-properties');
    })
    .catch((error) => {
        dispatch({
            type: PROPERTY_CREATE_FAIL,
            error: error.response ? error.response.data : 'Could not create the property',
        })
    })
}

export const getPropertyDetails = async (id, dispatch) => {
    console.log("Getting property details!")
    dispatch({ loading: true, type: PROPERTY_DETAILS_REQUEST  })

    const url = `${API_URL}/property/${id}`

    await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(({ data }) => {
        dispatch({
            type: PROPERTY_DETAILS_SUCCESS,
            payload: data.payload,
        });
    })
    .catch((error) => {
        dispatch({
            type: PROPERTY_DETAILS_FAIL,
            error: error.message ? error.message : 'Could not get property details',
        })
    })
}

export const deleteProperty = async (itemId, email, dispatch) => {
    dispatch({ loading: true, type: PROPERTY_DELETE_REQUEST})

    const url = `${API_URL}/property/deleteProperty`

    let deleteItemData = {
        id: itemId,
        email: email,
    }
    deleteItemData = JSON.stringify(deleteItemData);
    
    await axios.delete(url, {
        data: deleteItemData,
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(({ data }) => {
        dispatch({
            type: PROPERTY_DELETE_SUCCESS,
            success: true,
            message: data.message,
        })
    })
    .catch((error) => {
        dispatch({
            type: PROPERTY_DELETE_FAIL,
            error: error.response ? error.response.data : 'Could not delete the property by given id',
        })
    })

}

export const allProperties = async (dispatch) => {
    dispatch({ loading: true, type: ALL_PROPERTIES_REQUEST  })
    
    const url = `${API_URL}/property/all`

    await axios.get(url)
    .then(({ data }) => {
        dispatch({
            type: ALL_PROPERTIES_SUCCESS,
            properties: data.payload,
        })
    })
    .catch((error) => {
        dispatch({
            type: ALL_PROPERTIES_FAIL,
            error: error.response ? error.response.data : 'Could not fetch property data',
        })
    })
}

export const searchProperties = async (keyword, dispatch) => {
    dispatch({ loading: true, type: SEARCH_PROPERTIES_REQUEST  })
    
    const url = `${API_URL}/property/search/${keyword}`

    await axios.get(url, {
        headers: {
            'Content-Type': 'application/json', 
        }
    })
    .then(({ data }) => {
        dispatch({
            type: SEARCH_PROPERTIES_SUCCESS,
            properties: data.payload,
        })
    })
    .catch((error) => {
        dispatch({
            type: SEARCH_PROPERTIES_FAIL,
            error: error.message ? error.message : 'Could not fetch search property data',
        })
    })
}
