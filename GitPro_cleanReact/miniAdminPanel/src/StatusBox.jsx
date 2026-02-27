import React from "react";
const errorMap = {
    401: "...loading",
    402: "internal server error, please try again",
    403: "uploaded to server.",
    404: "click on save to upload on server.",
    405: "count value is empty, please set first."
}

const StatusBox = ({ errorCode }) => {
    
    return <div hidden={!errorCode}>{errorMap[errorCode]}</div>;
}
export default StatusBox;