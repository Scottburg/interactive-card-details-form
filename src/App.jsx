import { useState } from 'react';
import cardBack from './assets/bg-card-back.png';
import cardFront from './assets/bg-card-front.png';
import './App.scss';
function App() {
  return (
    <div className="bg-image">
      <div className="credit-card-section">
        <div className="card-front">
          <img src={cardFront} alt="front-of-card-image" />
        </div>
        <div className="card-back">
          <img src={cardBack} alt="back-of-card-image" />
        </div>{' '}
      </div>
      <div className="crrdit-card-form">FORM HERE!</div>
    </div>
  );
}

export default App;
