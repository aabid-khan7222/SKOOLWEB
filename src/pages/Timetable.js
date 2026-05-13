import React from 'react';

const Timetable = () => {
  return (
    <div className="page-animate" style={{ padding: '3rem' }}>
      <div className="timetable-card card p-4 shadow-sm rounded-4" style={{ background: '#f8fbff', border: '1px solid rgba(102, 126, 234, 0.12)' }}>
        <div className="mb-4">
          <h1 className="display-6 fw-bold">Timetable</h1>
          <p className="text-muted">View and manage your school timetable with smooth transitions and clear daily planning.</p>
        </div>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: '08:00 - 09:00', monday: 'Math', tuesday: 'Science', wednesday: 'English', thursday: 'History', friday: 'Art' },
                { time: '09:15 - 10:15', monday: 'Art', tuesday: 'Math', wednesday: 'PE', thursday: 'Science', friday: 'Music' },
                { time: '10:30 - 11:30', monday: 'English', tuesday: 'History', wednesday: 'Math', thursday: 'Computer', friday: 'Science' },
              ].map((row) => (
                <tr key={row.time} style={{ transition: 'transform 0.25s ease, opacity 0.25s ease' }}>
                  <td className="fw-semibold">{row.time}</td>
                  <td>{row.monday}</td>
                  <td>{row.tuesday}</td>
                  <td>{row.wednesday}</td>
                  <td>{row.thursday}</td>
                  <td>{row.friday}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetable;