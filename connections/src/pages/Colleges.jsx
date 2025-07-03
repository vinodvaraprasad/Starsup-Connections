import React from 'react';
import PageHeader from '../components/PageHeader';

const Colleges = () => {
  const colleges = [
    { name: 'NIT Warangal', initial: 'N' },
    { name: 'IIT Hyderabad', initial: 'I' },
    { name: 'OU', initial: 'O' },
    { name: 'JNTU', initial: 'J' },
    { name: 'BITS Pilani', initial: 'B' },
    { name: 'SRM University', initial: 'S' },
    { name: 'VIT Vellore', initial: 'V' },
    { name: 'IIIT Basara', initial: 'I' },
    { name: 'CBIT', initial: 'C' },
    { name: 'MGIT', initial: 'M' }
  ];

  return (
    <div className="page">
      <PageHeader
        title="Colleges"
        subtitle="Explore top colleges and universities to collaborate with students and faculty."
      />
      <div className="horizontal-scroll">
        {colleges.map((college, index) => (
          <div className="student-card" key={index}>
            <div className="avatar">{college.initial}</div>
            <h4>{college.name}</h4>
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

export default Colleges;
