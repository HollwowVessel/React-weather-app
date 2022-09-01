import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { WeatherCard } from './components/Card';
import { Nav } from './components/Nav';

export const Forecast = () => {
	const weekWeather = useSelector((state) => state.weather.decadeWeather);

	const [active, setActive] = useState(0);
	const [cards, setCards] = useState(weekWeather.length ? weekWeather.slice(0, 7) : []);

	function handleClick(id) {
		setActive(id);
		if (id === 0) {
			setCards(weekWeather.length ? weekWeather.slice(0, 7) : []);
		}
		if (id === 1) {
			setCards(weekWeather.length ? weekWeather.slice(0, 10) : []);
		}
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
