import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styles/product.css";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <h4>{product.category}</h4>
          <h1>{product.title}</h1>
          <p>Rating {product.rating && product.rating.rate}</p>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <div id="btn">
            <button className="btn">Add to Cart</button>
            <Link to="/cart" className="button">
              Go to Cart
            </Link>
          </div>
        </div>
      </>
    );
  };
  return <div id="Container">{loading ? <Loading /> : <ShowProduct />}</div>;
};

export default Product;
