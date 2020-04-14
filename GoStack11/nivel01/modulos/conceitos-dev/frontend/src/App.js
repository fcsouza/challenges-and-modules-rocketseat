import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const projects = useState(['Desenvolvimento Web', 'Front-end web']);

  //useState retorna um array com 2 posições
  //1. Variavel com o seu valor inicial
  //2. Função para atualizarmos esse Valor

  function handleAddProject() {
    projects
    
  }

  return (
    <>
     <Header title="Homepage">
       <ul>
         <li>Homepage</li>
         <li>Projects</li>
       </ul>
     </Header> 
    </>
  )
}

export default App;