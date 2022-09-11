import React from 'react';

export const Nav = ({ active, click }) => {
  const mock = ['неделю', '10 дней', '15 дней'];

  return (
    <nav className="nav-forecast">
      <ul className="nav-menu">
        {mock.map((name, id) => (
          <li
            key={name}
            className={active === id ? 'nav-menu__btn active' : 'nav-menu__btn'}
            onClick={() => click(id)}
          >
            На {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
