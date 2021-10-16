import React from 'react';
import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';

function App() {
  return (
    <div className="body-container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
