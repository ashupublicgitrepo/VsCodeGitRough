import React from "react";

const ResetButton = ({disable, reset}) => {
    return (
        <button disabled={disable=="resetter"} onClick={reset}>reset</button>
    );
}
export default ResetButton;