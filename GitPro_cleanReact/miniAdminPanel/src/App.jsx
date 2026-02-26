import React, { useState } from "react";
import UIShow from "./UIShow";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";
import SaveButton from "./SaveButton";
import UIBox from "./UIBox";
let promisRes = 0;
const App = () => {
  const [count, setCount] = useState(0);
  const [errorCode, setErrorCode] = useState(0);
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
    if (errorCode==401) return false;
      setErrorCode(401);
      try {
        await saver();
        setErrorCode(403);
      }
      catch (err) {
        setErrorCode(402);
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
    if (errorCode==401) return false;
     setCount(0);
     setErrorCode(null);
  }
    async function counter() {
        if (errorCode==401) return false;
      setErrorCode(401);
      try {
        await uploader();
        setErrorCode(404);
        setCount(pr => pr + 1);
      }
      catch (err) {
        setErrorCode(402);
      }
    }
    return (
      <>
        <UIShow count={count} />
        <CounterButton counter= {counter} errorCode={errorCode} />
        <ResetButton reset={resetter} errorCode={errorCode} />
        <SaveButton errorCode={errorCode} serverSaver={serverSaver} />
        <UIBox errorCode={errorCode} />
      </>
      // some observations: every button need error code to get disabled, or update ui, can we create a function which only send disable to button if error code is 401, and is this healthy if we explicitly pass a prop which is only for disable or should that button calculate itself to disable or not. 
    );        
};

export default App;