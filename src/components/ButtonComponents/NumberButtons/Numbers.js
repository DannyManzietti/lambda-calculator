import React from "react";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data";
const Numbers = (props) => {
  // STEP 2 - add the imported data to state


  return (
    <div className="numberContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map((item) => (<NumberButton value={item} key={item} changeMemory={props.changeMemory} />))}
    </div>
  );
};

export default Numbers;
