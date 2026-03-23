import React, { useContext } from "react";
import { studentContext } from "../App";

const PersonalDetails = () => {
  const data = useContext(studentContext);
  return (
    <div>
      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
      <h2>Address: {data.address}</h2>
    </div>
  );
};

export default PersonalDetails;
