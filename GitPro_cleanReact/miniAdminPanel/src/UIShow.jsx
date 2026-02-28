import React from "react";
const countMsg = {
  _emptyValue: "count value is empty. click count button to set.",
};
const UIShow = ({count}) => {
 
  return (
    <>
      <p>{count?count:countMsg._emptyValue}</p>
    </>
  );
}   
export default UIShow;