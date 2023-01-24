import { useState } from 'react';
import bgMobile from './assets/bg-main-mobile.png';
import bgDesktop from './assets/bg-main-desktop.png';
import './App.scss';
import cardLogo from './assets/card-logo.svg';

function App() {
  return (
    <section>
      <div className="absolute -z-10">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="background-image" />
        </picture>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="mt-10 mx-5 ">
          <article className="card-front p-5">
            <img src={cardLogo} alt="card-logo" />
            <div>
              <h2>0000 0000 0000 0000</h2>
              <ul>
                <li> Jane Appleseed</li>
                <li> 00/00</li>
              </ul>{' '}
            </div>
          </article>
          <article className="card-back"></article>
        </div>
        <div className="credit-card-form">FORM HERE!</div>
      </div>
    </section>
  );
}

export default App;
