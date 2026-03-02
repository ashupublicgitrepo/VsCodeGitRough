import React, { useState } from "react";
import Header from "./Header";
import UIBox from "./UIBox";
import Form from "./Form";
const App = () => {
  const [task, setTask] = useState(
      [{
      id: null, 
        title: null,
      status:null
    }]
  )
  const [data, setData] = useState("");
  const [state, setState] = useState({
    phase: "_idle",
    errorCode: null
  });
 
  function taskAdder(e) {
    e.preventDefault();
    if (data.length < 1) return false;
    const newTask = {
      id: task.length,
      title: data,
      status: "pending"
    };
    setTask(pr => [...pr, newTask]);
    setData("");

  }
  function dataSetter(e) {
    const data = e.target.value;
    setData(data);
    
  }

 
 
  return (
    <>
      <Header />
      <Form data={data} taskAdder={taskAdder} dataSetter={dataSetter} />
          <UIBox task={task} />
    </>
  );
};
export default App;
