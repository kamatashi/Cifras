import React, { useState } from 'react';



const InputText = (props) => {
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
      {props.action === 'crypt' ? (
        <p>
          Você pode escrever e ver abaixo o texto original e o texto
          criptografado.
          <br />
          Caracteres acentuados ou especiais no seu texto não sofrerão
          alteração.
        </p>
      ) : (
        <p>
          Coloque o texto criptografado e veja-o descriptografado logo abaixo.
          <br />
          Caracteres acentuados ou especiais no seu texto não sofrerão
          alteração.
        </p>
      )}

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


export default InputText;