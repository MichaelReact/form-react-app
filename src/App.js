import React,{useState} from 'react';

import './App.css';
import Form from './Form';

function App() {
   let [passVal,setPass]=useState('');
    let [mailVal,setMail]=useState('');
    console.log(passVal)
  return (
    <Form pass={passVal} mail={mailVal} passwordFunc={setPass} emailFunc={setMail}/>
  );
}

export default App;
