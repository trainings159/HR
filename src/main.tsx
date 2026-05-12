import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Login } from './components/login';
import { AuthProvider } from './store/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)