import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProduct } from "../../redux/actions/productAction";
import Loader from "../layout/loader/Loader";
import ProductCard from "../layout/home/ProductCard";
import "./Products.css";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Products = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const { keyword } = useParams;

  const { products, loading, productsCount, error, resultPerPage } =
    useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage));
  }, [currentPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    setCurrentPage(newOffset);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="productWrapper">
          <h1>Products</h1>
          <div className="products">
            {products &&
              products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
          {productsCount > 0 && (
            <div className="paginationWrapper">
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(productsCount / resultPerPage)}
                previousLabel="< prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                disableInitialCallback={true}
                forcePage={currentPage - 1}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Products;
