import React from "react";

const CounterButton = ({disable, counter }) => {
    return (
      <button onClick={counter} disabled={disable ==="_counter"}>
        count
      </button>
    );
}
export default CounterButton;