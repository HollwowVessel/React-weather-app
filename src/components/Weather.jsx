import React from 'react';

export const Weather = () => {
	return (
		<section className="weather">
			<div className="weather-temp">
				<img src="/images/svg/temp.svg" alt="temp" />
				<span className="weather-type">Температура</span>
				<span className="weather-desc">20° - ощущается как 17°</span>
			</div>
			<div className="weather-pres">
				<img src="/images/svg/pres.svg" alt="pres" />
				<span className="weather-type">Давление </span>
				<span className="weather-desc">765 мм ртутного столба - нормальное</span>
			</div>
			<div className="weather-prec">
				<img src="/images/svg/prec.svg" alt="prec" />
				<span className="weather-type">Осадки</span>
				<span className="weather-desc">Без осадков</span>
			</div>
			<div className="weather-wind">
				<img src="/images/svg/wind.svg" alt="wind" />
				<span className="weather-type">Ветер</span>
				<span className="weather-desc">3 м/с юго-запад - легкий ветер</span>
			</div>
			<img
				src="/images/cloud.png"
				alt="Я тучка, тучка, тучка, я вовсе не медведь"
				className="cloud"
			/>
		</section>
	);
};
