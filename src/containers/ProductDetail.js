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
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
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


































        //       <div className="ui placeholder segment">
        //         <div className="ui two column stackable center aligned grid">
        //           <div className="ui vertical divider">
        //             <div className="middle aligned row">
        //               <div className="column lp">
        //                 <img className="ui fluid image" src={image} />
        //               </div>
        //               <div className="column rp">
        //                 <h1>{title}</h1>
        //                 <h2>
        //                   <a className="ui teal tag label">$ {price}</a>
        //                 </h2>
        //                 <h3 className="ui brown block header">{category}</h3>
        //                 <p>{description}</p>
        //                 <div className="ui vertical animated button" tabIndex="0">
        //                   <div className="hidden content">
        //                     <i className="shop icon"></i>
        //                   </div>
        //                   <div className="visible content">Add to Cart</div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
      )}
    </div>
  );
}

export default ProductDetail;