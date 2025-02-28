import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import './context/translations.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
