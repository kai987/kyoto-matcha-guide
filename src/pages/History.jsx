import { useTranslation } from 'react-i18next';
import historyImg from 'src/assets/history.webp';

export default function History() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t('history.title')}</h2>
      <p>{t('history.text1')}      <img src={historyImg} alt="History" /></p>
      <p>{t('history.text2')}</p>
    </section>
  );
}