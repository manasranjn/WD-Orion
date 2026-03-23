import React, { useState, useEffect } from "react";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    console.log(data.products);
    setAllProducts(data.products);
  };

  //   getAllPRoducts();
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {allProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h5>{product.category}</h5>
            <p>{product.price}</p>
            <img src={product.images[0]} alt="" height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
