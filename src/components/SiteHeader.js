import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const NAV_SECTIONS = ['Home', 'Features', 'Pricing', 'Testimonials'];
const SOFTWARE_LOGIN_URL = 'https://skoolweb.f5universe.com/';
const FUTURISTIC5_URL = 'https://www.futuristic5.com/';

const SiteHeader = () => {
  const { pathname, hash } = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') return;

      const sections = ['home', 'features', 'pricing', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/contact') {
      setActiveSection('contact');
    } else if (pathname === '/pricing') {
      setActiveSection('pricing');
    } else if (pathname === '/' && hash) {
      setActiveSection(hash.replace('#', ''));
    }
  }, [pathname, hash]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, hash]);

  const closeMenu = () => setIsMenuOpen(false);

  const isLinkActive = (key) => {
    if (key === 'contact') return pathname === '/contact' || (isHomePage && activeSection === 'contact');
    if (pathname === '/pricing' && key === 'pricing') return true;
    return isHomePage && activeSection === key;
  };

  const navLinkStyle = (key) => ({
    position: 'relative',
    transition: 'all 0.3s ease',
    color: isLinkActive(key) ? '#c7d2fe' : 'rgba(255, 255, 255, 0.9)',
  });

  const activeUnderline = (
    <span
      style={{
        position: 'absolute',
        bottom: '-2px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '20px',
        height: '3px',
        background: 'linear-gradient(90deg, #667eea, #764ba2)',
        borderRadius: '2px',
      }}
    />
  );

  return (
    <header className="site-header fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/" onClick={closeMenu}>
            <div
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginRight: '12px',
                fontSize: '22px',
                fontWeight: '900',
                boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)',
                animation: 'pulse2 2s infinite',
              }}
            >
              SK
            </div>
            <span>
              <span className="gradient-text-pro d-block" style={{ fontSize: '1.5rem', fontWeight: '900', lineHeight: 1.1 }}>
                SKOOLWEB
              </span>
              <span
                className="site-header-tagline d-block"
                style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.04em' }}
              >
                by{' '}
                <a
                  href={FUTURISTIC5_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ color: 'rgba(199, 210, 254, 0.9)', textDecoration: 'none' }}
                >
                  Futuristic5
                </a>
              </span>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="siteNavbar">
            <ul className="navbar-nav ms-auto align-items-center flex-lg-nowrap">
              {NAV_SECTIONS.map((item) => {
                const key = item.toLowerCase();
                const active = isLinkActive(key);

                return (
                  <li className="nav-item" key={item}>
                    {isHomePage ? (
                      <a
                        className={`nav-link fw-500 px-2 px-xl-3 ${active ? 'active' : ''}`}
                        href={`#${key}`}
                        style={navLinkStyle(key)}
                        onClick={closeMenu}
                      >
                        {item}
                        {active && activeUnderline}
                      </a>
                    ) : (
                      <Link
                        className={`nav-link fw-500 px-2 px-xl-3 ${active ? 'active' : ''}`}
                        to={{ pathname: '/', hash: `#${key}` }}
                        style={navLinkStyle(key)}
                        onClick={closeMenu}
                      >
                        {item}
                        {active && activeUnderline}
                      </Link>
                    )}
                  </li>
                );
              })}

              <li className="nav-item">
                {isHomePage ? (
                  <a
                    href="#contact"
                    className={`nav-link fw-500 px-2 px-xl-3 ${isLinkActive('contact') ? 'active' : ''}`}
                    style={navLinkStyle('contact')}
                    onClick={closeMenu}
                  >
                    Contact
                    {isLinkActive('contact') && activeUnderline}
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className={`nav-link fw-500 px-2 px-xl-3 ${isLinkActive('contact') ? 'active' : ''}`}
                    style={navLinkStyle('contact')}
                    onClick={closeMenu}
                  >
                    Contact
                    {isLinkActive('contact') && activeUnderline}
                  </Link>
                )}
              </li>

              <li className="nav-item ms-lg-1">
                {isHomePage ? (
                  <a
                    href="#contact"
                    className="btn btn-pro btn-primary rounded-pill site-header-cta site-header-demo"
                    onClick={closeMenu}
                  >
                    <FontAwesomeIcon icon={faRocket} className="me-2" />
                    Request Demo
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className="btn btn-pro btn-primary rounded-pill site-header-cta site-header-demo"
                    onClick={closeMenu}
                  >
                    <FontAwesomeIcon icon={faRocket} className="me-2" />
                    Request Demo
                  </Link>
                )}
              </li>

              <li className="nav-item site-header-login-item">
                <a
                  href={SOFTWARE_LOGIN_URL}
                  className="btn btn-pro rounded-pill site-header-cta site-header-login"
                  onClick={closeMenu}
                >
                  <span className="site-header-login-icon" aria-hidden="true">
                    <FontAwesomeIcon icon={faCircleUser} />
                  </span>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
