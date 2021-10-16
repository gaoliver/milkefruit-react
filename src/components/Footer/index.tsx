import React from 'react';

import './footer.scss';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-5 pages"></div>
        <div className="col-5 pages"></div>
      </div>
      <div className="row justify-content-center">
        <div className="bottom">{`${year} • Milk & Fruit`} &reg;</div>
      </div>
    </footer>
  );
}

export default Footer;
