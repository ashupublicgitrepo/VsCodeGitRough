import React, { useState } from "react";
import UIShow from "./UIShow";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";
let promisRes = 0;
// i know that UI = f(state), but i dont want to introduce a state which track how many times or how to reject or resolve the promise, so introduced a outsourced varible.now this is fine, because, it is not ui, or react does not need to know about it, i is just internal helper. if it somehow connected or passed in react operations, then it will be consider as issue.
const App = () => {
  const [count, setCount] = useState(0);
  // const [loading, setLoading] = useState(false);
  const [errorCode, setErrorCode] = useState(0);
  function uploader() {
    return new Promise((res, rej) => {
        setTimeout(() => {
        if (promisRes % 2 == 0) {
          res(); 
        } else {
          rej(403);
        }
          promisRes++;
          console.log(promisRes);
        }, 500);
      });
    
  }
   function resetter() {
    if (errorCode==401) return false;
     setCount(0);
     setErrorCode(null);
  }
    async function counter() {
        if (errorCode==401) return false;
      setErrorCode(401);
      try {
        await uploader();
        setErrorCode(null);
        setCount(pr => pr + 1);
      }
      catch (err) {
        setErrorCode(403);
      }
      
    }
    return (
      <>
        <UIShow errorCode={errorCode}  count={count} />
        {/* here i am again stuck, means, if any component need too much props, it is going to be complex, so it is must that we pass as low as props we can. and if we derive error code in ui component by just only passing error state, how ui know which error is this, or how system come to that error.in this case, state and ui msg are static, means loading must show ...loading on ui, and error is only one, but what with those systems in which multiple errors can be thrown, for those components, error code is must. */}
        <CounterButton counter= {counter} errorCode={errorCode} />
        <ResetButton  reset={resetter} errorCode={errorCode}/>
      </>
    );        
};

export default App;