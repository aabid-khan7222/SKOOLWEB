import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faPlus, faEdit, faTrash, faSearch, faTimes, faSave, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', rollNumber: '', class: '', section: '',
    phone: '', gender: '', parentName: '', parentPhone: '', status: 'Active'
  });

  const fetchStudents = () => {
    setLoading(true);
    fetch('/api/students')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch students');
        return res.json();
      })
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => { fetchStudents(); }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openCreateForm = () => {
    setFormData({ name: '', email: '', rollNumber: '', class: '', section: '', phone: '', gender: '', parentName: '', parentPhone: '', status: 'Active' });
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (student) => {
    setFormData({
      name: student.name || '', email: student.email || '', rollNumber: student.rollNumber || '',
      class: student.class || '', section: student.section || '', phone: student.phone || '',
      gender: student.gender || '', parentName: student.parentName || '', parentPhone: student.parentPhone || '',
      status: student.status || 'Active'
    });
    setEditingId(student.id);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    const url = editingId ? `/api/students/${editingId}` : '/api/students';
    const method = editingId ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save student');
        return res.json();
      })
      .then(() => {
        setSaving(false);
        setShowForm(false);
        fetchStudents();
      })
      .catch(err => {
        setError(err.message);
        setSaving(false);
      });
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;
    fetch(`/api/students/${id}`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) throw new Error('Failed to delete student');
        fetchStudents();
      })
      .catch(err => setError(err.message));
  };

  const filteredStudents = students.filter(s =>
    s.name?.toLowerCase().includes(search.toLowerCase()) ||
    s.rollNumber?.toLowerCase().includes(search.toLowerCase()) ||
    s.class?.includes(search)
  );

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="display-5 fw-bold">
            <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-primary" />
            Students
          </h1>
          <p className="lead text-muted">Manage student information and profiles.</p>
        </div>
        <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold" onClick={openCreateForm}>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Student
        </button>
      </div>

      {error && (
        <div className="alert alert-danger alert-dismissible fade show">
          {error}
          <button type="button" className="btn-close" onClick={() => setError(null)}></button>
        </div>
      )}

      {/* Search */}
      <div className="input-group mb-4" style={{ maxWidth: '400px' }}>
        <span className="input-group-text bg-white">
          <FontAwesomeIcon icon={faSearch} className="text-muted" />
        </span>
        <input
          type="text" className="form-control" placeholder="Search by name, roll number or class..."
          value={search} onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="btn btn-outline-secondary" onClick={() => setSearch('')}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow rounded-4">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">
                  <FontAwesomeIcon icon={editingId ? faEdit : faPlus} className="me-2 text-primary" />
                  {editingId ? 'Edit Student' : 'Add New Student'}
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
                      <label className="form-label fw-semibold">Roll Number *</label>
                      <input name="rollNumber" value={formData.rollNumber} onChange={handleChange} className="form-control rounded-pill" required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Class *</label>
                      <input name="class" value={formData.class} onChange={handleChange} className="form-control rounded-pill" required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Section</label>
                      <input name="section" value={formData.section} onChange={handleChange} className="form-control rounded-pill" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className="form-control rounded-pill" />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Gender</label>
                      <select name="gender" value={formData.gender} onChange={handleChange} className="form-select rounded-pill">
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Status</label>
                      <select name="status" value={formData.status} onChange={handleChange} className="form-select rounded-pill">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Parent Name</label>
                      <input name="parentName" value={formData.parentName} onChange={handleChange} className="form-control rounded-pill" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Parent Phone</label>
                      <input name="parentPhone" value={formData.parentPhone} onChange={handleChange} className="form-control rounded-pill" />
                    </div>
                  </div>
                  <div className="d-flex gap-2 mt-4 justify-content-end">
                    <button type="button" className="btn btn-outline-secondary rounded-pill px-4" onClick={() => setShowForm(false)}>
                      Cancel
                    </button>
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

      {/* Students Table */}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading students...</p>
        </div>
      ) : (
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="ps-4">Roll No</th>
                  <th>Name</th>
                  <th>Class/Section</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th className="text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-5 text-muted">
                      {search ? 'No students match your search.' : 'No students found. Click "Add Student" to create one.'}
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map(student => (
                    <tr key={student.id}>
                      <td className="ps-4 fw-semibold">{student.rollNumber}</td>
                      <td>{student.name}</td>
                      <td>{student.class}{student.section ? `-${student.section}` : ''}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>
                        <span className={`badge rounded-pill ${student.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="text-end pe-4">
                        <button className="btn btn-sm btn-outline-primary me-2 rounded-circle" onClick={() => openEditForm(student)} title="Edit">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-circle" onClick={() => handleDelete(student.id)} title="Delete">
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

export default Students;