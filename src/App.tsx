import React from 'react';
import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import Home from './views/Home';

function App() {
  return (
    <div className="body-container">
      <Header />
      <Sidebar />
      <div className="view-content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
