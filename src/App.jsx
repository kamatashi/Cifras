import './App.css'
import Main from './components/Main'
import encrypter from './components/Output/encrypter'
import InputText from './components/InputText'
import InputKey from './components/InputKey'

export default function App() {
  const frase = 'Essa é uma mensagem secreta';
  const res = encrypter(frase, 'crypt', 4);
  const deres = encrypter(frase, 'decrypt', 4)


  return (
    <>
      <Main />
      <Input />
      <InputKey />
      <h3>Encriptado</h3>
      {res}
      <h3>Original</h3>
      {frase}
      {inputText && <Output inputText={inputText} action={action} key={3} />}
    </>
  )
}
