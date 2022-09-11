import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { getDailyWeather } from '../../redux/slices/weatherSlice';

function reducer(state, action) {
  switch (action.type) {
    case 'setSuggestions': {
      return { ...state, suggestions: action.payload };
    }
    case 'change': {
      return { ...state, ...action.payload };
    }
    case 'weather': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export const Town = () => {
  const dispatch = useDispatch();

  const [state, setState] = useReducer(reducer, { text: '', suggestions: [] });

  function getWeather(name) {
    const city =
      name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
    dispatch(getDailyWeather({ city, lat: '', lon: '' }));
    setState({ type: 'weather', payload: { text: '', suggestions: [] } });
  }

  function handleKeyUp(e) {
    if (e.key !== 'Enter') {
      return;
    }
    if (!state.text.length) {
      return alert('Введите город');
    }
    const city =
      state.text.slice(0, 1).toUpperCase() +
      state.text.slice(1, state.text.length).toLowerCase();
    dispatch(getDailyWeather({ city, lat: '', lon: '' }));
    getWeather(e.target.value);
  }

  function handleChange(name) {
    setState({ type: 'change', payload: { text: name } });
  }

  useEffect(() => {
    async function fetchData() {
      if (state.text && state.text.length) {
        const fetchRes = await fetch(
          `https://api.locationiq.com/v1/autocomplete?key=pk.164249adb7bf93332d519071082cbfce&q=${state.text}`
        )
          .then((res) => res.json())
          .then((data) => data);
        const res = [];
        for (let i = 1; i < fetchRes.length; i++) {
          if (fetchRes[i].address.name === fetchRes[i - 1].address.name) {
            res.push(fetchRes[i]);
            i++;
          } else {
            res.push(fetchRes[i]);
          }
        }
        setState({ type: 'setSuggestions', payload: res.slice(0, 5) });
      }
    }
    fetchData();
  }, [state.text]);

  return (
    <div className="autocomplete">
      <input
        placeholder="Введите город"
        value={state.text}
        onChange={(e) => handleChange(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
        list="towns"
      />
      <div className="suggestion">
        <datalist id="towns">
          {state.suggestions.length > 0
            ? state.suggestions.map((obj) => (
                <option key={obj.address.name}>{obj.address.name}</option>
              ))
            : undefined}
        </datalist>
      </div>
    </div>
  );
};
