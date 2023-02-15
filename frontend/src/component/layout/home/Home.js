import React, { Fragment, useEffect } from 'react';
import MetaData from '../MetaData';
import "./Home.css";
import Product from './Product';
import { getProduct } from '../../../actions/productAction';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import Loader from "../loader/Loader";
import { useAlert } from "react-alert";

const product = {
  name: "Blue Tshirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "3000",
  _id: "abishek"
}

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, error, loading, productCount } = useSelector(state => state.product);
  console.log("___error___", error, "___loading___", loading);
  console.log("data_home", products)

  useEffect(() => {
    if(error){
      return alert.error(error)
    }
    dispatch(getProduct());
  }, [dispatch, error])

  axios.get('http://localhost:4000/api/v1/products')
    .then((response) => {
      console.log("rrrrrrrrrrrrr__________", response);
    }).catch(error)

  axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
      console.log("rrrrrrrrrrrrr", response);
    })
    .catch(error => {
      console.log("rrrrrrrreeee", error)
    })

  return (
    // loading is still pending
    <Fragment>
      {
        loading ?
          <Loader /> : <>
            <MetaData title="Ecommerce" />
            <div className='banner'>
              <p>Welcome to Ecommerce</p>
              <h1>Find Amazing products below</h1>
              <a href="#container">
                <button>
                  scroll <i class="fa fa-mouse-pointer" aria-hidden="true"></i>
                </button>
              </a>
            </div>
            <h2 className='home-heading'>Featured products</h2>
            <div className='container' id='container'>
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              {/* {
                products && products.map((product) => (
                  <Product product={product} />
                ))
              } */}
            </div>
          </>
      }
    </Fragment>
  )
}

export default Home