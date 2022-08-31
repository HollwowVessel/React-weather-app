import React, { useState } from 'react';

export const Nav = () => {
	const mock = ['неделю', 'месяц', '10 дней'];
	const [active, setActive] = useState(0);
	return (
		<nav className="nav-forecast">
			<ul className="nav-menu">
				{mock.map((name, id) => (
					<li
						key={name}
						className={active === id ? 'nav-menu__btn active' : 'nav-menu__btn'}
						onClick={() => setActive(id)}>
						На {name}
					</li>
				))}
			</ul>
		</nav>
	);
};
