import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import clsx from "clsx";
import App from './components/App/App';

// Нормалізація стилів
import "modern-normalize"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
