import React, { useState } from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import image from "./img/90211791.png";

const inputClick = () => {
  console.log("clocked")
}
const helpText = "help text"

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)

  }
  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <div>
      <Header count={count}/>
      <Logo image={image} />
      <br/>
      <input placeholder={helpText} onClick={inputClick}></input>
      <br/>
      <button onClick={increment}>Добавить 1</button>
      <button onClick={decrement}>Убрать 1</button>
    </div>)
}

export default App