import React from 'react';

import './footer.scss';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid">
      <div className="row justify-content-between">
        <div className="col-5 pages">
          <h5>Páginas</h5>
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
              <a href="#">Restaurante</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
          </ul>
        </div>
        <div className="col-5 pages">
          <h5>Institucional</h5>
          <ul>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">WhatsApp</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
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
