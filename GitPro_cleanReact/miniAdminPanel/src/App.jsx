import React, { useState } from "react";
const msgMap = {
    msgOnUI: "...loading"
}

const App = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    function uploader() {
      return new Promise((res) => {
        setTimeout(() => {
          res();
        }, 500);
      });
    }
    async function validator() {
        if (loading) return false;
        setLoading(true);
        await uploader();
        setCount((pr) => pr + 1);
        setLoading(false);
      
    }
    return ( 
        <>
            <p>{loading? msgMap.msgOnUI: count}</p>
            <button onClick={validator} disabled= {loading} >count</button>
        </>
    )
           
};

export default App;