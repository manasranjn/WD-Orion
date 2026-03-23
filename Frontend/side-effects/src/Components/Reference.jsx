import React, { useRef } from "react";

const Reference = () => {
  const headingRef = useRef();
  console.log(headingRef);

  const handleClick = () => {
    // console.log(headingRef.current);
    headingRef.current.style.color = "red";
    headingRef.current.style.fontSize = "50px";
    headingRef.current.style.textAlign = "center";
    headingRef.current.innerText = "Hello";
  };

  return (
    <div>
      <h1 ref={headingRef}>Reference</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Reference;
