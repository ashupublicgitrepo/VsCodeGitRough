import React from "react";

const msgMap = {
  msgOnUI: "...loading",
};
const UIShow = ({loading, count}) => {
    
    return (
        <>
            
        <p>{loading ? msgMap.msgOnUI : count}</p>
      </>
    );

}   
export default UIShow;