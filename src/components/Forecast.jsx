import React from 'react';

import { week } from '../assets/mocks';
import { WeatherCard } from './components/Card';
import { Nav } from './components/Nav';

export const Forecast = () => {
	return (
		<section className="forecast">
			<Nav />
			<div className="forecast-cards">
				{week.map((obj) => (
					<WeatherCard {...obj} />
				))}
			</div>
		</section>
	);
};
