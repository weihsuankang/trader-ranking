import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TraderRankingPage from './pages/TraderRankingPage';
import TraderDetailsPage from './pages/TraderDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ranking" element={<TraderRankingPage />} />
        <Route path="/trader/:traderId" element={<TraderDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
