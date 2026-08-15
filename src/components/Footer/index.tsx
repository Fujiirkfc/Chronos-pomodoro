import { useTranslation } from 'react-i18next';

import styles from './style.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro">{t('about.title')}</RouterLink>{' '}
      <RouterLink href="/">
        Chronos pomodoro &copy; {new Date().getFullYear()} - {t('about.slogan')}
      </RouterLink>
    </footer>
  );
}
