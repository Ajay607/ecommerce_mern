import React, { Fragment, useEffect } from "react";
import MetaData from "../MetaData";
import "./Home.css";
import Product from './ProductCard';
import { clearError, getProduct } from '../../../redux/actions/productAction';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Loader from "../loader/Loader";
import { useAlert } from "react-alert";

const product = {
  name: "Blue Tshirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "3000",
  _id: "abishek",
};

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, error, loading, productCount } = useSelector(state => state.product);

  useEffect(() => {
    if(error){
      dispatch(clearError())
  }
    dispatch(getProduct());
  }, [dispatch, error]);

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
              {/* <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} /> */}
              {
                products && products.map((product,id) => (
                  <Product product={product} key={id} />
                ))
              }
            </div>
          </>
      }
    </Fragment>
  );
};

export default Home;
