/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'A4ULLKBTWLMSHXMP4F9SBAD4A';
<<<<<<< HEAD

async function getCoords(city) {
  const getCoordsInfo = await fetch(
=======
const googleApiKey = 'AIzaSyBSJnDcezlNZKJGFvkvzpGnsIXP-L1P-Nk'; // NO API KEYS IN OPEN REPOSITORY!!!
// YOU SHOULD USE .env (built-in library according create-react-app docs) https://create-react-app.dev/docs/adding-custom-environment-variables/

async function getCoords(city) {
  const getCoords = await fetch(
>>>>>>> dc278255d955628ee8c5aa6eda4f1ea9b04275d0
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=621f423370a8a66c2773737f98d72ba6`
  )
    .then((res) => res.json())
    .then((data) => [data[0].lat, data[0].lon]);
<<<<<<< HEAD
  return getCoordsInfo;
=======
  // async/await with promise syntax? You must choose one way

  /* const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=621f423370a8a66c2773737f98d72ba6`
  );
  const json = await res.json();
  return [json[0].lat, json[0].lon];
  */

  // You don't have to use an await before the return statement
  // https://kanby.medium.com/%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-return-await-%D0%BF%D0%BB%D0%BE%D1%85%D0%B0%D1%8F-%D0%B8%D0%B4%D0%B5%D1%8F-e87b70015f0c

  return getCoords;
>>>>>>> dc278255d955628ee8c5aa6eda4f1ea9b04275d0
}

export const getDailyWeather = createAsyncThunk(
  'dailyWeather',
  async (info) => {
<<<<<<< HEAD
    const { city } = info;
=======
    const { city } = info; // Destructuring creates variables with names. Conflict with line 37
>>>>>>> dc278255d955628ee8c5aa6eda4f1ea9b04275d0
    if (!info.city.length) {
      if (!info.lat || !info.lon) {
        return;
      }
      const [lat, lon] = [info.lat, info.lon];
      const city = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=621f423370a8a66c2773737f98d72ba6`
      )
        .then((res) => res.json())
        .then((data) => data[0].local_names.ru);
      const dailyWeather = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => data.days);
      return [...dailyWeather, city];
    }
    const [lat, lon] = await getCoords(city);

    const dailyWeather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => data.days);

    return [...dailyWeather, city];
  }
);

const initialState = {
  dailyWeather: {
    temp: '',
    town: '',
    pres: '',
    prec: '',
    wind: '',
    feelsLike: '',
  },
  decadeWeather: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [getDailyWeather.fulfilled]: (state, action) => {
      // If you are using redux toolkit and createAsyncThunk then prefer to use and builder (builder.addCase).
      // Simple example: https://github.com/pooooz/ReactJS-basics/blob/alternative/src/store/dialogues/slice.ts
      // https://redux-toolkit.js.org/api/createAsyncThunk
      if (!action.payload) return;
      const hours = new Date().getHours();
      const info = action.payload[0].hours[hours - 1]; // Strange bug))))) Now, when I edit your code, I have 0:25. This means that hours are 0 and hours-1 bad idea)))
      // And pay attention to the fact that the linter swears
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

<<<<<<< HEAD
=======
export const {} = weatherSlice.actions; // ???

>>>>>>> dc278255d955628ee8c5aa6eda4f1ea9b04275d0
export default weatherSlice.reducer;
