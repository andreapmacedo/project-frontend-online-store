import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const BotaoVoltar = () => (
  <div className="area-botao">
    <Link className="botao-voltar" to='/'>Voltar</Link>
  </div>
);

export default BotaoVoltar;