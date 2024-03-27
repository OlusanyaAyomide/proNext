import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TailwindIndicator } from './components/util-component/Indicator.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <TailwindIndicator/>
  </React.StrictMode>,
)
