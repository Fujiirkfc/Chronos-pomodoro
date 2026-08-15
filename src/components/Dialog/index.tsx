import type { ToastContentProps } from 'react-toastify';
import { DefaultButton } from '../DefaultButton';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label={t('dialog.confirm')}
            title={t('dialog.confirm')}
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<ThumbsDownIcon />}
            color="red"
            aria-label={t('dialog.cancel')}
            title={t('dialog.cancel')}
          />
        </div>
      </div>
    </>
  );
}
