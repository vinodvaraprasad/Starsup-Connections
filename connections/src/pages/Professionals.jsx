import React from 'react';
import PageHeader from '../components/PageHeader';

const Professionals = () => {
  const professionals = [
    { name: 'Ravi Kumar', initial: 'R' },
    { name: 'Sneha Patel', initial: 'S' },
    { name: 'Arjun Reddy', initial: 'A' },
    { name: 'Priya Singh', initial: 'P' },
    { name: 'Rahul Dev', initial: 'R' },
    { name: 'Deepika Joshi', initial: 'D' },
    { name: 'Manish Mehra', initial: 'M' },
    { name: 'Ishita Verma', initial: 'I' },
    { name: 'Karthik Rao', initial: 'K' },
    { name: 'Anjali Nair', initial: 'A' }
  ];

  return (
    <div className="page">
      <PageHeader
        title="Professionals"
        subtitle="Discover working professionals and connect for opportunities and mentorship."
      />
      <div className="horizontal-scroll">
        {professionals.map((pro, index) => (
          <div className="student-card" key={index}>
            <div className="avatar">{pro.initial}</div>
            <h4>{pro.name}</h4>
            <div className="card-actions">
              <button className="connect-btn">Connect</button>
              <span className="chat-icon">💬</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
