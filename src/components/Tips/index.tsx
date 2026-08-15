import { useTranslation } from 'react-i18next';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const { t } = useTranslation();

  const tipsForWhenActiveTask = {
    workTime: (
      <span>{t('tips.workTimeFocus', { minutes: state.config.workTime })}</span>
    ),
    shortBreakTime: (
      <span>
        {t('tips.shortBreakFocus', { minutes: state.config.shortBreakTime })}
      </span>
    ),
    longBreakTime: <span>{t('tips.longBreakFocus')}</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>{t('tips.workTimeRest', { minutes: state.config.workTime })}</span>
    ),
    shortBreakTime: (
      <span>
        {t('tips.shortTimeRest', { minutes: state.config.shortBreakTime })}
      </span>
    ),
    longBreakTime: <span>{t('tips.longTimeRest')}</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
