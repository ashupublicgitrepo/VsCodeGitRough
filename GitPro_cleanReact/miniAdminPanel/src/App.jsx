import React, { useState } from "react";
import UIShow from "./UIShow";
import CounterButton from "./CounterButton";


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
        <UIShow loading={loading} count={count} />
        <CounterButton props={[validator, loading]} />
        
        {/* in counter component i passed props as array, by intention to learn effect of passing prop as an array, also i wrote just validator and not in a callback function */}
        {/* here we observe how multiple props can be passed and distructure in relevent component, also difference between passing as object and an array */}
      </>
    );
           
};

export default App;