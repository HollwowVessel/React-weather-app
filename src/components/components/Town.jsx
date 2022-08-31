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
		console.log('Start');
		dispatch(getDailyWeather({ city: text, lat: '', lon: '' }));
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
