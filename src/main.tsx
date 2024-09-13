import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalEstilo } from './global.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalEstilo/>
    <App />
  </StrictMode>,
)
