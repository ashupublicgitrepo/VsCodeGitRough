import React from "react";

const CounterButton = ({counter, loading}) => {
    return (
      <button onClick={counter} disabled={loading}>
        count
      </button>
    );
}
export default CounterButton;