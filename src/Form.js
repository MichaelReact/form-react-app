import React,{useState} from 'react';
import validator from './validator';

const fetchPost=(password,email)=>{
    console.log(password,email)
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          password,
          email,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
};
const config={
 
  email:{
      isRequired:{
          message:'Электронная почта не заполнена'
      },
      isEmail:{
          message:'Электронная почта введена неверно'
      }
  },
  password:{
      isRequired:{
          message:'Пароль не указан'
      },
      isCapitalLetter:{
          message:"В пароле должна быть хотя бы одна заглавная буква",
      },
      min:{
          message:"Пароль не содержит достаточно символов",
          value:8
      }
  }
};

const Form=(props)=>{
    
    const onSubmit=(event)=>{
        event.preventDefault();
        if(props.mail && props.pass) {
            fetchPost(props.pass,props.mail);
            props.emailFunc('')
            props.passwordFunc('')
        }
    }
    return (
        <div className='wrapper'>
          <div className="wrapper__content">
             <form className="form" onSubmit={onSubmit}>
                <input type="password"    value={props.pass} name="pass" className="pass" placeholder="password" onChange={(e)=>props.passwordFunc(e.target.value)}/>
                <input type="email"    value={props.mail} name="mail" className='mail' placeholder="email" onChange={(e)=>props.emailFunc(e.target.value)}/>
                {props.mail && props.pass?<button type="submit" className="submit">Отправить</button>:<button disabled type="button" className="submit">Введите данные</button>}
            </form>
            </div>
        </div>
       
    );
};

export default Form;