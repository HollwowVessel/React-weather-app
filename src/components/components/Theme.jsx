import React, { useState } from 'react';

export const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  function changeTheme() {
    document.querySelector('body').classList.toggle('dark');

    if (theme === 'dark') {
      localStorage.setItem('theme', '');
    } else {
      localStorage.setItem('theme', 'dark');
    }

    setTheme(theme === 'dark' ? '' : 'dark');
  }

  if (theme === 'dark') {
    document.querySelector('body').classList.add('dark');
  }

  return (
    <button onClick={changeTheme} type="button" className="themeButton">
      <img
        src="/images/svg/theme.svg"
        alt="theme"
        style={{ cursor: 'pointer' }}
      />
    </button>
  );
};
