import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'A4ULLKBTWLMSHXMP4F9SBAD4A';

async function getCoords(city) {
	const getCoords = await fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=621f423370a8a66c2773737f98d72ba6`,
	)
		.then((res) => res.json())
		.then((data) => [data[0].lat, data[0].lon]);
	return getCoords;
}

export const getDailyWeather = createAsyncThunk('dailyWeather', async (info) => {
	const city = info.city;
	if (!info.city.length) {
		if (!info.lat || !info.lon) {
			return;
		}
		const [lat, lon] = [info.lat, info.lon];
		const city = await fetch(
			`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=621f423370a8a66c2773737f98d72ba6`,
		)
			.then((res) => res.json())
			.then((data) => data[0].local_names.ru);
		const dailyWeather = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${apiKey}`,
		)
			.then((res) => res.json())
			.then((data) => data.days);
		return [...dailyWeather, city];
	}
	const [lat, lon] = await getCoords(city);

	const dailyWeather = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${apiKey}`,
	)
		.then((res) => res.json())
		.then((data) => data.days);

	return [...dailyWeather, city];
});

const initialState = {
	dailyWeather: { temp: '', town: '', pres: '', prec: '', wind: '', feelsLike: '' },
	decadeWeather: [],
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: {
		[getDailyWeather.fulfilled]: (state, action) => {
			if (!action.payload) return;
			let hours = new Date().getHours();
			let info = action.payload[0].hours[hours - 1];
			state.dailyWeather = {
				temp: (info.temp - 32) * (5 / 9),
				town: action.payload[action.payload.length - 1],
				pres: action.payload[0].pressure,
				humidity: info.humidity,
				windSpeed: info.windspeed,
				windDir: info.winddir,
				feelsLike: (info.feelslike - 32) * (5 / 9),
			};
			state.decadeWeather = [...action.payload];
		},
	},
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
