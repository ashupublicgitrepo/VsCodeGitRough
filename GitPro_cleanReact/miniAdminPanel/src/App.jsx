import React, { useState } from "react";
import UIShow from "./UIShow";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";
import SaveButton from "./SaveButton";
import StatusBox from "./StatusBox";
let promisRes = 0;
const App = () => {
  const [count, setCount] = useState(0);
  const [errorCode, setErrorCode] = useState(0);
  const [action, setAction] = useState("");
  const isLoading = errorCode === 401;
  // day 29, problem statement - here is observe a pressure point, if i click on counter, it disables counter button and ui box, but it is also disabling whole ui, yes i can make like this, that when counter loading is running, no other button respond but disabling them is not an option, it cost extra rendering.
  function uploader() {
    return new Promise((res, rej) => {
        setTimeout(() => {
        if (promisRes % 2 == 0) {
          res(); 
        } else {
          rej();
        }
          promisRes++;
        }, 1000);
      });
    
  }
  async function serverSaver() {
    if (isLoading) return false;
    if (count === 0) return setErrorCode(405);
    setErrorCode(401);
    setAction("saver");
      try {
        await saver();
        setErrorCode(403);
      }
      catch (err) {
        setErrorCode(402);
      }finally {
        setAction("");
// of course we dont have a track state yet, which tracks previous value and current value, and return an error which says, already uploaded please change value, but that is for another day.
      }
  }
  function saver() {
    return new Promise((res, rej) => {
     setTimeout(() => {
       if (promisRes % 2 != 0) {
         res();
       } else {
         rej();
       }
       promisRes++;
     }, 1000);
      
    })
  }
   function resetter() {
    if (isLoading) return false;
    setAction("resetter");
     setCount(0);
     setErrorCode(0);
        setAction("");
  }
    async function counter() {
        if (isLoading) return false;
        setErrorCode(401);
        setAction("counter");
      try {
        await uploader();
        setCount(pr => pr + 1);
        setErrorCode(404);
      }
      catch (err) {
        setErrorCode(402);
      } finally {
        setAction("");
  
      }
    }
    return (
      <>
        {/* day 29, there is no relationship between error code and buttons, button can work without seening error code, they just only need to know, what should happen when click, how do they should look like when clicked, and how do should they look like or work like, when other buttons clicked.other then that, button has no need to know further information. */}
        <UIShow count={count} />
        <CounterButton
           disable={action}
          counter={counter}
             />
        <ResetButton
           disable={action}
          reset={resetter}
             />
        <SaveButton
          disable={action}
               serverSaver={serverSaver}
        />
        {/* day29, so button needs to know what happen when clicked, and what happen after click, no need to know is loading is true or not, not for ui of button but for back logic, which tracks loading as make button responsive or not. */}
        <StatusBox errorCode={errorCode} />
      </>
    );        
};

export default App;