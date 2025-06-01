import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Add event listener for keyboard navigation
document.addEventListener('keydown', (e) => {
  // Add focus styles for keyboard navigation
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

// Remove focus styles when mouse is used
document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
