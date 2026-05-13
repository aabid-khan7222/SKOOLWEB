import React from 'react';

const Parents = () => {
  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="display-5 fw-bold">Parent Portal</h1>
        <p className="lead text-muted">Track family engagement and communication. Data will be connected from SKOOLWEB.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-12">
          <div className="card shadow-sm rounded-4 border-0 p-4">
            <h4 className="fw-bold mb-3">Parent Engagement</h4>
            <p className="text-muted">This section will display parent data from SKOOLWEB integration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parents;
