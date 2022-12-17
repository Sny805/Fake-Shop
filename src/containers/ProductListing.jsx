import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from "../redux/actions/productActions"

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch((err) => { console.log("err", err) });
    dispatch(setProduct(response.data));
    // console.log("API data is",response.data);

  }
  useEffect(() => {
    fetchProducts();
  }, [])
  // console.log("Products :", products)
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing