import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t('home.title')}</h2>
      <p>{t('home.desc')}</p>
      <img src="src/assets/home.jpg" alt="Matcha" />
    </section>
  );
}