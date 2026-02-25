import React from "react";

const msgMap = {
  401: "...loading",
  402: "counter value is empty",
  403: "internal Server Error, try again."

};
const UIShow = ({errorCode, count }) => {
  function uiMsger() {
    if (errorCode==401) {
      return msgMap[401];
    } else if (errorCode) {
      return msgMap[errorCode];
    } else {
      return count>0?count:msgMap[402];
    }
   } 
    return (
        <>
            
        <p>{uiMsger()}</p>
      </>
    );

}   
export default UIShow;