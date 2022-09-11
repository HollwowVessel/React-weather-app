import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const cardDirections = [
  'Север',
  'Северо-восток',
  'Восток',
  'Юго-восток',
  'Юг',
  'Юго-запад',
  'Запад',
  'Северо-запад',
];

export const Weather = () => {
  const weather = useSelector((state) => state.weather.dailyWeather);
  // 1. Prefer destructuring
  // 2. It's better to move the selector to the redux folder

  let windDirection = weather.windDir;

  if (windDirection === 0) {
    windDirection = cardDirections[0];
  } else if (windDirection < 90) {
    windDirection = cardDirections[1];
  } else if (windDirection === 90) {
    windDirection = cardDirections[2];
  } else if (windDirection < 180) {
    windDirection = cardDirections[3];
  } else if (windDirection === 180) {
    windDirection = cardDirections[4];
  } else if (windDirection < 270) {
    windDirection = cardDirections[5];
  } else if (windDirection === 270) {
    windDirection = cardDirections[6];
  } else if (windDirection < 360) {
    windDirection = cardDirections[7];
  } else {
    windDirection = cardDirections[0];
  }

  return (
    <section className="weather">
      <div className="weather-temp">
        <img src="/images/svg/temp.svg" alt="temp" />
        <span className="weather-type">Температура</span>
        <span className="weather-desc">
          +{weather.temp ? `${Math.floor(weather.temp)}°` : 'Nope'}- ощущается
          как +{weather.feelsLike ? `${Math.floor(weather.feelsLike)}°` : ''}
        </span>
      </div>
      <div className="weather-pres">
        <img src="/images/svg/pres.svg" alt="pres" />
        <span className="weather-type">Давление </span>
        <span className="weather-desc">
          {Math.floor(weather.pres)} мм ртутного столба
        </span>
      </div>
      <div className="weather-prec">
        <img src="/images/svg/prec.svg" alt="prec" />
        <span className="weather-type">Влажность</span>
        <span className="weather-desc">{Math.floor(weather.humidity)}%</span>
      </div>
      <div className="weather-wind">
        <img src="/images/svg/wind.svg" alt="wind" />
        <span className="weather-type">Ветер</span>
        <span className="weather-desc">
          {weather.windSpeed} м/с {windDirection}
        </span>
      </div>
      <img
        src="/images/cloud.png"
        alt="Я тучка, тучка, тучка, я вовсе не медведь"
        className="cloud"
      />
    </section>
  );
};
