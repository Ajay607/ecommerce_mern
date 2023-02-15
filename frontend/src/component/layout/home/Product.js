import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import "./Home.css"

const options={
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 20,
    value: 2.5,
    isHalf: true
}

const Product = ({ product }) => {
    // console.log("product", product)
    return (
        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name}  />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} /> <span>(256 Reviews)</span>
            </div>
            <span>{product.price}</span>
        </Link>
    )
}

export default Product