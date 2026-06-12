import React from 'react';
import { Link } from 'react-router-dom';

const FUTURISTIC5_URL = 'https://www.futuristic5.com/';

const linkStyle = {
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
};

const handleLinkHover = (e, enter) => {
  e.target.style.color = enter ? '#667eea' : '#94a3b8';
};

const SiteFooter = () => (
  <footer className="site-footer" style={{ background: '#0f172a', color: 'white', paddingTop: '80px', paddingBottom: '40px' }}>
    <div className="container">
      <div className="row mb-5 justify-content-center site-footer-top">
        <div className="col-lg-4 col-md-6 mb-4 text-center text-md-start site-footer-brand">
          <div className="d-flex align-items-center mb-4 justify-content-center justify-content-md-start">
            <div
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginRight: '14px',
                fontSize: '22px',
                fontWeight: '900',
              }}
            >
              SK
            </div>
            <div>
              <h5 className="mb-0 fw-bold" style={{ fontSize: '1.5rem' }}>SKOOLWEB</h5>
              <p className="mb-0 mt-1" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                by{' '}
                <a
                  href={FUTURISTIC5_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c7d2fe', textDecoration: 'none', fontWeight: 600 }}
                  onMouseEnter={(e) => { e.target.style.color = '#667eea'; }}
                  onMouseLeave={(e) => { e.target.style.color = '#c7d2fe'; }}
                >
                  Futuristic5
                </a>
              </p>
            </div>
          </div>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Transforming education with innovative school management solutions that empower educators, engage parents, and inspire students worldwide. Developed by{' '}
            <a
              href={FUTURISTIC5_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#c7d2fe', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.target.style.color = '#667eea'; }}
              onMouseLeave={(e) => { e.target.style.color = '#c7d2fe'; }}
            >
              Futuristic5 IT Solutions LLP
            </a>.
          </p>
        </div>

        <div className="col-lg-2 col-md-3 mb-4 text-center text-md-start site-footer-col">
          <h6 className="fw-bold mb-4 site-footer-heading" style={{ fontSize: '1.1rem' }}>Product</h6>
          <ul className="list-unstyled">
            <li className="mb-3">
              <Link
                to="/#features"
                style={linkStyle}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Features
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/pricing"
                style={linkStyle}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 mb-4 text-center text-md-start site-footer-col">
          <h6 className="fw-bold mb-4 site-footer-heading" style={{ fontSize: '1.1rem' }}>Company</h6>
          <ul className="list-unstyled">
            <li className="mb-3">
              <Link
                to="/#contact"
                style={linkStyle}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Contact
              </Link>
            </li>
            <li className="mb-3">
              <a
                href={FUTURISTIC5_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Futuristic5
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-3 mb-4 text-center text-md-start site-footer-col">
          <h6 className="fw-bold mb-4 site-footer-heading" style={{ fontSize: '1.1rem' }}>Legal</h6>
          <ul className="list-unstyled">
            <li className="mb-3">
              <Link
                to="/privacy-policy"
                style={linkStyle}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Privacy Policy
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/terms-and-conditions"
                style={linkStyle}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

      <div className="row align-items-center justify-content-center text-center">
        <div className="col-12">
          <p className="mb-1" style={{ color: '#64748b', fontSize: '0.95rem' }}>
            &copy; 2026 SKOOLWEB. All rights reserved.
          </p>
          <p className="mb-0" style={{ color: '#64748b', fontSize: '0.9rem' }}>
            SkoolWeb by{' '}
            <a
              href={FUTURISTIC5_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#94a3b8', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.target.style.color = '#667eea'; }}
              onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; }}
            >
              Futuristic5 IT Solutions LLP
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
