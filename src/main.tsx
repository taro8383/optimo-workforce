import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import App from './App.tsx'
import './index.css'

// Handle GitHub Pages redirect
const redirectPath = sessionStorage.getItem('redirectPath')
if (redirectPath) {
  sessionStorage.removeItem('redirectPath')
  // Replace the current URL with the original path
  window.history.replaceState(null, '', redirectPath)
}

// Debug language detection
console.log('Initial language:', i18n.language)
i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng)
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
