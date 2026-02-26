import React from "react";

const SaveButton = ({errorCode, serverSaver}) => {
    return (
        <>
        <button disabled={errorCode==401?true:false} onClick={serverSaver} >save</button>
        </>
    )
}
export default SaveButton;