import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, faUsers, faClock, faCheckCircle, faEnvelope, 
  faPhone, faMapMarkerAlt, faStar, faBars, faHome
} from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', school: '', role: '', schoolSize: '',
    currentSystem: '', preferredTime: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🆕 Firebase हटाकर साधारण सबमिट फंक्शन रखा है जो सिर्फ सक्सेस स्क्रीन दिखाता है
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // फॉर्म सक्सेस स्क्रीन दिखाने के लिए स्टेट अपडेट
    setSubmitted(true);
    
    // फॉर्म रीसेट करना
    setFormData({
      name: '', email: '', mobile: '', school: '', role: '', schoolSize: '',
      currentSystem: '', preferredTime: '', message: ''
    });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Professional Sticky Header */}
      <header className="bg-white shadow-sm sticky-top z-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container">
            <Link className="navbar-brand fw-bold text-primary fs-3 d-flex align-items-center" to="/">
              <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>SKOOLWEB</span>
            </Link>
            
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <FontAwesomeIcon icon={faBars} className="text-primary fs-4" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item me-4">
                  <Link className="nav-link fw-semibold text-dark" to="/features">Features</Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link fw-semibold text-dark" to="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary rounded-pill px-4 py-2 fw-bold" to="/demo">
                    Get Demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 py-5" style={{ background: 'linear-gradient(135deg, #e9efff 0%, #f8fbff 100%)' }}>
        <div className="container py-5">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3 text-dark">Request Your Free Demo</h1>
            <p className="lead text-muted mb-4">
              See how SKOOLWEB can transform your school's administrative workflow and parent communication
            </p>
          </div>

          <div className="row align-items-start gy-5">
            {/* Left Sidebar */}
            <div className="col-lg-5">
              <div className="p-4 rounded-4 mb-4 bg-white shadow-lg" style={{ boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
                <h3 className="fw-bold mb-4 text-primary">What to Expect</h3>
                <div className="d-flex align-items-start mb-3">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-3 mt-1 fs-4" />
                  <div>
                    <h6 className="fw-bold mb-1">Personalized Demo</h6>
                    <p className="text-muted small mb-0">30-minute session tailored to your school's needs</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <FontAwesomeIcon icon={faUsers} className="text-primary me-3 mt-1 fs-4" />
                  <div>
                    <h6 className="fw-bold mb-1">Live Platform Tour</h6>
                    <p className="text-muted small mb-0">See all features in action with your data</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <FontAwesomeIcon icon={faClock} className="text-primary me-3 mt-1 fs-4" />
                  <div>
                    <h6 className="fw-bold mb-1">Implementation Timeline</h6>
                    <p className="text-muted small mb-0">Custom migration plan for your school</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-success me-3 mt-1 fs-4" />
                  <div>
                    <h6 className="fw-bold mb-1">No Commitment</h6>
                    <p className="text-muted small mb-0">Free consultation with no strings attached</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-4 mb-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <h4 className="fw-bold mb-3">Why Choose SKOOLWEB?</h4>
                <div className="d-flex align-items-center mb-2">
                  <div className="me-3">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-warning me-1" />
                    ))}
                  </div>
                  <span className="fw-bold fs-5">4.9/5 Rating</span>
                </div>
                <p className="mb-3">Trusted by 500+ schools worldwide</p>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-white me-2" />30-day free trial</li>
                  <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-white me-2" />24/7 customer support</li>
                  <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-white me-2" />Custom integrations</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} className="text-white me-2" />Data migration assistance</li>
                </ul>
              </div>

              <div className="p-4 rounded-4 bg-white shadow-lg" style={{ boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
                <h5 className="fw-bold mb-3 text-primary">Contact Information</h5>
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary me-3 fs-4" />
                  <div>
                    <strong>Email</strong><br />
                    <a href="mailto:hello@skoolweb.com" className="text-decoration-none text-dark fw-semibold">hello@skoolweb.com</a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon icon={faPhone} className="text-primary me-3 fs-4" />
                  <div>
                    <strong>Phone</strong><br />
                    <span className="fw-semibold">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3 mt-1 fs-4" />
                  <div>
                    <strong>Address</strong><br />
                    123 Education Street<br />
                    Learning City, LC 12345
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="col-lg-7">
              <div className="p-5 rounded-4 bg-white shadow-lg" style={{ boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
                {submitted ? (
                  <div className="text-center py-5">
                    <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-success mb-4" />
                    <h3 className="fw-bold mb-3 text-success">Demo Request Received!</h3>
                    <p className="text-muted mb-4">
                      Thank you for your interest in SKOOLWEB! Our team will contact you within 24 hours to schedule your personalized demo.
                    </p>
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">What happens next?</h6>
                      <ul className="list-unstyled text-start d-inline-block">
                        <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />We'll review your requirements</li>
                        <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Schedule a convenient time</li>
                        <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Prepare a customized demo</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Answer all your questions</li>
                      </ul>
                    </div>
                    <Link to="/" className="btn btn-primary btn-lg me-3 rounded-pill px-4">
                      <FontAwesomeIcon icon={faHome} className="me-2" />
                      Back to Home
                    </Link>
                    <button onClick={() => setSubmitted(false)} className="btn btn-outline-primary btn-lg rounded-pill px-4">
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h4 className="fw-bold mb-4 text-primary">Tell Us About Your School</h4>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-bold">Full Name *</label>
                        <input name="name" value={formData.name} onChange={handleChange} className="form-control rounded-pill py-2" placeholder="Your full name" required />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-bold">Email Address *</label>
                        <input name="email" type="email" value={formData.email} onChange={handleChange} className="form-control rounded-pill py-2" placeholder="you@school.edu" required />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-bold">Phone Number</label>
                        <input name="mobile" type="tel" value={formData.mobile} onChange={handleChange} className="form-control rounded-pill py-2" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-bold">Your Role *</label>
                        <select name="role" value={formData.role} onChange={handleChange} className="form-select rounded-pill py-2" required>
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
                      <input name="school" value={formData.school} onChange={handleChange} className="form-control rounded-pill py-2" placeholder="School name" required />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-bold">School Size</label>
                        <select name="schoolSize" value={formData.schoolSize} onChange={handleChange} className="form-select rounded-pill py-2">
                          <option value="">Select school size</option>
                          <option value="small">Small (1-500 students)</option>
                          <option value="medium">Medium (501-2000 students)</option>
                          <option value="large">Large (2000+ students)</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-bold">Current System</label>
                        <input name="currentSystem" value={formData.currentSystem} onChange={handleChange} className="form-control rounded-pill py-2" placeholder="What system do you currently use?" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-bold">Preferred Demo Time</label>
                      <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="form-select rounded-pill py-2">
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="evening">Evening (5 PM - 8 PM)</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-bold">Additional Information</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} className="form-control rounded-4 py-3" rows="4" placeholder="Tell us about your specific needs, challenges, or questions..." />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill fw-bold py-3 shadow-sm">
                      <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                      Request Free Demo
                    </button>

                    <p className="text-muted text-center mt-3 small">
                      By submitting this form, you agree to our <a href="#" className="text-primary">Privacy Policy</a> and <a href="#" className="text-primary">Terms of Service</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Professional Footer */}
      <footer className="bg-dark text-light py-5 mt-auto">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 text-center text-md-start">
              <h5 className="fw-bold mb-3">SKOOLWEB</h5>
              <p className="text-secondary small mb-0">Empowering schools worldwide with next-generation administrative solutions for better academic outcomes and seamless parent communication.</p>
            </div>
            <div className="col-lg-2 col-md-3 text-center text-md-start">
              <h6 className="fw-bold mb-3">Product</h6>
              <ul className="list-unstyled text-secondary small">
                <li className="mb-2"><Link to="/" className="text-light text-decoration-none">Features</Link></li>
                <li><Link to="/pricing" className="text-light text-decoration-none">Pricing</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 text-center text-md-start">
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled text-secondary small">
                <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              </ul>
            </div>
          </div>
          <hr className="my-4 opacity-25" />
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-12">
              <p className="text-secondary small mb-0">&copy; 2026 SKOOLWEB. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;