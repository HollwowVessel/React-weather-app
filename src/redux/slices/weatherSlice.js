import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useGeolocated } from 'react-geolocated';

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
	if (!info.city) {
		if (!info.lat || !info.lon) {
			return;
		}
		const [lat, lon] = [info.lat, info.lon];
		const dailyWeather = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${apiKey}`,
		)
			.then((res) => res.json())
			.then((data) => data.days[0]);
		return { ...dailyWeather, city };
	}
	const [lat, lon] = await getCoords(city);
	const dailyWeather = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${apiKey}`,
	)
		.then((res) => res.json())
		.then((data) => data.days[0]);
	return { ...dailyWeather, city };
});

const initialState = {
	dailyWeather: { temp: '', town: '', pres: '', prec: '', wind: '', feelsLike: '' },
	monthWeather: [],
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: {
		[getDailyWeather.fulfilled]: (state, action) => {
			let hours = new Date().getHours();
			let info = action.payload.hours[hours - 1];
			console.log(info);
			state.dailyWeather = {
				temp: (info.temp - 32) * (5 / 9),
				town: action.payload.city,
				pres: action.payload.pressure,
				humidity: info.humidity,
				windSpeed: info.windspeed,
				windDir: info.winddir,
				feelsLike: (info.feelslike - 32) * (5 / 9),
			};
		},
	},
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
