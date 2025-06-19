import { useTranslation } from 'react-i18next';
export default function NavTabs({ activeTab, onTabClick }) {
  const { t } = useTranslation();
    const tabs = [
        'home',
        'history',
        'types',
        'brewing',
        'locations',
        // 'contact'
    ];
  return (
    <nav className="tabs">
      {tabs.map(id => (
        <button
          key={id}
          className={activeTab === id ? 'active' : ''}
          onClick={() => onTabClick(id)}
        >
          {t(`nav.${id}`)}
        </button>
      ))}
    </nav>
  );
}