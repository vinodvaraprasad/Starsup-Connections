import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Students from './pages/Students';
import Faculty from './pages/Faculty';
import Professionals from './pages/Professionals';
import Colleges from './pages/Colleges';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content-wrapper ${isSidebarOpen ? '' : 'expanded'}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
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
