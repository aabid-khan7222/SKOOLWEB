import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faPlus, faEdit, faTrash, faSearch, faTimes, faSave, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', employeeId: '', subject: '',
    qualification: '', experience: '', gender: '', status: 'Active'
  });

  const fetchTeachers = () => {
    setLoading(true);
    fetch('/api/teachers')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch teachers');
        return res.json();
      })
      .then(data => {
        setTeachers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => { fetchTeachers(); }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openCreateForm = () => {
    setFormData({ name: '', email: '', phone: '', employeeId: '', subject: '', qualification: '', experience: '', gender: '', status: 'Active' });
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (teacher) => {
    setFormData({
      name: teacher.name || '', email: teacher.email || '', phone: teacher.phone || '',
      employeeId: teacher.employeeId || '', subject: teacher.subject || '',
      qualification: teacher.qualification || '', experience: teacher.experience?.toString() || '',
      gender: teacher.gender || '', status: teacher.status || 'Active'
    });
    setEditingId(teacher.id);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    const url = editingId ? `/api/teachers/${editingId}` : '/api/teachers';
    const method = editingId ? 'PUT' : 'POST';

    const payload = { ...formData, experience: parseInt(formData.experience) || 0 };

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save teacher');
        return res.json();
      })
      .then(() => {
        setSaving(false);
        setShowForm(false);
        fetchTeachers();
      })
      .catch(err => {
        setError(err.message);
        setSaving(false);
      });
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this teacher?')) return;
    fetch(`/api/teachers/${id}`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) throw new Error('Failed to delete teacher');
        fetchTeachers();
      })
      .catch(err => setError(err.message));
  };

  const filteredTeachers = teachers.filter(t =>
    t.name?.toLowerCase().includes(search.toLowerCase()) ||
    t.employeeId?.toLowerCase().includes(search.toLowerCase()) ||
    t.subject?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="display-5 fw-bold">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2 text-primary" />
            Teachers
          </h1>
          <p className="lead text-muted">Manage faculty information and assignments.</p>
        </div>
        <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold" onClick={openCreateForm}>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Teacher
        </button>
      </div>

      {error && (
        <div className="alert alert-danger alert-dismissible fade show">
          {error}
          <button type="button" className="btn-close" onClick={() => setError(null)}></button>
        </div>
      )}

      <div className="input-group mb-4" style={{ maxWidth: '400px' }}>
        <span className="input-group-text bg-white">
          <FontAwesomeIcon icon={faSearch} className="text-muted" />
        </span>
        <input type="text" className="form-control" placeholder="Search by name, ID or subject..."
          value={search} onChange={(e) => setSearch(e.target.value)} />
        {search && (
          <button className="btn btn-outline-secondary" onClick={() => setSearch('')}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>

      {showForm && (
        <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow rounded-4">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">
                  <FontAwesomeIcon icon={editingId ? faEdit : faPlus} className="me-2 text-primary" />
                  {editingId ? 'Edit Teacher' : 'Add New Teacher'}
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Full Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} className="form-control rounded-pill" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email *</label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} className="form-control rounded-pill" required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Employee ID *</label>
                      <input name="employeeId" value={formData.employeeId} onChange={handleChange} className="form-control rounded-pill" required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Subject *</label>
                      <input name="subject" value={formData.subject} onChange={handleChange} className="form-control rounded-pill" required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Experience (years)</label>
                      <input name="experience" type="number" value={formData.experience} onChange={handleChange} className="form-control rounded-pill" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className="form-control rounded-pill" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Qualification</label>
                      <input name="qualification" value={formData.qualification} onChange={handleChange} className="form-control rounded-pill" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Gender</label>
                      <select name="gender" value={formData.gender} onChange={handleChange} className="form-select rounded-pill">
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Status</label>
                      <select name="status" value={formData.status} onChange={handleChange} className="form-select rounded-pill">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mt-4 justify-content-end">
                    <button type="button" className="btn btn-outline-secondary rounded-pill px-4" onClick={() => setShowForm(false)}>Cancel</button>
                    <button type="submit" className="btn btn-primary rounded-pill px-4 fw-bold" disabled={saving}>
                      {saving ? <FontAwesomeIcon icon={faSpinner} spin className="me-2" /> : <FontAwesomeIcon icon={faSave} className="me-2" />}
                      {editingId ? 'Update' : 'Save'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
          <p className="mt-3 text-muted">Loading teachers...</p>
        </div>
      ) : (
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="ps-4">Employee ID</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Experience</th>
                  <th>Status</th>
                  <th className="text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTeachers.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-5 text-muted">
                      {search ? 'No teachers match your search.' : 'No teachers found. Click "Add Teacher" to create one.'}
                    </td>
                  </tr>
                ) : (
                  filteredTeachers.map(teacher => (
                    <tr key={teacher.id}>
                      <td className="ps-4 fw-semibold">{teacher.employeeId}</td>
                      <td>{teacher.name}</td>
                      <td>{teacher.subject}</td>
                      <td>{teacher.email}</td>
                      <td>{teacher.phone}</td>
                      <td>{teacher.experience} yrs</td>
                      <td>
                        <span className={`badge rounded-pill ${teacher.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                          {teacher.status}
                        </span>
                      </td>
                      <td className="text-end pe-4">
                        <button className="btn btn-sm btn-outline-primary me-2 rounded-circle" onClick={() => openEditForm(teacher)} title="Edit">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-circle" onClick={() => handleDelete(teacher.id)} title="Delete">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;