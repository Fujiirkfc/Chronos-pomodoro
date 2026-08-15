import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { RouterLink } from '../../components/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
  useEffect(() => {
    document.title = 'Learn about pomodoro technique - Chronos';
  }, []);

  const { t } = useTranslation();

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>{t('aboutPomodoro.title')}</Heading>

          <p>
            <Trans i18nKey="aboutPomodoro.description">
              The Pomodoro Technique is a productivity methodology created by
              <strong>Francesco Cirillo</strong>, which consists of dividing
              work into time blocks (the famous "Pomodoros") interspersed with
              breaks. The goal is to maintain total focus for a short period and
              ensure breaks to avoid mental fatigue.
            </Trans>
          </p>

          {/* <img src="https://placehold.co/1920x1080" alt="" /> */}

          <h2>{t('aboutPomodoro.how')}</h2>
          <ul>
            <li>
              <Trans i18nKey="aboutPomodoro.howOne">
                <strong>1. Define a task</strong> that you want to do.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="aboutPomodoro.howTwo">
                <strong>2. Work on that for 25 minutes</strong> without
                interruptions.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="aboutPomodoro.howThree">
                <strong>3. Take a 5 minutes short rest</strong>.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="aboutPomodoro.howFour">
                <strong>4. After every 4 cycles, take a long rest</strong>
                (usually 15 to 30 minutes).
              </Trans>
            </li>
          </ul>

          <h2>
            <Trans i18nKey="aboutPomodoro.but">
              But <strong>Chronos Pomodoro</strong> got a diferential 🚀
            </Trans>
          </h2>

          <p>{t('aboutPomodoro.butDescription')}</p>

          <h3>{t('aboutPomodoro.settings')}</h3>
          <p>
            <Trans i18nKey="aboutPomodoro.settingsDescription">
              "You can configure the focus time, short break, and long break
              however you want! Just access the
              <RouterLink href="/settings">settings page</RouterLink> and adjust
              the minutes as you prefer."
            </Trans>
          </p>

          <h3>{t('aboutPomodoro.details')}</h3>
          <p>{t('aboutPomodoro.detailsDescription')}</p>
          <p>
            <Trans i18nKey="aboutPomodoro.default">
              <strong>Our default:</strong>
            </Trans>
          </p>
          <ul>
            <li>
              <Trans i18nKey="aboutPomodoro.oddCycle">
                <strong> Odd cycles</strong>: Work (focus).
              </Trans>
            </li>
            <li>
              <Trans i18nKey="aboutPomodoro.evenCycle">
                <strong> Even cycles</strong>: Short rest.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="aboutPomodoro.eightCycle">
                <strong>Cycle no. 8</strong>: Special long rest, to reset the
                cycle.
              </Trans>
            </li>
          </ul>

          <h3>{t('aboutPomodoro.visualization')}</h3>
          <p>{t('aboutPomodoro.visualizationDescription')}</p>
          <ul>
            <li>{t('aboutPomodoro.yellowIcon')}</li>
            <li>{t('aboutPomodoro.greenIcon')}</li>
            <li>{t('aboutPomodoro.blueIcon')}</li>
          </ul>

          <p>{t('aboutPomodoro.iconDescription')}</p>

          <h3>{t('aboutPomodoro.automatic')}</h3>
          <p>
            <Trans i18nKey="aboutPomodoro.automaticDescription">
              All your completed tasks and cycles are saved in the
              <RouterLink href="/history">history</RouterLink>, with status as
              completed or interrupted. This way, you can track your progress
              over time.
            </Trans>
          </p>

          <h2>{t('aboutPomodoro.why')}</h2>
          <ul>
            <li>{t('aboutPomodoro.whyOne')}</li>
            <li>{t('aboutPomodoro.whyTwo')}</li>
            <li>{t('aboutPomodoro.whyThree')}</li>
            <li>{t('aboutPomodoro.whyFour')}</li>
          </ul>

          <p>
            <Trans i18nKey="aboutPomodoro.readyCall">
              <strong>Ready to focus?</strong> Let's go
              <RouterLink href="/">back to the home page</RouterLink> and start
              your Pomodoros! 🍅🚀
            </Trans>
          </p>

          <p>
            <Trans i18nKey="aboutPomodoro.quote">
              <em>"Total focus, no rush, no pause, just go!"</em> 💪🧘‍♂️
            </Trans>
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
