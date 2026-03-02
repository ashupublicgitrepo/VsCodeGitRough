import React, { useState } from "react";
import UIShow from "./UIShow";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";
import SaveButton from "./SaveButton";
import StatusBox from "./StatusBox";
let promisRes = 0;
const App = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    phase: "idle",
    action: null,
    msgOnUI: null
  });
  // day 30, 
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
  function wait() {
    return new Promise(res => setTimeout(() => res(), 1000));
  }
  function stateUpdater(newState) {
    setState(pr => ({
      ...pr,
      ...newState,
    }));
  }
  async function serverSaver() {
    if (state.phase==="_loading") return false;
    if (count === 0) return stateUpdater({ msgOnUI: "_uploadEmpty" });
    stateUpdater({ phase: "_loading", action: "_saver", msgOnUI: "_loadMsg" });
      try {
        await saver();
        stateUpdater({ msgOnUI:"_uploadSuccess" });
      }
      catch (err) {
        stateUpdater({ msgOnUI:"_uploadFailed" });
      } finally {
        await wait();
        stateUpdater({ phase: "_idle", action: null });
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
     if (state.phase === "_loading") return false;
     setCount(0);
     stateUpdater({ msgOnUI: null });
         }
  async function counter() {
    if (state.phase === "_loading") return false;
    if (count === 0) stateUpdater({ msgOnUI: "_emptyValue" });
    stateUpdater({
      phase: "_loading",
      action: "_counter",
      msgOnUI: "_loadMsg",
    });
    try {
      await uploader();
      setCount((pr) => pr + 1);
      stateUpdater({
        msgOnUI: "_uploadReady",
      });
    } catch (err) {
      stateUpdater({ msgOnUI: "_countUpdateFailed" });
    }
    finally {
      await wait();
      stateUpdater({ phase: "_idle", action: null });
    }
    }
    return (
      <>
        <UIShow count={count} />
        <CounterButton
           disable={state.action}
          counter={counter}
             />
        <ResetButton
          reset={resetter}
             />
        <SaveButton
          disable={state.action}
               serverSaver={serverSaver}
        />
        <StatusBox errorCode={state.msgOnUI} />
      </>
    );        
};

export default App;