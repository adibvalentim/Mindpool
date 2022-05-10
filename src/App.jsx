import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './notification.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import api from "./API/ConfigAPI.js"


import React from 'react';
//ADD REACT TOAST ALERTS
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
    const [post, setPost] = React.useState(null);
    
    const notify = () => toast("Adib Valentim agradece a oportunidade");
    
    var contador =0;
    var mensagensMontadas = "";
    var registrosContagem = 0; 
    
    const [user, setUser] = useState();


    //PROMISSES WORKING
    var users = api.get().then((response) => {
    
    registrosContagem = response.data.questions.length;
    if (!response) return  toast("Nenhum resultado encontrado");


    //INC - SHOW ALERT - RIGHT SIDE FLOAT NOTIFICATION
    for (contador = 0; contador < registrosContagem; contador++) {
      mensagensMontadas = response.data.questions[contador].id  + ' - '+  response.data.questions[contador].createdAt   +' - '+   response.data.questions[contador].title  +'\n\n\n\n\n\n - '+  response.data.questions[contador].category ;
      
      toast.success(mensagensMontadas);
      
      mensagensMontadas = '';
      
      <span>{notify}</span>
    }
  });
  
       
  
  return (
    <div>
      <button onClick={notify}>Exibir Alerta </button>
      <ToastContainer />
    </div>
     
   
   
  );
}








/*

function App() {
  //const [count, setCount] = useState(0)
  const notify = () => toast("Wow so easy!");

  return (
    <div className="App">
      <button onClick={notify}>Clique Aquis</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {notify}
      <label> Qual a stack ?</label> <input type="text"  />
      
      </header>
    </div>
  )
}*/

export default App
