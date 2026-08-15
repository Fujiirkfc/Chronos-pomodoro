import {
  HistoryIcon,
  HouseIcon,
  Languages,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './style.module.css';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';

    return storageTheme || 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const { t } = useTranslation();

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label={t('menu.home')}
        title={t('menu.home')}
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href="/history/"
        aria-label={t('menu.history')}
        title={t('menu.history')}
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href="/settings/"
        aria-label={t('menu.configurations')}
        title={t('menu.configurations')}
      >
        <SettingsIcon />
      </RouterLink>

      <RouterLink
        className={styles.menuLink}
        href="/language/"
        aria-label={t('menu.language')}
        title={t('menu.language')}
      >
        <Languages />
      </RouterLink>

      <a
        className={styles.menuLink}
        href="#"
        aria-label={t('menu.theme')}
        title={t('menu.theme')}
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
