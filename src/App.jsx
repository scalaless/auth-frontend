import React, { useState } from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import image from "./img/90211791.png";

const inputClick = () => {
  console.log("clocked")
}
const helpText = "help text"

const App = () => {

  return (
    <div>
      <Header />
      <Logo image={image} />
      <br/>
      <input placeholder={helpText} onClick={inputClick}></input>
    </div>)
}

export default App