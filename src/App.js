import React from 'react';
import './App.css';

import Calc from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="display">
        <Calc />
      </div>
    );
  }
}

export default App;
