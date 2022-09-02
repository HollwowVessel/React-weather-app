import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getDailyWeather } from '../../redux/slices/weatherSlice';

export const Town = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	function handleKeyUp(e) {
		if (e.key != 'Enter') {
			return;
		}
		if (!text) {
			return alert('Введите город');
		}
		let city = text.slice(0, 1).toUpperCase() + text.slice(1, text.length).toLowerCase();
		dispatch(getDailyWeather({ city, lat: '', lon: '' }));
		setText('');
	}
	return (
		<input
			placeholder="Введите город"
			value={text}
			onChange={(e) => setText(e.target.value)}
			onKeyUp={(e) => handleKeyUp(e)}
		/>
	);
};
