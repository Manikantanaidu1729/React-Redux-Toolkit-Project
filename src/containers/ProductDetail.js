import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../redux/reducers/selectedProductSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const { image, title, price, category, description } = product;

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log("Err ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [dispatch,productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <h2>...Loading</h2>
      ) : (
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <img src={image} alt={title} className="img-fluid" style={{width : "22em", marginLeft : "4em"}}/>
            </div>
            <div className="col-md-6 d-flex flex-column" style={{marginLeft : "-10em", gap : "2em"}}>
              <h2>{product.title}</h2>
              <h4 className="text-muted">{category}</h4>
              <h3 className="text-primary">${price}</h3>
              <p style={{fontSize : "1.1em"}}>{description}</p>
              <button className="btn btn-primary btn-lg mt-auto">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;