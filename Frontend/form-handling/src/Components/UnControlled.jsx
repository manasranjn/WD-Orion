import React, { useRef } from "react";

const UnControlled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  console.log(nameRef);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    console.log(data);
  };

  return (
    <div>
      <form action="">
        <input type="text" placeholder="Enter Your name" ref={nameRef} />
        <input type="email" placeholder="Enter Your Email" ref={emailRef} />
        <input type="tel" placeholder="Enter Your Phone" ref={phoneRef} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UnControlled;
