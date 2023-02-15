import axios from "axios";

import {
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_REQUEST,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstants";

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST })
        const { data } = await axios.get("http://localhost:4000/api/v1/products");

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    console.log("data_____out")
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        console.log("data_____dispatch_before")
        const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
        console.log("data______dispatch_after", data)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearError = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
}