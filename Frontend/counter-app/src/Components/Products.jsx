import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Mobile",
      desc: "Smart phone with 4gb ram and 64gb storage",
      price: 20000,
    },
    {
      id: 2,
      name: "Laptop",
      desc: "Laptop with 8gb ram and 1tb storage",
      price: 50000,
    },
    {
      id: 3,
      name: "Tablet",
      desc: "Tablet with 4gb ram and 64gb storage",
      price: 30000,
    },
    {
      id: 4,
      name: "Desktop",
      desc: "Desktop with 8gb ram and 1tb storage",
      price: 50000,
    },
  ];
  return (
    <div>
      {products.map((item, x) => (
        <div key={x} className="box">
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
