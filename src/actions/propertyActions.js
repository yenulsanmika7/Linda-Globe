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
            type: PROPERTY_DELETE_SUCCESS,
            success: true,
            message: data.message,
        });
        navigate('/my-properties');
    })
    .catch((error) => {
        dispatch({
            type: PROPERTY_CREATE_FAIL,
            error: error.response ? error.response.data : 'Could not login to the website',
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
            type: PROPERTY_CREATE_SUCCESS,
            success: true,
            message: data.message,
        })
    })
    .catch((error) => {
        dispatch({
            type: PROPERTY_DELETE_FAIL,
            error: error.response ? error.response.data : 'Could not login to the website',
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
            error: error.response ? error.response.data : 'Could not fetch user data',
        })
    })
}
