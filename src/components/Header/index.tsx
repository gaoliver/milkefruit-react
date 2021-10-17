/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import './header.scss';

import logo from '../../assets/logo-shadow-realista.png';

function Header() {
  const [active, setActive] = useState(false);

  const openSidebar = () => {
    const side = document.getElementById('sidebar')!;
    const toggle = document.getElementById('toggle-nav')!;

    if (!active) {
      side.classList.add('active');
      toggle.classList.add('active-toggle');
      setActive(true);
    } else if (active) {
      side.classList.remove('active');
      toggle.classList.remove('active-toggle');
      setActive(false);
    }
  };

  return (
    <header>
      <nav className="responsive-nav" id="toggle-nav" onClick={openSidebar}>
        <span></span>
      </nav>

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
        <li className="delivery">
          <a href="#">Delivery</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
