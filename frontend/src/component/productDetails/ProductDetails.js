import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import { useParams } from "react-router-dom";


const ProductDetails = ({ match }) => {
    const dispatch = useDispatch();
    const { id } = useParams(); 


    const { product, loading, error } = useSelector(
        (state) => state.productDetails
    )

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])

    return (
        <div className='productDetails'>
            <div className='imageWrapper'>

            </div>
            <div className='contentWrapper'>

            </div>
        </div>
    )
}

export default ProductDetails;