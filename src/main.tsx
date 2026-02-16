import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Navbar from './components/Navbar'
import LayoutPage from './pages/Layout';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LayoutPage />
  </StrictMode>,
  // hello
)

