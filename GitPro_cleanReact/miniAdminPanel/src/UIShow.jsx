import React from "react";

const msgMap = {
  loadMsg: "...loading",
  emptyMsg: "counter value is empty"

};
const UIShow = ({ loading, count }) => {
  function uiMsger() {
    if (loading) {
      return msgMap.loadMsg;
    } else if (count < 1) { return msgMap.emptyMsg } else if (count > 0) {
      return count;
    }
   } 
    return (
        <>
            
        <p>{uiMsger()}</p>
      </>
    );

}   
export default UIShow;