import React from 'react';

export const Info = () => {
	return (
		<section className="info">
			<div className="info-desc">
				<h1 className="info-desc__temp">20°</h1>
				<p className="info-desc__today">Сегодня</p>
				<p className="info-desc__time">Время: 21:54</p>
				<p className="info-desc__town">Город: Санкт-Петербург</p>
			</div>
			<div>
				<img src="/images/sun.png" alt="" />
			</div>
		</section>
	);
};
