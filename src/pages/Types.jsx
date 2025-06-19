import { useTranslation } from 'react-i18next';

export default function Types() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t('types.title')}</h2>
      <ul>
        {t('types.grades', { returnObjects: true }).map((g, i) => <li key={i}>{g}</li>)}
      </ul>
      <p>{t('types.select')}</p>
      <img src="src/assets/Types.jpg" alt="Types" />
    </section>
  );
}