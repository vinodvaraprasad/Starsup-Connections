import React from 'react';
import PageHeader from '../components/PageHeader';

const Students = () => {
  const students = [
    { name: 'Vinod Chinni', initial: 'V' },
    { name: 'Aarav Mehta', initial: 'A' },
    { name: 'Divya Sharma', initial: 'D' },
    { name: 'Rohan Gupta', initial: 'R' },
    { name: 'Meera Jain', initial: 'M' },
    { name: 'Sanjay Rao', initial: 'S' },
    { name: 'Nisha Das', initial: 'N' },
    { name: 'Pranav Kulkarni', initial: 'P' },
    { name: 'Kiran Patel', initial: 'K' },
    { name: 'Ritika Singh', initial: 'R' }
  ];

  return (
    <div className="page">
      <PageHeader
        title="Students"
        subtitle="Connect with students, faculty, professionals, colleges, and companies."
      />
      <div className="horizontal-scroll">
        {students.map((student, index) => (
          <div className="student-card" key={index}>
            <div className="avatar">{student.initial}</div>
            <h4>{student.name}</h4>
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

export default Students;
