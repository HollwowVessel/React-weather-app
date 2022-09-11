import React from 'react';

import './App.scss';
import { Weather } from './components/Weather';
import { Forecast } from './components/Forecast';
import { Header } from './components/Header';
import { Info } from './components/Info';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Info />
          <Weather />
        </main>
        <Forecast />
      </div>
    </div>
  );
}

export default App;
