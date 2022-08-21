import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Consultations from './pages/consultations';
import Formations from './pages/formations';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to='formations' replace />}/>
        <Route path='formations' element={<Formations/>}/>
        <Route path='consultations' element={<Consultations/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
