import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')} className="px-2 py-1 border rounded">
        English
      </button>
      <button onClick={() => changeLanguage('fa')} className="px-2 py-1 border rounded">
        فارسی
      </button>
    </div>
  );
};

export default LanguageSwitcher;
