import React from 'react';
import CadastrarJogadores from './Components/CadastroJogadores'; 
import './App.css';
import ListaJogadores from './Components/ListaJogadores';


function App() {
  return (
    <div className="App">
      <CadastrarJogadores/>
      <ListaJogadores/>
    </div>
  );
}

export default App;
