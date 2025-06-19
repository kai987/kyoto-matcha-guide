import { useTranslation } from 'react-i18next';

export default function Brewing() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t('brewing.title')}</h2>
      <ol>
        {t('brewing.steps', { returnObjects: true }).map((s, i) => <li key={i}>{s}</li>)}
      </ol>
      <p>{t('brewing.extra')}</p>
      <img src="src/assets/Brewing.jpg" alt="Brewing" />
    </section>
  );
}