import React, { useState } from "react";
import UIShow from "./UIShow";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";

// let count = 0;
// // now i am confused about it, what is better, a state count or a derived, but as i know, state should be minimum and if anything can be derived from that source should be derived, and if this is true, why this derivable state is in app componet why it is not in ui component, because, button component is changing it, so, anything which is shared between components or say, lifting state up, must be handled by parent.

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
   function resetter() {
    if (loading) return false;
     setCount(0);
    // so, react see, if state is same as previous, react does not call renderer, it only trigger when state changes.
    
  }
    async function counter() {
        if (loading) return false;
        setLoading(true);
      await uploader();
    // i ma confused about, why react not rerendering even when state is changing, so, if i remove the uploaded, rendendering not happen, i know this is because of react batching, but, how async effects it. even async take time of 1ms, still react rerenders, but not without it. 
      setCount(pr => pr+1);
        setLoading(false);
      
    }
    return (
      <>
        <UIShow loading={loading} count={count} />
        <CounterButton counter= {counter} loading = {loading} />
        <ResetButton loading={loading} reset={resetter} />
      </>
    );
           
};

export default App;