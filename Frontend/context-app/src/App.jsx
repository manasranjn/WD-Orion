import React, { createContext } from "react";
import AllStudents from "./Components/AllStudents";

export const studentContext = createContext();

const App = () => {
  return (
    <div>
      <studentContext.Provider
        value={{ name: "Rahul", age: 20, address: "Pune" }}
      >
        <AllStudents />
      </studentContext.Provider>
    </div>
  );
};

export default App;
