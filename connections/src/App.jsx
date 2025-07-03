import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Students from './pages/Students';
import Faculty from './pages/Faculty';
import Professionals from './pages/Professionals';
import Colleges from './pages/Colleges';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="app">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main content wrapper shifted right due to fixed sidebar */}
      <div className="main-content-wrapper">
        {/* Top Header with icons (star points, bell, mail, user) */}
        <Header />

        {/* Page content */}
        <div className="main-content">
          <Routes>
            {/* Show Dashboard page at root */}
            <Route path="/" element={<Dashboard />} />

            {/* Functional pages */}
            <Route path="/students" element={<Students />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/professionals" element={<Professionals />} />
            <Route path="/colleges" element={<Colleges />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
