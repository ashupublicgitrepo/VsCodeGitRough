import React from "react";

const ResetButton = ({loading, reset}) => {
    return (
        <button disabled={loading} onClick={reset}>reset</button>
    );
}
export default ResetButton;