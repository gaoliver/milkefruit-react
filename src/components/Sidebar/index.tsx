import React from 'react';

import './sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
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
      <div className="delivery">
        <a href="#">Delivery</a>
      </div>
    </div>
  );
}

export default Sidebar;
