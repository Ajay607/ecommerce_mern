import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  getProductDetails,
} from "../../redux/actions/productAction";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./productDetails.css";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
// alert is pending 6:33

const ProductDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();

  const { product, Loading, error } = useSelector(
    (state) => state.productDetails
  );

  const er = useSelector((state) => state.productDetails);



  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <div className="productDetails">
            <div className="imageWrapper">
              <Carousel>
                <div>
                  <img
                    className="image"
                    src="https://fastly.picsum.photos/id/894/200/200.jpg?hmac=h3PvihhxRrUznPuW-OPbq7zxa0On5jLsyYbWwI6nW6w"
                  />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img
                    className="image"
                    src="https://fastly.picsum.photos/id/894/200/200.jpg?hmac=h3PvihhxRrUznPuW-OPbq7zxa0On5jLsyYbWwI6nW6w"
                  />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img
                    className="image"
                    src="https://fastly.picsum.photos/id/894/200/200.jpg?hmac=h3PvihhxRrUznPuW-OPbq7zxa0On5jLsyYbWwI6nW6w"
                  />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </div>
            <div className="contentWrapper">
              <div className="detailsBlock-1">
                {/* <h2>product name</h2> */}
                <h2>{product?.product?.name}</h2>
                {/* <p>Product #</p> */}
                <p>Product #{product?.id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars />
                {/* <span>Reviews</span> */}
                <span>({product.numOfReviews}Reviews)</span>
              </div>
              <div className="detailsBlock-3">
                {/* <h1>price</h1> */}
                <h1>{`R ${product?.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input value="1" type="number" />
                    <button>+</button>
                  </div>
                  <button>Add to Cart</button>
                </div>
                <p className="stockwrapper">
                  <b className={product.stock < 1 ? "redcolor" : "greencolor"}>
                    {product.stock < 1 ? "outOfStock" : null}
                  </b>
                  <b>outOfStock</b>
                </p>
              </div>
              <div className="details-block-4">
                Description
                {product?.description}
              </div>
              <button className="submitReview">Submit Review</button>
            </div>
          </div>
          <h3 className="reviewsHeading">Reviews Heading</h3>
          {/* {
    product.reviews && product.reviews[0] ? (
        <div className='reviews'>
            {
                product.reviews.map((review) => <ReviewCard review={review} />)
            }
        </div>
    ) : (
        <p className='noReviews'>No Reviews Yet</p>
    )
} */}
          {/* <ReviewCard /> */}
        </>
      )}
    </>
  );
};

export default ProductDetails;
