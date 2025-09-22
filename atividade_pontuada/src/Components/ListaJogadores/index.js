// atividade\src\Components\ListaDeJogadores\index.js

import React from 'react';
import './style.css';

const ListaDeJogadores = ({ jogador }) => {
  return (
    <div className='lista-de-jogadores'>

    <ul>
      {jogador.nome} - Camisa nº {jogador.numeroCamisa}
    </ul>
    </div>
  );
};

export default ListaDeJogadores;

