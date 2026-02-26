import React from "react";

const UIShow = ({count}) => {
 
  return (
    <>
      <p>{count?count:"count value is empty."}</p>
    </>
  );
}   
export default UIShow;