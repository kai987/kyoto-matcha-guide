import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <select
      id={"language-switcher"}
      value={i18n.language}
      onChange={e => i18n.changeLanguage(e.target.value)}
    >
      <option value="ja">日本語</option>
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
  );
}
