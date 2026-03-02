import React from "react";
const Form = ({ taskAdder, data, dataSetter }) => {
   
    return (
      <>
        <form action="" onSubmit={(e) => taskAdder(e)}>
          <input type="text" value={data} onChange={dataSetter} />
          <button>add task</button>
        </form>
      </>
    );
}
export default Form;