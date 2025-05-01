// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import HomePage from './pages/Home/HomePage';
import MammalsPage from './pages/Mammals/MammalsPage';
import BirdsPage from './pages/Birds/BirdsPage';
import ReptilesPage from './pages/Reptiles/ReptilesPage';
import AnimalDetailPage from './pages/AnimalDetailPage/AnimalDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mammals" element={<MammalsPage />} />
          <Route path="birds" element={<BirdsPage />} />
          <Route path="reptiles" element={<ReptilesPage />} />
          <Route path="animal/:id" element={<AnimalDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;