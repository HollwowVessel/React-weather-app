import React from 'react';

export const WeatherCard = ({
  datetime,
  icon,
  tempmax,
  tempmin,
  conditions,
}) => {
  const week = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  const date = new Date(datetime);
  const today = new Date(
    new Date().setFullYear(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    )
  );

  const tomorrow = new Date(
    new Date().setFullYear(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 1
    )
  );
  let name = '';

  if (
    today.getMonth() === date.getMonth() &&
    date.getDate() === today.getDate() &&
    date.getFullYear() === today.getFullYear()
  ) {
    name = 'Сегодня';
  } else if (
    tomorrow.getMonth() === date.getMonth() &&
    date.getDate() === tomorrow.getDate() &&
    date.getFullYear() === tomorrow.getFullYear()
  ) {
    name = 'Завтра';
  } else {
    name = week[date.getDay()];
  }
  return (
    <div className="card">
      <h3 className="card__title">{name}</h3>
      <p className="card__day">{datetime}</p>
      <img src={`/images/svg/${icon}.svg`} alt={icon} />
      <p className="card__daytemp">+{Math.floor((tempmax - 32) * (5 / 9))}°</p>
      <p className="card__nigthtemp">
        +{Math.floor((tempmin - 32) * (5 / 9))}°
      </p>
      <p className="card__type">{conditions}</p>
    </div>
  );
};
