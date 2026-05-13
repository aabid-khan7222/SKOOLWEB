import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faClock, faCheckCircle, faEnvelope, faPhone, faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    school: '',
    role: '',
    schoolSize: '',
    currentSystem: '',
    preferredTime: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-5" style={{ background: 'linear-gradient(135deg, #e9efff 0%, #f8fbff 100%)', minHeight: '100vh' }}>
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Request Your Free Demo</h1>
          <p className="lead text-muted mb-4">
            See how SKOOLWEB can transform your school's administrative workflow and parent communication
          </p>
        </div>

        <div className="row align-items-start gy-5">
          <div className="col-lg-5">
            <div className="p-4 rounded-4 mb-4" style={{ background: 'white', boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
              <h3 className="fw-bold mb-4">What to Expect</h3>
              <div className="d-flex align-items-start mb-3">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-3 mt-1" />
                <div>
                  <h6 className="fw-bold mb-1">Personalized Demo</h6>
                  <p className="text-muted small mb-0">30-minute session tailored to your school's needs</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <FontAwesomeIcon icon={faUsers} className="text-primary me-3 mt-1" />
                <div>
                  <h6 className="fw-bold mb-1">Live Platform Tour</h6>
                  <p className="text-muted small mb-0">See all features in action with your data</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <FontAwesomeIcon icon={faClock} className="text-primary me-3 mt-1" />
                <div>
                  <h6 className="fw-bold mb-1">Implementation Timeline</h6>
                  <p className="text-muted small mb-0">Custom migration plan for your school</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-success me-3 mt-1" />
                <div>
                  <h6 className="fw-bold mb-1">No Commitment</h6>
                  <p className="text-muted small mb-0">Free consultation with no strings attached</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
              <h4 className="fw-bold mb-3">Why Choose SKOOLWEB?</h4>
              <div className="d-flex align-items-center mb-2">
                <div className="me-3">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-warning me-1" />
                  ))}
                </div>
                <span className="fw-bold">4.9/5 Rating</span>
              </div>
              <p className="mb-3">Trusted by 500+ schools worldwide</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">✓ 30-day free trial</li>
                <li className="mb-2">✓ 24/7 customer support</li>
                <li className="mb-2">✓ Custom integrations</li>
                <li>✓ Data migration assistance</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-4 p-4 rounded-4" style={{ background: 'white', boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary me-3" />
                <div>
                  <strong>Email</strong><br />
                  <a href="mailto:hello@skoolweb.com" className="text-decoration-none">hello@skoolweb.com</a>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="text-primary me-3" />
                <div>
                  <strong>Phone</strong><br />
                  +1 (555) 123-4567
                </div>
              </div>
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3 mt-1" />
                <div>
                  <strong>Address</strong><br />
                  123 Education Street<br />
                  Learning City, LC 12345
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="p-5 rounded-4 contact-card" style={{ background: 'white', boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
              {submitted ? (
                <div className="text-center py-5">
                  <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-success mb-3" />
                  <h3 className="fw-bold mb-3">Demo Request Received!</h3>
                  <p className="text-muted mb-4">
                    Thank you for your interest in SKOOLWEB! Our team will contact you within 24 hours to schedule your personalized demo.
                  </p>
                  <div className="mb-4">
                    <h6>What happens next?</h6>
                    <ul className="list-unstyled text-start d-inline-block">
                      <li className="mb-2">✓ We'll review your requirements</li>
                      <li className="mb-2">✓ Schedule a convenient time</li>
                      <li className="mb-2">✓ Prepare a customized demo</li>
                      <li>✓ Answer all your questions</li>
                    </ul>
                  </div>
                  <Link to="/" className="btn btn-primary btn-lg me-3">Back to Home</Link>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline-primary btn-lg">Submit Another Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h4 className="fw-bold mb-4">Tell Us About Your School</h4>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-bold">Full Name *</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control rounded-pill"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-bold">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control rounded-pill"
                        placeholder="you@school.edu"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-bold">Phone Number</label>
                      <input
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="form-control rounded-pill"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-bold">Your Role *</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="form-select rounded-pill"
                        required
                      >
                        <option value="">Select your role</option>
                        <option value="principal">Principal</option>
                        <option value="vice-principal">Vice Principal</option>
                        <option value="admin">Administrator</option>
                        <option value="teacher">Teacher</option>
                        <option value="it-admin">IT Administrator</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">School / Institution Name *</label>
                    <input
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      className="form-control rounded-pill"
                      placeholder="School name"
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-bold">School Size</label>
                      <select
                        name="schoolSize"
                        value={formData.schoolSize}
                        onChange={handleChange}
                        className="form-select rounded-pill"
                      >
                        <option value="">Select school size</option>
                        <option value="small">Small (1-500 students)</option>
                        <option value="medium">Medium (501-2000 students)</option>
                        <option value="large">Large (2000+ students)</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-bold">Current System</label>
                      <input
                        name="currentSystem"
                        value={formData.currentSystem}
                        onChange={handleChange}
                        className="form-control rounded-pill"
                        placeholder="What system do you currently use?"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Preferred Demo Time</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="form-select rounded-pill"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Additional Information</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control rounded-4"
                      rows="4"
                      placeholder="Tell us about your specific needs, challenges, or questions..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill fw-bold">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                    Request Free Demo
                  </button>

                  <p className="text-muted text-center mt-3 small">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
