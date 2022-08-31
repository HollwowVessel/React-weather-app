import React from 'react';

export const WeatherCard = ({ title, date, icon, dayTemp, nightTemp, type }) => {
	return (
		<div className="card">
			<h3 className="card__title">{title}</h3>
			<p className="card__day">{date}</p>
			<img src={`/images/svg/${icon}.svg`} alt={icon} />
			<p className="card__daytemp">+{dayTemp}°</p>
			<p className="card__nigthtemp">+{nightTemp}°</p>
			<p className="card__type">{type}</p>
		</div>
	);
};
