import { useTranslation } from 'react-i18next';

export default function Locations() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t('locations.title')}</h2>
      <p>{t('locations.desc')}</p>
      <ul>
        <li>{t('locations.spot1')}</li>
        <li>{t('locations.spot2')}</li>
        <li>{t('locations.spot3')}</li>
      </ul>
      <img src="src/assets/Location1.webp" alt="Locations" />
    </section>
  );
}