import React from 'react';
import PageHeader from '../components/PageHeader';

const Faculty = () => {
  const facultyMembers = [
    { name: 'Dr. Anil Kumar', initial: 'A' },
    { name: 'Prof. Meena Joshi', initial: 'M' },
    { name: 'Dr. Rajiv Reddy', initial: 'R' },
    { name: 'Dr. Pooja Shah', initial: 'P' },
    { name: 'Prof. Suresh Rao', initial: 'S' },
    { name: 'Dr. Kavita Bhat', initial: 'K' },
    { name: 'Prof. Neeraj Singh', initial: 'N' },
    { name: 'Dr. Latha Iyer', initial: 'L' },
    { name: 'Prof. Arvind Chauhan', initial: 'A' },
    { name: 'Dr. Geeta Nair', initial: 'G' }
  ];

  return (
    <div className="page">
      <PageHeader
        title="Faculty"
        subtitle="Connect with faculty members and subject matter experts from top institutions."
      />
      <div className="horizontal-scroll">
        {facultyMembers.map((faculty, index) => (
          <div className="student-card" key={index}>
            <div className="avatar">{faculty.initial}</div>
            <h4>{faculty.name}</h4>
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

export default Faculty;
