import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calc from './components/Calculator';

import Home from './components/Home';
import Quote from './components/Quotes';

class App extends React.PureComponent {
  render() {
    return (
      <>

        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<Calc />} />
            <Route path="Quotes" element={<Quote />} />
          </Routes>

        </div>
      </>
    );
  }
}

export default App;
