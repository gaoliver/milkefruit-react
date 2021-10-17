import React from 'react';
import { institucional, pages } from '../../__mock__/menu';

import './footer.scss';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid">
      <div className="row justify-content-between">
        <div className="col-6 col-sm-5 pages">
          <h5>Páginas</h5>
          <ul>
            {pages.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-6 col-sm-5 pages">
          <h5>Institucional</h5>
          <ul>
            {institucional.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link} target={item.target}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="bottom">{`${year} • Milk & Fruit`} &reg;</div>
      </div>
    </footer>
  );
}

export default Footer;
