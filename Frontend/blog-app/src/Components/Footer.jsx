import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="text-center bg-[#30364F] text-white p-4">
      <p>{date} - Copyright &copy; | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
