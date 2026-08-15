import { SaveIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { DefaultButton } from '../../components/DefaultButton';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapter/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation();
  const numberError = t('settings.numberError');
  const shortFocusError = t('settings.shortFocusError');
  const shortRestError = t('settings.shortRestError');
  const longRestError = t('settings.longRestError');
  const successMessage = t('settings.success');

  useEffect(() => {
    document.title = 'Configuration - Chronos';
  }, []);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];
    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push(numberError);
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push(shortFocusError);
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push(shortRestError);
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push(longRestError);
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success(successMessage);
  }
  return (
    <MainTemplate>
      <Container>
        <Heading>{t('settings.title')}</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>{t('settings.description')}</p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText={t('settings.focus')}
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText={t('settings.shortRest')}
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText={t('settings.longRest')}
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label={t('settings.save')}
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
