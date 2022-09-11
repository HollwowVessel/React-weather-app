import React from 'react';

import './App.scss';
import { Forecast } from './components/Forecast';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { Weather } from './components/Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Info />
          <Weather />
          <Forecast />
        </main>
      </div>
    </div>
  );
}

export default App;
