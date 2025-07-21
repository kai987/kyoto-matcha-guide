import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import NavTabs from './components/NavTabs';
import Brewing from './pages/Brewing';
import History from './pages/History';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Types from './pages/Types';

function App() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('home');
  const PageComponent = {
    home: Home,
    history: History,
    types: Types,
    brewing: Brewing,
    locations: Locations,
    // contact: Contact
  }[activeTab];

  return (
    <div className="app">
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h1>Hello Kyoto 🍵</h1>
      </div>
      <header>
        <a className="link" href="https://dora-honor.github.io/leadership-kcgi/#/README" target="_blank"><h1>{t("title")}</h1></a>
        <LanguageSwitcher />
        <NavTabs activeTab={activeTab} onTabClick={setActiveTab} />
      </header>
      <motion.main
        key={activeTab}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <PageComponent />
      </motion.main>
      <footer>
        <p>© 2025 Kyoto Matcha Guide</p>
      </footer>
    </div>
  )
}

export default App
