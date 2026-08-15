import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { useTranslation } from 'react-i18next';

import styles from './style.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });
  const { t } = useTranslation();

  const cycleDescriptionMap = {
    workTime: 'focus',
    shortBreakTime: 'short rest',
    longBreakTime: 'long rest',
  };
  return (
    <div className={styles.cycles}>
      <span>{t('cycles.title')}</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`${cycleDescriptionMap[nextCycleType]} ${t('cycles.indicator')}`}
              title={`${cycleDescriptionMap[nextCycleType]} ${t('cycles.indicator')}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
