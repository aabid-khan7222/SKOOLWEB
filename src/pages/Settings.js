import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSave, faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
  const [settings, setSettings] = useState({
    schoolName: 'Preskool Academy',
    academicYear: '2024/2025',
    emailNotifications: true,
    smsNotifications: false,
    language: 'en'
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    // Simulate saving
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h1 className="display-5 fw-bold">
          <FontAwesomeIcon icon={faCog} className="me-2 text-primary" />
          System Settings
        </h1>
        <p className="lead text-muted">Configure application preferences and workflows.</p>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <form onSubmit={handleSubmit}>
              <h5 className="fw-bold mb-4">General Settings</h5>
              
              <div className="mb-4">
                <label className="form-label fw-semibold">School Name</label>
                <input name="schoolName" value={settings.schoolName} onChange={handleChange} className="form-control rounded-pill" />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Academic Year</label>
                <input name="academicYear" value={settings.academicYear} onChange={handleChange} className="form-control rounded-pill" />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Language</label>
                <select name="language" value={settings.language} onChange={handleChange} className="form-select rounded-pill">
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="es">Spanish</option>
                </select>
              </div>

              <h5 className="fw-bold mb-4 mt-5">Notifications</h5>
              
              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" name="emailNotifications" 
                  checked={settings.emailNotifications} onChange={handleChange} id="emailNotif" />
                <label className="form-check-label fw-semibold" htmlFor="emailNotif">
                  Email Notifications
                </label>
                <div className="text-muted small">Receive email alerts for important updates</div>
              </div>

              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" name="smsNotifications" 
                  checked={settings.smsNotifications} onChange={handleChange} id="smsNotif" />
                <label className="form-check-label fw-semibold" htmlFor="smsNotif">
                  SMS Notifications
                </label>
                <div className="text-muted small">Receive SMS alerts for urgent matters</div>
              </div>

              <div className="d-flex align-items-center gap-3 mt-4">
                <button type="submit" className="btn btn-primary rounded-pill px-5 py-2 fw-bold" disabled={saving}>
                  {saving ? <FontAwesomeIcon icon={faSpinner} spin className="me-2" /> : <FontAwesomeIcon icon={faSave} className="me-2" />}
                  Save Settings
                </button>
                {saved && (
                  <span className="text-success fw-semibold">
                    <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                    Settings saved successfully!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <h5 className="fw-bold mb-3">System Info</h5>
            <div className="mb-2"><strong>Version:</strong> 1.0.0</div>
            <div className="mb-2"><strong>API:</strong> Connected</div>
            <div className="mb-2"><strong>Storage:</strong> JSON File</div>
            <div><strong>Backend:</strong> http://localhost:5000</div>
          </div>

          <div className="card border-0 shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/students" className="text-decoration-none">Manage Students</a></li>
              <li className="mb-2"><a href="/teachers" className="text-decoration-none">Manage Teachers</a></li>
              <li className="mb-2"><a href="/subjects" className="text-decoration-none">Manage Subjects</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;