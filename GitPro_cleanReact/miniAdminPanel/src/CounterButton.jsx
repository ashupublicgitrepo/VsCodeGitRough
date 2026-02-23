import React from "react";

const CounterButton = (props) => {
    const [validator, loading] = props.props;
    return (
      <button onClick={validator} disabled={loading}>
        count
      </button>
    );
}
export default CounterButton;