import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme('light')} className="px-2 py-1 border rounded">
        Light
      </button>
      <button onClick={() => setTheme('dark')} className="px-2 py-1 border rounded">
        Dark
      </button>
    </div>
  );
};

export default ThemeSwitcher;
