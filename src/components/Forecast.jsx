import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { WeatherCard } from './components/Card';
import { Nav } from './components/Nav';

export const Forecast = () => {
	const weekWeather = useSelector((state) => state.weather.decadeWeather);
	const [cards, setCards] = useState(weekWeather.length ? weekWeather.slice(0, 7) : []);
	useMemo(() => setCards(weekWeather.length ? weekWeather.slice(0, 7) : []), [weekWeather]);
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
