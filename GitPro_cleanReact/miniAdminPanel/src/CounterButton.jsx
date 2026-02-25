import React from "react";

const CounterButton = ({ counter, errorCode }) => {
    return (
      <button onClick={counter} disabled={errorCode==401?true:false}>
        count
      </button>
    );
}
export default CounterButton;