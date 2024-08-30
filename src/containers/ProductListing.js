import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/reducers/productSlice";

const ProductListing = () => {
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   if (products.length === 0) {
  //     const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
  //       console.log("Err :", err);
  //     });
  //     dispatch(setProducts(response.data));
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts();
  // },[products, dispatch]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      if (products.length === 0) {
        const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
          console.log("Err :", err);
        });
        dispatch(setProducts(response.data));
      }
    };

    fetchProducts();
  }, [products, dispatch]);

  return (
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  );
}

export default ProductListing;