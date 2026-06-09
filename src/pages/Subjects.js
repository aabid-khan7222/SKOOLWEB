import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlus, faEdit, faTrash, faSearch, faTimes, faSave, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '', code: '', class: '', maxMarks: '', teacher: ''
  });

  const fetchData = () => {
    setLoading(true);
    Promise.all([
      fetch('/api/subjects').then(r => r.json()),
      fetch('/api/teachers').then(r => r.json())
    ])
      .then(([subjectsData, teachersData]) => {
        setSubjects(subjectsData);
        setTeachers(teachersData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => { fetchData(); }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openCreateForm = () => {
    setFormData({ name: '', code: '', class: '', maxMarks: '', teacher: '' });
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (subject) => {
    setFormData({
      name: subject.name || '', code: subject.code || '', class: subject.class || '',
      maxMarks: subject.maxMarks?.toString() || '', teacher: subject.teacher?.id || subject.teacher || ''
    });
    setEditingId(subject.id);
    setShowForm(true);
  };

  const getTeacherName = (subject) => {
    if (!subject.teacher) return 'Not assigned';
    if (typeof subject.teacher === 'object' && subject.teacher.name) return subject.teacher.name;
    const teacher = teachers.find(t => t.id === subject.teacher);
    return teacher ? teacher.name : 'Unknown';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    const url = editingId ? `/api/subjects/${editingId}` : '/api/subjects';
    const method = editingId ? 'PUT' : 'POST';

    const payload = { ...formData, maxMarks: parseInt(formData.maxMarks) || 100 };

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save subject');
        return res.json();
      })
      .then(() => {
        setSaving(false);
        setShowForm(false);
        fetchData();
      })
      .catch(err => {
        setError(err.message);
        setSaving(false);
      });
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this subject?')) return;
    fetch(`/api/subjects/${id}`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) throw new Error('Failed to delete subject');
        fetchData();
      })
      .catch(err => setError(err.message));
  };

  const filteredSubjects = subjects.filter(s =>
    s.name?.toLowerCase().includes(search.toLowerCase()) ||
    s.code?.toLowerCase().includes(search.toLowerCase()) ||
    s.class?.includes(search)
  );

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="display-5 fw-bold">
            <FontAwesomeIcon icon={faBook} className="me-2 text-primary" />
            Subjects
          </h1>
          <p className="lead text-muted">Organize curriculum and subject assignments.</p>
        </div>
        <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold" onClick={openCreateForm}>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Subject
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
        <input type="text" className="form-control" placeholder="Search by name, code or class..."
          value={search} onChange={(e) => setSearch(e.target.value)} />
        {search && (
          <button className="btn btn-outline-secondary" onClick={() => setSearch('')}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>

      {showForm && (
        <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow rounded-4">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">
                  <FontAwesomeIcon icon={editingId ? faEdit : faPlus} className="me-2 text-primary" />
                  {editingId ? 'Edit Subject' : 'Add New Subject'}
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Subject Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} className="form-control rounded-pill" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Code *</label>
                      <input name="code" value={formData.code} onChange={handleChange} className="form-control rounded-pill" required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Class *</label>
                      <input name="class" value={formData.class} onChange={handleChange} className="form-control rounded-pill" required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Max Marks</label>
                      <input name="maxMarks" type="number" value={formData.maxMarks} onChange={handleChange} className="form-control rounded-pill" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Teacher</label>
                      <select name="teacher" value={formData.teacher} onChange={handleChange} className="form-select rounded-pill">
                        <option value="">Select Teacher</option>
                        {teachers.map(t => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
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
          <p className="mt-3 text-muted">Loading subjects...</p>
        </div>
      ) : (
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="ps-4">Code</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Max Marks</th>
                  <th>Teacher</th>
                  <th className="text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-5 text-muted">
                      {search ? 'No subjects match your search.' : 'No subjects found. Click "Add Subject" to create one.'}
                    </td>
                  </tr>
                ) : (
                  filteredSubjects.map(subject => (
                    <tr key={subject.id}>
                      <td className="ps-4 fw-semibold">{subject.code}</td>
                      <td>{subject.name}</td>
                      <td>Class {subject.class}</td>
                      <td>{subject.maxMarks}</td>
                      <td>{getTeacherName(subject)}</td>
                      <td className="text-end pe-4">
                        <button className="btn btn-sm btn-outline-primary me-2 rounded-circle" onClick={() => openEditForm(subject)} title="Edit">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-circle" onClick={() => handleDelete(subject.id)} title="Delete">
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

export default Subjects;