import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TailwindIndicator } from './components/util-component/Indicator.tsx'
import { CookiesProvider } from 'react-cookie'
import { Toaster } from "./components/ui/toaster"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CookiesProvider defaultSetOptions={{ path: '/'}}>
        <App />
        <Toaster />
      </CookiesProvider>
    <TailwindIndicator/>
  </React.StrictMode>,
)
