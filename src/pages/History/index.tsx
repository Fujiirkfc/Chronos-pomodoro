import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { DefaultButton } from '../../components/DefaultButton';
import styles from './style.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { showMessage } from '../../adapter/showMessage';

export function History() {
  const { t } = useTranslation();
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmCleanHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;

  const confirmMessage = t('history.confirm');

  const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  useEffect(() => {
    document.title = 'History - Chronos';
  }, []);

  useEffect(() => {
    setSortTaskOptions((prevState) => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
    if (!confirmClearHistory) return console.log('RESET history');
    setConfirmCleanHistory(false);

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }, [confirmClearHistory, dispatch]);

  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';
    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm(confirmMessage, (reason) => {
      setConfirmCleanHistory(reason);
    });
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>{t('history.title')}</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color="red"
              aria-label={t('history.delete')}
              title={t('history.delete')}
              onClick={handleResetHistory}
            />
          </span>
        </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: 'name' })}
                    className={styles.thSort}
                  >
                    {t('history.task')}
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'duration' })}
                    className={styles.thSort}
                  >
                    {t('history.duration')}
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                    className={styles.thSort}
                  >
                    {t('history.date')}
                  </th>
                  <th>{t('history.status')}</th>
                  <th>{t('history.type')}</th>
                </tr>
              </thead>
              <tbody>
                {sortTasksOptions.tasks.map((task) => {
                  const taskTypeDictionary = {
                    workTime: 'focus',
                    shortBreakTime: 'shortRest',
                    longBreakTime: 'longRest',
                  };

                  const taskStatus = t(
                    `history.${taskTypeDictionary[task.type]}`,
                  );
                  const taskType = t(
                    `history.${getTaskStatus(task, state.activeTask)}`,
                  );

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{taskType}</td>
                      <td>{taskStatus}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {!hasTasks && <p>{t('history.noTask')}</p>}
      </Container>
    </MainTemplate>
  );
}
