import React, { useState } from 'react';
import { WeatherCard } from './components/Card';
import { Nav } from './components/Nav';

export const Forecast = () => {
	return (
		<section className="forecast">
			<Nav />
			<div className="forecast-cards">
				<WeatherCard />
				<WeatherCard />
				<WeatherCard />
				<WeatherCard />
				<WeatherCard />
				<WeatherCard />
				<WeatherCard />
			</div>
		</section>
	);
};
