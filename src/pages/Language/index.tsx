import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import { LanguageSelector } from '../../components/LanguageSelector';

export function Language() {
  useEffect(() => {
    document.title = 'Chronos';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <LanguageSelector />
      </Container>
    </MainTemplate>
  );
}
