import React from "react";

const SaveButton = ({serverSaver, disable}) => {
    return (
        <>
        <button disabled={disable=="saver"} onClick={serverSaver} >save</button>
        </>
    )
}
export default SaveButton;