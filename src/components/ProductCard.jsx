import React from "react";

import { useNavigate } from "react-router";

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="product__card"
    >
      <div className="ingredient__img">
        <figure>
          <img src={product.image} alt={product.title} />
        </figure>
      </div>
      <div className="ingredient__title">
        <h3>{product.title}</h3>
      </div>
      <div className="ingredient__description">
        <p>{product.category}</p>
        <p>
          <span className="price">${product.price}</span>
        </p>
      </div>
      <div className="ingredient__btn">
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
