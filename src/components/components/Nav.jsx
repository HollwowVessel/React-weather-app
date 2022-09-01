import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Nav = (prop) => {
	const mock = ['неделю', '10 дней'];

	return (
		<nav className="nav-forecast">
			<ul className="nav-menu">
				{mock.map((name, id) => (
					<li
						key={name}
						className={prop.active === id ? 'nav-menu__btn active' : 'nav-menu__btn'}
						onClick={() => prop.click(id)}>
						На {name}
					</li>
				))}
			</ul>
		</nav>
	);
};
