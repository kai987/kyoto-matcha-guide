import { useTranslation } from 'react-i18next';
import homeImg from 'src/assets/home.jpg';

export default function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t('home.title')}</h2>
      <p>{t('home.desc')}</p>
      <img src={homeImg} alt="Matcha" />
    </section>
  );
}