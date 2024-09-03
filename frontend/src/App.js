import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StudentProfile from './pages/StudentProfile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students/:id" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
