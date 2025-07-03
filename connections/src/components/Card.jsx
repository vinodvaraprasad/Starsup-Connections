// src/components/Card.js
import React from 'react';
import { UserPlus, MessageSquare } from 'lucide-react';

const Card = ({ name, location }) => {
  return (
    <div className="card">
      <div className="circle">{name.charAt(0)}</div>
      <h3>{name}</h3>
      <p>{location}</p>
      <div className="actions">
        <button className="connect-btn">
          <UserPlus size={16} />
          Connect
        </button>
        <button className="message-btn">
          <MessageSquare size={16} />
        </button>
      </div>
    </div>
  );
};

export default Card;
