import React, { useState } from "react";

const InputBox = (props) => {
  const [inputBox, setInputBox] = useState("");
  return (
    <>
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputBox}
        onChange={(e) => {
          setInputBox(e.target.value);
        }}
      ></input>
       
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputBox);
          setInputBox("");
        }}
      >
        +
      </button>
      <h1 className='app-heading'>todo list</h1>
    </>
  );
};

export default InputBox;
