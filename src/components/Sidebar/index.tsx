import React from 'react';
import { pages } from '../../__mock__/menu';

import './sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <ul>
        {pages.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      <div className="delivery">
        <a href="#">Delivery</a>
      </div>
    </div>
  );
}

export default Sidebar;
