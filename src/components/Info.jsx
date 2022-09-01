import React, { useState, useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyWeather } from '../redux/slices/weatherSlice';

const interval = 10000;

export const Info = () => {
	const dispatch = useDispatch();

	const weather = useSelector((state) => state.weather.dailyWeather);
	const decadeWeather = useSelector((state) => state.weather.decadeWeather);

	const { coords } = useGeolocated({});
	const [time, setTime] = useState(0);
	let temp = decadeWeather.length ? decadeWeather[0] : '';

	function changeTime() {
		let date = new Date();
		let [hours, minutes] = [date.getHours(), date.getMinutes()];
		console.log();
		if (hours < 10) hours = '0' + hours;
		if (minutes < 10) minutes = '0' + minutes;
		setTime(`${hours}:${minutes}`);
	}

	setInterval(changeTime, interval);

	useEffect(() => {
		changeTime();
		const [lat, lon] = [coords?.latitude, coords?.longitude];
		dispatch(getDailyWeather({ city: '', lat, lon }));
	}, [coords]);

	return (
		<section className="info">
			<div className="info-desc">
				<h1 className="info-desc__temp">{weather.temp ? weather.temp.toFixed(1) + '°' : 'Nope'}</h1>
				<p className="info-desc__today">Сегодня</p>
				<p className="info-desc__time">Время: {time}</p>
				<p className="info-desc__town">Город: {weather.town}</p>
			</div>
			<div>
				<img src={`/images/svg/${temp.icon}.svg`} alt={temp.icon} />
			</div>
		</section>
	);
};
