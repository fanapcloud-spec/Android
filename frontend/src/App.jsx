import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold">{t('welcome')}</h1>
      <p>{t('description')}</p>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
