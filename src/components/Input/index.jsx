import React, { useState } from 'react';



const Input = (props) => {
  const [textInput, setTextInput] = useState('');

  const changeTextHandler = (event) => {
    setTextInput(event.target.value);
  };

  const buttonClickHandler = () => {
    props.getInputText(textInput.trim().toLowerCase());
    setTextInput('');
  };

  
  return (
    <>

      <label>Digite algo abaixo:</label>
      <br />
      <textarea
        rows={5}
        cols={15}
        onChange={changeTextHandler}
        value={textInput}
      />
      <br />

      <button onClick={buttonClickHandler}>
        {props.action === 'crypt' ? 'Criptografar' : 'Descriptografar'}
      </button>
    </>
  );
};


export default Input;