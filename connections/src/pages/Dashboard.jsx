import React from 'react';
import PageHeader from '../components/PageHeader';
import { GraduationCap, Users, Briefcase, Building2 } from 'lucide-react';

const Dashboard = () => {
  const cards = [
    {
      title: 'Students',
      subtitle: 'Connect with students',
      icon: <GraduationCap size={20} />,
      link: '/students',
    },
    {
      title: 'Faculty',
      subtitle: 'Explore faculty profiles',
      icon: <Users size={20} />,
      link: '/faculty',
    },
    {
      title: 'Professionals',
      subtitle: 'Meet working professionals',
      icon: <Briefcase size={20} />,
      link: '/professionals',
    },
    {
      title: 'Colleges',
      subtitle: 'View college details',
      icon: <Building2 size={20} />,
      link: '/colleges',
    },
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="page">
      <PageHeader
        title="Dashboard"
        subtitle="Quick access to student, faculty, professionals, and college connections."
      />
      <div className="horizontal-scroll">
        {cards.map((card, index) => (
          <div
            className="dash-card"
            key={index}
            onClick={() => handleNavigation(card.link)}
          >
            <div className="dash-icon">{card.icon}</div>
            <div className="dash-info">
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
