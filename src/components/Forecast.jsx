import React from 'react';
import { useSelector } from 'react-redux';

import { week } from '../assets/mocks';
import { WeatherCard } from './components/Card';
import { Nav } from './components/Nav';

export const Forecast = () => {
	const weekWeather = useSelector((state) => state.weather.decadeWeather);
	const cards = weekWeather.length ? weekWeather.slice(0, 7) : [];
	return (
		<section className="forecast">
			<Nav />
			<div className="forecast-cards">
				{cards.map((obj) => (
					<WeatherCard {...obj} />
				))}
			</div>
		</section>
	);
};
