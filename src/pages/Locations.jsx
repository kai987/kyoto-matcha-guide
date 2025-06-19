import { useTranslation } from 'react-i18next';
import location1Img from 'src/assets/location1.webp';

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
      <img src={location1Img} alt="Locations" />
    </section>
  );
}