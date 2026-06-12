import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import CaptchaField from './CaptchaField';
import { normalizeCaptchaInput } from '../utils/captcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt, faUsers, faClock, faCheckCircle, faEnvelope,
  faPhone, faMapMarkerAlt, faStar, faHome, faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

const FUTURISTIC5_URL = 'https://www.futuristic5.com/';

const INITIAL_FORM_DATA = {
  name: '', email: '', mobile: '', school: '', preferredTime: '', message: '',
};

const FORM_FIELDS = [
  { key: 'name', label: 'Full Name' },
  { key: 'email', label: 'Email Address' },
  { key: 'mobile', label: 'Phone Number' },
  { key: 'school', label: 'School / Institution Name' },
  { key: 'preferredTime', label: 'Preferred Demo Time' },
  { key: 'message', label: 'Additional Information' },
];

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\d{10}$/;

const SWAL_CONFIRM_OPTIONS = {
  confirmButtonText: 'OK',
  confirmButtonColor: '#667eea',
};

const getFormValidationErrors = (data) => {
  const errors = [];

  FORM_FIELDS.forEach(({ key, label }) => {
    const value = String(data[key] || '').trim();

    if (!value) {
      errors.push(`${label} is required.`);
      return;
    }

    if (key === 'email' && !EMAIL_REGEX.test(value)) {
      errors.push(`${label} must be a valid email address (e.g. you@school.edu).`);
    }

    if (key === 'mobile' && !PHONE_REGEX.test(value)) {
      errors.push(`${label} must be exactly 10 digits (numbers only, 0-9).`);
    }
  });

  return errors;
};

const showValidationAlert = (errors) => Swal.fire({
  icon: 'warning',
  title: 'Please Fix the Following',
  html: errors.map((error) => `• ${error}`).join('<br>'),
  ...SWAL_CONFIRM_OPTIONS,
});

