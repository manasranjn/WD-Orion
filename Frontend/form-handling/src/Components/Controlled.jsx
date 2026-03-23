import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // console.log(name, email, phone);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
    };

    console.log("Form submitted");
    console.log(data);
  };

  return (
    <div>
      <h1>Controlled Form Handling</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Controlled;
