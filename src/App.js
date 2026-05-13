import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import ContactUs from './pages/ContactUs';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Parents from './pages/Parents';
import Students from './pages/Students';
import Subjects from './pages/Subjects';
import Teachers from './pages/Teachers';
import Timetable from './pages/Timetable';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/students" element={<Students />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
