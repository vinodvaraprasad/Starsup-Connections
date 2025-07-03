import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  LayoutDashboard,
  BookOpen,
  FolderKanban,
  FileText,
  Rocket,
  Briefcase,
  Factory,
  Mic,
  Bug,
  Archive,
  FlaskConical
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">STARUPS</span>
      </div>

      {/* Overview Section */}
      <div className="sidebar-section">
        <p className="sidebar-title">Overview</p>
        <NavLink to="/" className="nav-link">
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>
      </div>

      {/* Learning Section */}
      <div className="sidebar-section">
        <p className="sidebar-title">Learning</p>
        <NavLink to="/courses" className="nav-link">
          <BookOpen size={18} />
          Courses
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          <FolderKanban size={18} />
          Projects
        </NavLink>
        <NavLink to="/research-papers" className="nav-link">
          <FileText size={18} />
          Research Papers
        </NavLink>
      </div>

      {/* Opportunities Section */}
      <div className="sidebar-section">
        <p className="sidebar-title">Opportunities</p>
        <NavLink to="/startups" className="nav-link">
          <Rocket size={18} />
          Startups
        </NavLink>
        <NavLink to="/jobs-internships" className="nav-link">
          <Briefcase size={18} />
          Jobs & Internships
        </NavLink>
        <NavLink to="/industrial-visits" className="nav-link">
          <Factory size={18} />
          Industrial Visits
        </NavLink>
        <NavLink to="/expert-seminars" className="nav-link">
          <Mic size={18} />
          Expert Seminars
        </NavLink>
        <NavLink to="/hackathons" className="nav-link">
          <Bug size={18} />
          Hackathons
        </NavLink>
      </div>

      {/* Resources Section */}
      <div className="sidebar-section">
        <p className="sidebar-title">Resources</p>
        <NavLink to="/tech-updates" className="nav-link">
          <Archive size={18} />
          Tech Updates
        </NavLink>
        <NavLink to="/startup-labs" className="nav-link">
          <FlaskConical size={18} />
          Startups Labs
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
