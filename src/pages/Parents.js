import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faPlus, faEdit, faTrash, faSearch, faTimes, faSave, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Parents = () => {
  const [parents, setParents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', relation: '', occupation: ''
  });

  const fetchParents = () => {
    setLoading(true);
    fetch('/api/parents')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch parents');
        return res.json();
      })
      .then(data => {
        setParents(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => { fetchParents(); }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openCreateForm = () => {
    setFormData({ name: '', email: '', phone: '', relation: '', occupation: '' });
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (parent) => {
    setFormData({
      name: parent.name || '', email: parent.email || '', phone: parent.phone || '',
      relation: parent.relation || '', occupation: parent.occupation || ''
    });
    setEditingId(parent.id);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    const url = editingId ? `/api/parents/${editingId}` : '/api/parents';
    const method = editingId ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save parent');
        return res.json();
      })
      .then(() => {
        setSaving(false);
        setShowForm(false);
        fetchParents();
      })
      .catch(err => {
        setError(err.message);
        setSaving(false);
      });
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this parent?')) return;
    fetch(`/api/parents/${id}`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) throw new Error('Failed to delete parent');
        fetchParents();
      })
      .catch(err => setError(err.message));
  };

  const filteredParents = parents.filter(p =>
    p.name?.toLowerCase().includes(search.toLowerCase()) ||
    p.relation?.toLowerCase().includes(search.toLowerCase()) ||
    p.occupation?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="display-5 fw-bold">
            <FontAwesomeIcon icon={faUserFriends} className="me-2 text-primary" />
            Parents
          </h1>
          <p className="lead text-muted">Manage parent/guardian information.</p>
        </div>
        <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold" onClick={openCreateForm}>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Parent
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
        <input type="text" className="form-control" placeholder="Search by name, relation or occupation..."
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
                  {editingId ? 'Edit Parent' : 'Add New Parent'}
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
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className="form-control rounded-pill" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Relation</label>
                      <select name="relation" value={formData.relation} onChange={handleChange} className="form-select rounded-pill">
                        <option value="">Select</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Guardian">Guardian</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="form-label fw-semibold">Occupation</label>
                      <input name="occupation" value={formData.occupation} onChange={handleChange} className="form-control rounded-pill" />
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
          <p className="mt-3 text-muted">Loading parents...</p>
        </div>
      ) : (
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="ps-4">Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Relation</th>
                  <th>Occupation</th>
                  <th className="text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredParents.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-5 text-muted">
                      {search ? 'No parents match your search.' : 'No parents found. Click "Add Parent" to create one.'}
                    </td>
                  </tr>
                ) : (
                  filteredParents.map(parent => (
                    <tr key={parent.id}>
                      <td className="ps-4 fw-semibold">{parent.name}</td>
                      <td>{parent.email}</td>
                      <td>{parent.phone}</td>
                      <td><span className="badge bg-info bg-opacity-10 text-info rounded-pill">{parent.relation}</span></td>
                      <td>{parent.occupation}</td>
                      <td className="text-end pe-4">
                        <button className="btn btn-sm btn-outline-primary me-2 rounded-circle" onClick={() => openEditForm(parent)} title="Edit">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-circle" onClick={() => handleDelete(parent.id)} title="Delete">
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

export default Parents;