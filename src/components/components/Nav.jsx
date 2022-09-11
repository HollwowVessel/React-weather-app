/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

export const Nav = ({ active, click }) => {
  const mock = ['неделю', '10 дней', '15 дней'];

  const handleKeyup = (id, e) => {
    if (e.target.key === 'Space' || e.target.key === 'Enter') {
      click(id);
    }
  };

  return (
    <nav className="nav-forecast">
      <ul className="nav-menu">
        {mock.map((name, id) => (
          <li
            key={name}
            className={active === id ? 'nav-menu__btn active' : 'nav-menu__btn'}
            onClick={click(id)}
            onKeyUp={(e) => handleKeyup(id, e)}
          >
            На {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
