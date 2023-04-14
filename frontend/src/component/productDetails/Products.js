import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProduct } from '../../redux/actions/productAction';
import Loader from '../layout/loader/Loader';
import ProductCard from '../layout/home/ProductCard';
import "./Products.css";
import { useParams } from "react-router-dom";
import ReactPaginate from 'react-paginate'; 

const Products = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const { keyword } = useParams();

  const { products, loading, productsCount, error, resultPerPage } = useSelector(
    (state) => state.product
  )


  // console.log("produccccccccccc", products, "loading", loading, "error", error, "count", productsCount)

  useEffect(() => {
    dispatch(getProduct(keyword,currentItems))
  }, [dispatch])

  const handlePageClick = (event) => {
    console.log("hhhhhhhhh",event)
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {
        loading ? <Loader /> :
 
        
          <div className='productWrapper'>
          { console.log("productsCount", products)}
            <h1>Products</h1>
            <div className='products'>
              {
                products && products.map((product) => {
                  console.log("ppppppppppppp", product)
                  return (<ProductCard key={product.id} product={product} />)
                })
              }
            </div>
            <div className='paginationWrapper'>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={resultPerPage}
                pageCount={productsCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
      }
    </>
  )
}

export default Products;