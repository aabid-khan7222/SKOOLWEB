import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUserFriends, faBook, faClipboardList, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch dashboard data');
        return res.json();
      })
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const cards = [
    { label: 'Total Students', value: stats?.totalStudents || 0, icon: faGraduationCap, color: '#667eea', bg: 'rgba(102,126,234,0.1)', link: '/students' },
    { label: 'Total Teachers', value: stats?.totalTeachers || 0, icon: faChalkboardTeacher, color: '#764ba2', bg: 'rgba(118,75,162,0.1)', link: '/teachers' },
    { label: 'Total Parents', value: stats?.totalParents || 0, icon: faUserFriends, color: '#48bb78', bg: 'rgba(72,187,120,0.1)', link: '/parents' },
    { label: 'Total Subjects', value: stats?.totalSubjects || 0, icon: faBook, color: '#f093fb', bg: 'rgba(240,147,251,0.1)', link: '/subjects' },
  ];

  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="display-5 fw-bold">Dashboard</h1>
        <p className="lead text-muted">Real-time overview of school metrics.</p>
      </div>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading dashboard data...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          <FontAwesomeIcon icon={faClipboardList} className="me-2" />
          Error loading data: {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="row g-4 mb-4">
            {cards.map((card, idx) => (
              <div key={idx} className="col-md-3 col-sm-6">
                <Link to={card.link} className="text-decoration-none">
                  <div className="card border-0 shadow-sm rounded-4 p-4 h-100" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <div style={{
                        width: '56px', height: '56px', borderRadius: '16px',
                        background: card.bg, display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '24px', color: card.color
                      }}>
                        <FontAwesomeIcon icon={card.icon} />
                      </div>
                    </div>
                    <h3 className="fw-bold mb-1" style={{ color: '#1a1a2e', fontSize: '2rem' }}>{card.value}</h3>
                    <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>{card.label}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="row g-4">
            <div className="col-md-8">
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-4">
                  <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
                  School Overview
                </h5>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td className="fw-semibold">Attendance Rate</td>
                        <td>
                          <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                            {stats?.attendanceRate || 92.5}%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">Active Students</td>
                        <td>
                          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                            {stats?.totalStudents || 0}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">Active Teachers</td>
                        <td>
                          <span className="badge bg-purple bg-opacity-10 text-purple px-3 py-2 rounded-pill">
                            {stats?.totalTeachers || 0}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">Subjects Offered</td>
                        <td>
                          <span className="badge bg-pink bg-opacity-10 text-pink px-3 py-2 rounded-pill">
                            {stats?.totalSubjects || 0}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <h5 className="fw-bold mb-3">
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                  Quick Actions
                </h5>
                <div className="d-flex flex-column gap-2">
                  <Link to="/students" className="btn btn-light rounded-pill fw-semibold">View Students</Link>
                  <Link to="/teachers" className="btn btn-light rounded-pill fw-semibold">View Teachers</Link>
                  <Link to="/timetable" className="btn btn-light rounded-pill fw-semibold">View Timetable</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;