const DemoRequestSection = ({ captchaInputId = 'demo-request-captcha', headingLevel = 'h1' }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [captchaInput, setCaptchaInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const captchaRef = useRef(null);

  const HeadingTag = headingLevel;

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'mobile') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, mobile: digitsOnly }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (event) => {
    setCaptchaInput(event.target.value);
  };

  const handleCaptchaRefresh = useCallback(() => {
    setCaptchaInput('');
  }, []);

  const resetCaptcha = () => {
    captchaRef.current?.refresh();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = getFormValidationErrors(formData);

    if (formErrors.length > 0) {
      await showValidationAlert(formErrors);
      return;
    }

    const normalizedCaptcha = normalizeCaptchaInput(captchaInput);
    if (!normalizedCaptcha) {
      await Swal.fire({
        icon: 'warning',
        title: 'CAPTCHA Required',
        text: 'Please enter the CAPTCHA before submitting the form.',
        ...SWAL_CONFIRM_OPTIONS,
      });
      return;
    }

    if (!captchaRef.current?.validate(captchaInput)) {
      await Swal.fire({
        icon: 'error',
        title: 'Incorrect CAPTCHA',
        text: 'The CAPTCHA you entered is incorrect. Please try again with the new CAPTCHA.',
        ...SWAL_CONFIRM_OPTIONS,
      });
      resetCaptcha();
      return;
    }

    setSubmitted(true);
    setFormData(INITIAL_FORM_DATA);
    setCaptchaInput('');
    captchaRef.current?.refresh();
  };

  return (
    <>
      <div className="text-center mb-5">
        <HeadingTag className={`${headingLevel === 'h1' ? 'display-4' : 'display-5'} fw-bold mb-3 text-dark`}>
          Request Your Free Demo
        </HeadingTag>
        <p className="lead text-muted mb-2">
          See how SKOOLWEB can transform your school&apos;s administrative workflow and parent communication
        </p>
        <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>
          SkoolWeb by{' '}
          <a href={FUTURISTIC5_URL} target="_blank" rel="noopener noreferrer" className="fw-semibold text-decoration-none" style={{ color: '#667eea' }}>
            Futuristic5 IT Solutions LLP
          </a>
        </p>
      </div>

      <div className="row align-items-start gy-5">
        <div className="col-lg-5">
          <div className="p-4 rounded-4 mb-4 bg-white shadow-lg" style={{ boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)' }}>
            <h3 className="fw-bold mb-4 text-primary">What to Expect</h3>
            <div className="d-flex align-items-start mb-3">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-3 mt-1 fs-4" />
              <div>
                <h6 className="fw-bold mb-1">Personalized Demo</h6>
                <p className="text-muted small mb-0">30-minute session tailored to your school&apos;s needs</p>
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
                <a href="mailto:hello@futuristic5.com" className="text-decoration-none text-dark fw-semibold">hello@futuristic5.com</a>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faPhone} className="text-primary me-3 fs-4" />
              <div>
                <strong>Phone</strong><br />
                <a href="tel:+91 0123456789" className="text-decoration-none text-dark fw-semibold">+91 0123456789</a>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3 mt-1 fs-4" />
              <div>
                <strong>Address</strong><br />
                Office No. 218, The Capital, 15, NIBM Road<br />
                Pune, Maharashtra, India - 411048
              </div>
            </div>
            <div className="d-flex align-items-center pt-3" style={{ borderTop: '1px solid #e2e8f0' }}>
              <FontAwesomeIcon icon={faLaptopCode} className="text-primary me-3 fs-4" />
              <div>
                <strong>Developed by</strong><br />
                <a
                  href={FUTURISTIC5_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none fw-semibold"
                  style={{ color: '#667eea' }}
                >
                  Futuristic5 IT Solutions LLP
                </a>
                <br />
                <a
                  href={FUTURISTIC5_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted small text-decoration-none"
                >
                  www.futuristic5.com
                </a>
              </div>
            </div>
          </div>
        </div>

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
                    <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />We&apos;ll review your requirements</li>
                    <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Schedule a convenient time</li>
                    <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Prepare a customized demo</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />Answer all your questions</li>
                  </ul>
                </div>
                <Link to="/" className="btn btn-primary btn-lg me-3 rounded-pill px-4">
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  Back to Home
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCaptchaInput('');
                    captchaRef.current?.refresh();
                  }}
                  className="btn btn-outline-primary btn-lg rounded-pill px-4"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h4 className="fw-bold mb-4 text-primary">Tell Us About Your School</h4>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-bold">Full Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} className="form-control rounded-pill py-2" placeholder="Your full name" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-bold">Email Address *</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className="form-control rounded-pill py-2" placeholder="you@school.edu" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-bold">Phone Number *</label>
                    <input
                      name="mobile"
                      type="text"
                      inputMode="numeric"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="form-control rounded-pill py-2"
                      placeholder="+91 1234567890"
                      maxLength={10}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">School / Institution Name *</label>
                  <input name="school" value={formData.school} onChange={handleChange} className="form-control rounded-pill py-2" placeholder="School name" />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">Preferred Demo Time *</label>
                  <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="form-select rounded-pill py-2">
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">Additional Information *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="form-control rounded-4 py-3" rows="4" placeholder="Tell us about your specific needs, challenges, or questions..." />
                </div>

                <CaptchaField
                  ref={captchaRef}
                  value={captchaInput}
                  onChange={handleCaptchaChange}
                  onRefresh={handleCaptchaRefresh}
                  inputId={captchaInputId}
                />

                <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill fw-bold py-3 shadow-sm">
                  <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                  Request Free Demo
                </button>

                <p className="text-muted text-center mt-3 small">
                  By submitting this form, you agree to our <Link to="/privacy-policy" className="text-primary">Privacy Policy</Link> and <Link to="/terms-and-conditions" className="text-primary">Terms &amp; Conditions</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoRequestSection;
