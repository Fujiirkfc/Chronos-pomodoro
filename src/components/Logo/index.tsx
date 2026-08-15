import { TimerIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './style.module.css';
import { RouterLink } from '../RouterLink';

export function Logo() {
  const { t } = useTranslation();

  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logoLink} href="/">
        <TimerIcon />
        <span>{t('logo.title')}</span>
      </RouterLink>
    </div>
  );
}
