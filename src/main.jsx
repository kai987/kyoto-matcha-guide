import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './i18n';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter basename="/kyoto-matcha-guide"> */}
      <App />
    {/* </BrowserRouter> */}
  </StrictMode>,
)
