import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MedicinePage from './components/MedicinePage';
import StockPage from './components/StockPage';
import '../css/DarkVeil.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
const path = window.location.pathname;
if (path === '/stock') {
	root.render(<StockPage />);
} else {
	root.render(<MedicinePage />);
}
