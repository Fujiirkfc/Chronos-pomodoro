import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { showMessage } from '../../adapter/showMessage';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const { t } = useTranslation();

  // tips

  function handleCreateNewtask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    const warningMessage = t('mainform.warning');
    const successMessage = t('mainform.success');

    if (!taskName) {
      showMessage.warning(warningMessage);
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
    showMessage.success(successMessage);
  }

  function handleInterruptTask() {
    showMessage.dismiss();
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewtask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText={t('mainform.title')}
          id="meu_id"
          type="text"
          placeholder={t('mainform.placeholder')}
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}
      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            aria-label={t('mainform.start')}
            title={t('mainform.start')}
            type="submit"
            icon={<PlayCircleIcon />}
            key="Submit button"
          />
        ) : (
          <DefaultButton
            aria-label={t('mainform.cancel')}
            title={t('mainform.cancel')}
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            key="Dont submit button"
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
