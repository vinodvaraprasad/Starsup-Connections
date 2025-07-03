// src/components/PageHeader.js
import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <h2>{title}</h2>
      <p>Connect with students, faculty, professionals, colleges, and companies.</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder={`Search ${title.toLowerCase()}...`}
        />
      </div>
    </div>
  );
};

export default PageHeader;
