import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import './footer.scss';
import { institucional, pages } from '../../__mock__/menu';

import Logo from '../../assets/logo-shadow-realista.png';

function Footer() {
  const year = new Date().getFullYear();
  const redes = ['facebook', 'instagram', 'whatsapp'];

  return (
    <footer className="container-fluid">
      <div className="row justify-content-start">
        <div className="col-md-3 pages">
          <img src={Logo} alt="Logo Milk & Fruit" />
        </div>
        <div className="col-md-3 pages">
          <h5>Institucional</h5>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ul className="divisor" style={{ textAlign: 'end' }}>
              {pages
                .filter((x) => x.name.toLowerCase() !== 'sobre nós')
                .sort((a, b) => a.name.length - b.name.length)
                .map((item) => {
                  return (
                    <li key={item.id}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  );
                })}
            </ul>
            <ul style={{ textAlign: 'start' }}>
              {institucional
                .filter((x) => !redes.includes(x.name.toLowerCase()))
                .sort((a, b) => a.name.length - b.name.length)
                .map((item) => {
                  return (
                    <li key={item.id}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="col-md-3 pages">
          <h5>Redes Sociais</h5>
          <div className="redes">
            {institucional
              .filter((x) => redes.includes(x.name.toLowerCase()))
              .map((item) => {
                if (item.name.toLowerCase() === 'facebook') {
                  return (
                    <a href={item.link}>
                      <FaFacebook color="white" size={24} />
                    </a>
                  );
                } else if (item.name.toLowerCase() === 'instagram') {
                  return (
                    <a href={item.link}>
                      <FaInstagram color="white" size={25} />
                    </a>
                  );
                } else if (item.name.toLowerCase() === 'whatsapp') {
                  return (
                    <a href={item.link}>
                      <FaWhatsapp color="white" size={25} />
                    </a>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="bottom">Milk & Fruit &reg; {year}</div>
      </div>
    </footer>
  );
}

export default Footer;
