import { useTranslation } from 'react-i18next';
import typesImg from 'src/assets/types.jpg';

export default function Types() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t('types.title')}</h2>
      <ul>
        {t('types.grades', { returnObjects: true }).map((g, i) => <li key={i}>{g}</li>)}
      </ul>
      <p>{t('types.select')}</p>
      <img src={typesImg} alt="Types" />
    </section>
  );
}