import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/reset.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import i18next from 'i18next';
import { escape } from 'lodash';
import { I18nextProvider } from 'react-i18next';
import global_en from './translation/en/global.json'
import global_kh from './translation/kh/global.json'
const queryClient = new QueryClient()

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: global_en,
    },
    kh: {
      global: global_kh,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
      </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();