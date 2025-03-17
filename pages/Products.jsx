import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../src/contexts/ProductContext";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const { fetchProducts, products } = useContext(productContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            style={{
              padding: "1rem",
              margin: "1rem",
              border: "1px, solid",
            }}
          >
            <div
              style={{
                height: "200px",
              }}
            >
              <img
                src={product.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <h2>{product.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
