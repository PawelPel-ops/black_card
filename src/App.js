import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './components/NotFound';
import Home from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
