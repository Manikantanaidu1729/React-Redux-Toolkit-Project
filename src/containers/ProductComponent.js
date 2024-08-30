import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector(state => state.allProducts.products);
  const renderList = products.map(product => {
    const { id, title, image, price, category } = product;
    return (
        <div className="card" style={{ width: "19em", height: "32em", display: "flex" }} key={id}>
          <Link to={`/product/${id}`}>
            <img src={image} className="card-img-top" alt={title} style={{ width: "15em", height: "17em", marginTop: "2em", marginBottom: "2em" }} />
            <div className="card-body text-decoration-none">
              <h6 className="card-title">{title}</h6>
              <h6 className="card-text">$ {price}</h6>
              <div className="card-text">{category}</div>
            </div>
          </Link>
        </div>
    )
  })

  return (
    <>
      {renderList}
    </>

  );
}

export default ProductComponent;