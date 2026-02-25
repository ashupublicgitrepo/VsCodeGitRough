import React from "react";

const ResetButton = ({errorCode, reset}) => {
    return (
        <button disabled={errorCode==401?true:false} onClick={reset}>reset</button>
    );
}
export default ResetButton;