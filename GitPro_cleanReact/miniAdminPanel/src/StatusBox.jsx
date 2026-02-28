import React from "react";
const errorMap = {
_uploadEmpty:"count value is empty, please set first.",
_uploadSuccess:"uploaded to server.",
_uploadFailed:"internal server error, please try again",
_loadMsg:"...loading",
_uploadReady:"click on save to upload on server.",
_countUpdateFailed:"internal server error, please try again."
}

const StatusBox = ({ errorCode }) => {
    
    return <div hidden={!errorCode}>{errorMap[errorCode]}</div>;
}
export default StatusBox;