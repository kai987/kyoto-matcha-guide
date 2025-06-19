import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState(null);
  const handleSubmit = async e => {
    e.preventDefault();
    const form = { name: e.target.name.value, email: e.target.email.value, message: e.target.message.value };
    const res = await fetch('http://localhost:8000/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    const data = await res.json();
    setStatus(data.message);
    e.target.reset();
  };
  return (
    <section>
      <h2>{t('contact.title')}</h2>
      <form onSubmit={handleSubmit}>
        <label>{t('contact.name')}</label><br />
        <input name="name" required /><br /><br />
        <label>{t('contact.email')}</label><br />
        <input type="email" name="email" required /><br /><br />
        <label>{t('contact.message')}</label><br />
        <textarea name="message" rows="5" required></textarea><br /><br />
        <button type="submit">{t('contact.send')}</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}