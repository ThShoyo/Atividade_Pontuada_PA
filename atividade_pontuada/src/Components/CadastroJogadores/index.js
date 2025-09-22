// *atividade\src\Components\CadastrarJogadores\index.js

import React, { useState } from 'react';
import './style.css';


const CadastrarJogadores = () => {
    const [nome, setNome] = useState('');
    const [numeroCamisa, setnumeroCamisa] = useState('');
    const[jogadores, setJogadores] = useState([]);

    const CadastrarJogadores = (e) => {
        e.preventDefault();

        if (!nome || !numeroCamisa) {
            alert('Por favor, preencha os campos corretamente.');
                return;
        }
    const novoJogador = { nome, numeroCamisa };
    setJogadores([...jogadores, novoJogador]);
    setNome('');
    setnumeroCamisa('');
    }
    return (
        <div className="cadastrar-jogadores">
            <h2>Cadastrar Jogadores</h2>
            <form onSubmit={CadastrarJogadores}>
               <div>
                <label htmlFor="nome">Nome:</label>
                <input
                type = "text"
                id= "nome"
                value= {nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o Nome do Jogador"
                />
            </div>

            <div>
                <label htmlFor="numeroCamisa">Número da Camisa:</label>
                <input
                type = "text"
                id= "numeroCamisa"
                value= {numeroCamisa}
                onChange={(e) => setnumeroCamisa(e.target.value)}
                placeholder="Digite o Número da Camisa"
                />
            </div>

                <button type="submit">Cadastrar</button>
            </form>
            <h2>Lista de Jogadores Cadastrados</h2>
            <ul>
                {jogadores.map((jogador, index) => (
                    <li key={index}>
                        {jogador.nome} - {jogador.numeroCamisa}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CadastrarJogadores;