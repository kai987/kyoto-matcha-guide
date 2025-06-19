import { useTranslation } from 'react-i18next';

export default function History() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t('history.title')}</h2>
      <p>{t('history.text1')}      <img src="src/assets/history.webp" alt="History" /></p>
      <p>{t('history.text2')}</p>
    </section>
  );
}