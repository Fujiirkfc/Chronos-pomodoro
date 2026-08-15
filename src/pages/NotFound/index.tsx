import { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { RouterLink } from '../../components/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Not Found - Chronos';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>{t('notFound.title')}</Heading>
          <p>{t('notFound.p1')}</p>
          <p>
            <Trans i18nKey="notFound.p2">
              But don't worry, you're not lost in space (yet). You can safely go
              back to the <RouterLink href="/">main page</RouterLink>
              or <RouterLink href="/history">to the history</RouterLink> — or
              you can stay here and pretend you found a secret page that only
              the coolest explorers can access. 🧭✨
            </Trans>
          </p>
          <p>{t('notFound.p3')}</p>
          <p>{t('notFound.p4')}</p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
