import React from "react";
const errorMap = {
    401: "...loading",
    402: "internal server error",
    403: "uploaded to server.",
    404: "click on save to upload on server."
}

const UIBox = ({ errorCode }) => {
    
    return (<div hidden={!errorCode}>{errorMap[errorCode]}</div>)
}
export default UIBox;