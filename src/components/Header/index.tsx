import React from 'react';
import './header.scss';

import logo from '../../assets/logo-shadow-realista.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Milk & Fruit" />

      <ul>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Cupons</a>
        </li>
        <li>
          <a href="#">Cardápio</a>
        </li>
        <li>
          <a href="#">Sobre nós</a>
        </li>
        <li>
          <a href="#">Restaurante</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
