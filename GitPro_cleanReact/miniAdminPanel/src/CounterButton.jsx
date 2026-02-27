import React from "react";

const CounterButton = ({disable, counter }) => {
    return (
      <button onClick={counter} disabled={disable==="counter"}>
        count
      </button>
    );
}
export default CounterButton;