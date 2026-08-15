import { useTranslation } from 'react-i18next';
import styles from './style.module.css';
import { DefaultButton } from '../DefaultButton';

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'ja', label: 'JA', name: '日本語' },
] as const;

export function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (code: string) => {
    void i18n.changeLanguage(code);
  };

  return (
    <div
      className={styles.languageSwitcher}
      role="group"
      aria-label={t('menu.language')}
    >
      {languages.map(({ code, name }) => (
        <DefaultButton
          key={code}
          onClick={() => handleLanguageChange(code)}
          className={`${styles.languageButton} ${
            i18n.language === code ? styles.active : ''
          }`}
          aria-pressed={i18n.language === code}
        >
          {name}
        </DefaultButton>
      ))}
    </div>
  );
}
