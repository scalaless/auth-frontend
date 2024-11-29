import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import image from "./img/90211791.png";
import ButtonUp from './components/ButtonUp';
import ButtonDown from './components/ButtonDown';
import StateWork from './components/StateWork';
import UserList from './components/UserList';

const inputClick = () => {
  console.log("clocked")
}
const helpText = "help text"

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  useEffect(()=>{
    document.title = `[${count}] Control Panel`
  })

  useEffect(()=>{
    setName("a")
  })

  const increment = () => {
    setCount(count + 1)

  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <Header count={count} name={name}/>

      <main>
        <UserList />
      </main>
      {/* <StateWork stateTitle="pupu"/>

      <hr className="dotted"/>

      <Logo image={image}/>
      <br/>
      <input onChange={event=>setName(event.target.value)} placeholder={helpText} onClick={inputClick}></input>
      <br/>
      <ButtonUp setMessage={increment}/>
      <ButtonDown setMessage={decrement}/> */}
      {/* <button onClick={increment}>Добавить 1</button>
      <button onClick={decrement}>Убрать 1</button> */}
    </div>)
}

export default App