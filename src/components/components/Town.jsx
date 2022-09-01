import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { getDailyWeather } from '../../redux/slices/weatherSlice';

export const Town = () => {
	const dispatch = useDispatch();

	const [text, setText] = useState('');
	const [active, setActive] = useState(false);
	const [suggestions, setSuggestions] = useState([]);

	function getWeather(name) {
		const city = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
		console.log(city);
		dispatch(getDailyWeather({ city, lat: '', lon: '' }));
		setText('');
		setActive(false);
		setSuggestions([]);
	}

	function handleKeyUp(e) {
		if (e.key != 'Enter') {
			return;
		}
		getWeather(e.target.value);
	}

	function handleClick(name) {
		console.log(name);
		setText(name);
		setActive(false);
		getWeather(name);
	}

	useEffect(() => {
		async function fetchData() {
			if (text) {
				const data = await fetch(
					`https://api.locationiq.com/v1/autocomplete?key=pk.164249adb7bf93332d519071082cbfce&q=${text}`,
				)
					.then((res) => res.json())
					.then((data) => data);
				let res = [];
				for (let i = 1; i < data.length; i++) {
					if (
						data[i].address.name === data[i - 1].address.name &&
						data[i].address.country === data[i - 1].address.country
					) {
						res.push(data[i]);
						i++;
					} else {
						res.push(data[i]);
					}
				}
				setSuggestions(res.slice(0, 5));
			} else {
				return;
			}
		}
		fetchData();
	}, [text]);

	return (
		<>
			<div className="autocomplete">
				<input
					placeholder="Введите город"
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyUp={(e) => handleKeyUp(e)}
					onClick={() => setActive((prev) => !prev)}
				/>
				{active && (
					<div className="suggestion">
						<ul>
							{suggestions.length > 0
								? suggestions.map((obj, id) => (
										<li key={id} onClick={() => handleClick(obj.address.name)}>
											{obj.address.name}, {obj.address.country}
										</li>
								  ))
								: undefined}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};
