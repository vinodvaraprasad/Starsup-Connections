
import React from 'react';
import { Star, Mail, Bell, Settings, UserCircle, Power } from 'lucide-react';

const Header = () => {
  return (
    <div className="top-header">
      <div className="right-icons">
        <div className="points">
          <Star size={18} style={{ marginRight: '6px', color: '#facc15' }} />
          <span>1,250</span>
        </div>
        <Mail size={20} />
        <Bell size={20} />
        <Settings size={20} />
        <UserCircle size={22} />
        <Power size={20} />
      </div>
    </div>
  );
};

export default Header;
