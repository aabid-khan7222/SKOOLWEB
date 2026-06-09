import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Timetable = () => {
  const [timetables, setTimetables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/timetables')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch timetables');
        return res.json();
      })
      .then(data => {
        setTimetables(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periods = ['08:00 - 09:00', '09:15 - 10:15', '10:30 - 11:30', '11:45 - 12:45', '13:30 - 14:30'];

  const getSubjectForDayAndPeriod = (day, time) => {
    for (const tt of timetables) {
      if (tt.periods) {
        for (const period of tt.periods) {
          if (period.day === day && period.time === time) {
            return period.subject?.name || 'Subject';
          }
        }
      }
    }
    return null;
  };

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h1 className="display-5 fw-bold">
          <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
          Timetable
        </h1>
        <p className="lead text-muted">View and manage school timetable.</p>
      </div>

      {loading && (
        <div className="text-center py-5">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-primary mb-3" />
          <p className="text-muted">Loading timetable...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger">{error}</div>
      )}

      {!loading && !error && (
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="table-responsive">
            <table className="table table-bordered mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="ps-4" style={{ minWidth: '130px' }}>Time</th>
                  {days.map(day => (
                    <th key={day} className="text-center fw-bold">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {periods.map(time => (
                  <tr key={time}>
                    <td className="ps-4 fw-semibold text-nowrap">{time}</td>
                    {days.map(day => {
                      const subject = getSubjectForDayAndPeriod(day, time);
                      return (
                        <td key={day} className="text-center" style={{ height: '60px', verticalAlign: 'middle' }}>
                          {subject ? (
                            <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2">
                              {subject}
                            </span>
                          ) : (
                            <span className="text-muted" style={{ fontSize: '0.85rem' }}>—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3 bg-light border-top">
            <small className="text-muted">
              {timetables.length > 0 
                ? `${timetables.length} timetable(s) loaded from database. Use the backend API to manage timetables.`
                : 'No timetables found. Create one using the API at /api/timetables.'}
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timetable;