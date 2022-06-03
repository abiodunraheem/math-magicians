import React, { useState } from 'react';
import Keys from './Keys';
import calculate from '../logic/calculate';

const Calc = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleEvent = (e) => {
    const oprObject = calculate(state, e.target.textContent);
    setState(oprObject);
  };

  const { total, operation, next } = state;
  const oprnd = operation === '%' ? 'mod' : operation;
  let result = '';
  if (total) {
    result = `${total} ${oprnd || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${oprnd || ''}`;
  }
  return (
    <div className="calculatorDisplay">

      <div className="result">{result || 0 }</div>
      <Keys styles="operand grey" handleEvent={(e) => handleEvent(e)} val="AC" />
      <Keys styles="operand grey" handleEvent={(e) => handleEvent(e)} val="+/-" />
      <Keys styles="operand grey" handleEvent={(e) => handleEvent(e)} val="%" />
      <Keys styles="operand orange" handleEvent={(e) => handleEvent(e)} val="÷" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="7" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="8" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="9" />
      <Keys styles="digits orange" handleEvent={(e) => handleEvent(e)} val="x" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="4" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="5" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="6" />
      <Keys styles="digits orange" handleEvent={(e) => handleEvent(e)} val="-" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="1" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="2" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="3" />
      <Keys styles="digits orange" handleEvent={(e) => handleEvent(e)} val="+" />
      <Keys styles="digits span grey" handleEvent={(e) => handleEvent(e)} val="0" />
      <Keys styles="digits grey" handleEvent={(e) => handleEvent(e)} val="." />
      <Keys styles="digits orange" handleEvent={(e) => handleEvent(e)} val="=" />
    </div>
  );
};

export default Calc;
