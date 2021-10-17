/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import './header.scss';

import logo from '../../assets/logo-shadow-realista.png';
import { pages } from '../../__mock__/menu';

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
        {pages.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
        <li className="delivery">
          <a href="#">Delivery</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
