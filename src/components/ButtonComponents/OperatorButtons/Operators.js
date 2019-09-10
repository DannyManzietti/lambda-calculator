import React from "react";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data";
const Operators = (props) => {
  // STEP 2 - add the imported data to state\


  return (
    <div className="operatorContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operators.map(item => (<OperatorButton char={item.char} value={item.value} key={item.char} changeMemory={props.changeMemory} />))}
    </div>
  );
};

export default Operators;