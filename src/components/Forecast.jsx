/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback } from 'react';

import { useSelector } from 'react-redux';

import { WeatherCard } from './components/Card';
import { Nav } from './components/Nav';

const quantityOfDays = [7, 10, 15];

export const Forecast = () => {
  const weekWeather = useSelector((state) => state.weather.decadeWeather);

  const [active, setActive] = useState(0);
  const [cards, setCards] = useState(
    weekWeather.length ? weekWeather.slice(0, quantityOfDays[0]) : []
  );

  function handleClick(id) {
    setActive(id);
    setCards(
      weekWeather.length ? weekWeather.slice(0, quantityOfDays[id]) : []
    );
  }

  useMemo(() => {
    handleClick(active);
  }, [weekWeather]);

  return (
    <section className="forecast">
      <Nav click={handleClick} active={active} />
      <div className="forecast-cards">
        {cards.map((obj) => (
          <WeatherCard key={obj.datetime} {...obj} />
        ))}
      </div>
    </section>
  );
};
