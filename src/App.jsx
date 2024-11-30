import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import image from "./img/90211791.png";
import ButtonUp from './components/ButtonUp';
import ButtonDown from './components/ButtonDown';
import StateWork from './components/StateWork';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

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


  const addUser = (u) => {
    const id = us.length + 1
    setUs((prev)=> [...prev, {id, ...u}])
  }

  const removeUser = (id) => {
    setUs((prev)=> prev.filter((x)=> x.id != id))
  }

  const [us, setUs] = useState([
    {
        id: 0,
        balance: "$2,775.07",
        age: 34,
        email: "forddotson@confrenzy.com",
        address: "560 Times Placez, Succasunna, Maine, 2834"
    },
    {
        id: 1,
        balance: "$1,644.85",
        age: 29,
        email: "forddotson@confrenzy.com",
        address: "133 Dupont Street, Elrama, Hawaii, 1029"
    },
    {
        id: 2,
        balance: "$2,188.03",
        age: 33,
        email: "forddotson@confrenzy.com",
        address: "724 Hyman Court, Dellview, Palau, 8659"
    },
    {
        id: 3,
        balance: "$9,834.23",
        age: 33,
        email: "coupppurtoiiuyttree@wertoiu.com",
        address: "102 Orenburg Street, Uittro, Palau, 555"
    }
], [addUser, removeUser])

  return (
    <div>
      <Header count={count} name={name}/>

      <main>
        <UserList us={us} onRemove={removeUser}/>
      </main>
      <aside>        
        <AddUser onAdd={addUser} />
      </aside>
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