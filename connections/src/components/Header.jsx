import React from 'react';
import { Menu, Bell, Mail, User, Star } from 'lucide-react';

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="top-header">
      <button className="hamburger" onClick={onToggleSidebar}>
        <Menu size={24} />
      </button>
      <div className="right-icons">
        <div className="points">
          <Star size={16} style={{ marginRight: '6px', color: '#facc15' }} />
          450 STAR points
        </div>
        <Mail size={20} />
        <Bell size={20} />
        <User size={20} />
      </div>
    </div>
  );
};

export default Header;
