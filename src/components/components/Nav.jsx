import React from 'react';

export const Nav = (prop) => {
  const mock = ['неделю', '10 дней', '15 дней'];

  return (
    <nav className="nav-forecast">
      <ul className="nav-menu">
        {mock.map((name, id) => (
          <li
            key={name}
            className={
              prop.active === id ? 'nav-menu__btn active' : 'nav-menu__btn'
            }
            onClick={() => prop.click(id)}
          >
            На {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
