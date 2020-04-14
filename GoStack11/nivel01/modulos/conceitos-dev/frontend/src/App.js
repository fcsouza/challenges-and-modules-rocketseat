import React, { useState } from 'react';

import './App.css';

import backgroundImage from './assets/business.png';

import Header from './components/Header';



function App() {
  const [projects, setProjects] = useState(['Desenvolvimento Web', 'Front-end web']);

  //useState retorna um array com 2 posições
  //1. Variavel com o seu valor inicial
  //2. Função para atualizarmos esse Valor

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    
  }

  return (
    <>
     <Header title="Homepage"/>
      <img width="150" src={backgroundImage}></img> 

       <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
       </ul>

       <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
 
    </>
  )
}

export default App;