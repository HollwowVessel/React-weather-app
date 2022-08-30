import React from 'react';

export const WeatherCard = () => {
	return (
		<div className="card">
			<h3 className="card__title">Сегодня</h3>
			<p className="card__day">28 авг</p>
			<img src="/images/svg/small_rain_sun.svg" alt="small_rain_sun" />
			<p className="card__daytemp">+18°</p>
			<p className="card__nigthtemp">+15°</p>
			<p className="card__type">Облачно</p>
		</div>
	);
};
