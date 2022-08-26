import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Consultations from './pages/consultations';
import Formations from './pages/formations';
import Header from './components/header';
import Footer from './components/footer';
import './styles/pages/_base.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='*' element={<Navigate to='formations' replace />}/>
        <Route path='formations' element={<Formations/>}/>
        <Route path='consultations' element={<Consultations/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
