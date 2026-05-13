import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck, faUsers, faBookOpen, faClipboardList, faChartLine, faCalendarAlt, faBullhorn, faArrowRight, faClock, faTrophy, faLightbulb, faDesktop, faEnvelope, faPhone, faPlay, faRocket, faShieldAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Header */}
      <header className={`navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm navbar-realistic ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="container">
          <Link className="navbar-brand fw-bold d-flex align-items-center interactive-element" to="/">
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              marginRight: '10px',
              fontSize: '20px',
              animation: 'bounceIn 1s ease-out'
            }}>SK</div>
            <span className="gradient-text">SKOOLWEB</span>
          </Link>
          <button className="navbar-toggler interactive-element" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><a className="nav-link interactive-element" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link interactive-element" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link interactive-element" href="#pricing">Pricing</a></li>
              <li className="nav-item"><Link className="nav-link interactive-element" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="btn btn-realistic btn-primary ms-3" to="/contact">Request Demo</Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={`py-5 ${isVisible ? 'animate-fade-up' : ''}`} style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        paddingTop: '120px',
        paddingBottom: '120px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Floating Shapes */}
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>

        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className={`col-lg-6 ${isVisible ? 'animate-fade-right stagger-1' : ''}`}>
              <div className="mb-4">
                <span style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  display: 'inline-block',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <FontAwesomeIcon icon={faRocket} className="me-2" />
                  Next-Generation School Management
                </span>
              </div>
              <h1 className="hero-heading mb-4" style={{ fontSize: '3.5rem' }}>
                Transform Your School with
                <span className="hero-heading-highlight d-block">SKOOLWEB</span>
              </h1>
              <p className="hero-copy mb-4">
                Streamline administrative tasks, enhance parent-teacher communication, and create a digital learning environment that drives student success. Join 500+ schools already revolutionizing education.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-5">
                <Link to="/contact" className="btn btn-realistic btn-light btn-lg fw-bold px-4 py-3">
                  <FontAwesomeIcon icon={faPlay} className="me-2" />
                  Start Free Trial
                </Link>
                <a href="#features" className="btn btn-outline-light btn-lg fw-bold px-4 py-3 interactive-element">
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  Explore Features
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="trust-banner card-realistic p-4 mt-4">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-4">
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <div className="trust-stat text-start">
                      <div className="trust-value">500+</div>
                      <div className="trust-label">Schools Trust Us</div>
                    </div>
                    <div className="trust-stat text-start">
                      <div className="trust-value">50K+</div>
                      <div className="trust-label">Active Users</div>
                    </div>
                    <div className="trust-stat text-start">
                      <div className="trust-value">4.9★</div>
                      <div className="trust-label">Average Rating</div>
                    </div>
                  </div>
                  <div className="trust-note">
                    <div className="d-flex me-2">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="text-warning me-1" style={{ fontSize: '14px' }} />
                      ))}
                    </div>
                    <span>Trusted by educators worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-lg-6 ${isVisible ? 'animate-fade-left stagger-2' : ''}`}>
              <div className="position-relative">
                {/* Main Dashboard Preview */}
                <div style={{
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '24px',
                  padding: '40px',
                  boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Browser Header */}
                  <div style={{
                    background: '#f8f9fa',
                    borderRadius: '12px 12px 0 0',
                    padding: '12px 20px',
                    borderBottom: '1px solid #e9ecef',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28ca42' }}></div>
                    <div style={{ flex: 1, textAlign: 'center', fontSize: '12px', color: '#6c757d' }}>
                      skoolweb.com/dashboard
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div style={{
                    padding: '30px',
                    background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
                    borderRadius: '0 0 12px 12px'
                  }}>
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="card-realistic p-3 mb-3">
                          <div className="d-flex align-items-center">
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '10px',
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              marginRight: '12px'
                            }}>
                              <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <div>
                              <h6 className="mb-0 fw-bold">1,247</h6>
                              <small className="text-muted">Students</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="card-realistic p-3 mb-3">
                          <div className="d-flex align-items-center">
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '10px',
                              background: 'linear-gradient(135deg, #48bb78, #38a169)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              marginRight: '12px'
                            }}>
                              <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <div>
                              <h6 className="mb-0 fw-bold">98.5%</h6>
                              <small className="text-muted">Attendance</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        margin: '0 auto 20px',
                        animation: 'pulse 2s infinite'
                      }}>
                        SK
                      </div>
                      <h5 className="fw-bold mb-2" style={{ color: '#1f2145' }}>Welcome to SKOOLWEB</h5>
                      <p className="text-muted small mb-0">Your complete school management solution</p>
                    </div>
                  </div>
                </div>

                {/* Floating Notification */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  background: 'white',
                  borderRadius: '16px',
                  padding: '16px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  animation: 'float 3s ease-in-out infinite',
                  border: '2px solid #667eea'
                }}>
                  <div className="d-flex align-items-center">
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #48bb78, #38a169)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      marginRight: '12px'
                    }}>
                      ✓
                    </div>
                    <div>
                      <div className="fw-bold small">New Message</div>
                      <div className="text-muted small">Parent notification sent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h3 style={{
              color: '#4f46e5',
              marginBottom: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.02em',
              fontSize: '1.15rem'
            }}>
              Powerful Features
            </h3>
            <h2 className="display-realistic mb-4" style={{ fontSize: '2.8rem' }}>
              Everything Your School Needs
            </h2>
            <p className="lead-realistic mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive tools designed specifically for modern educational institutions, helping you manage every aspect of school operations with ease and efficiency.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: faUsers,
                title: 'Smart Student Management',
                desc: 'Complete student profiles with academic records, attendance tracking, and personalized learning paths. Real-time updates for parents and teachers.',
                color: '#667eea',
                stats: '1,247 Students'
              },
              {
                icon: faBookOpen,
                title: 'Advanced Curriculum Management',
                desc: 'Dynamic syllabus planning, lesson scheduling, and resource allocation. Track progress and adapt to individual learning needs.',
                color: '#764ba2',
                stats: '85 Courses'
              },
              {
                icon: faClipboardList,
                title: 'Intelligent Attendance System',
                desc: 'Automated attendance marking with biometric integration, real-time notifications, and comprehensive reporting for compliance.',
                color: '#48bb78',
                stats: '98.5% Avg'
              },
              {
                icon: faChartLine,
                title: 'Analytics & Insights',
                desc: 'Data-driven decision making with detailed reports, performance analytics, and predictive insights for student success.',
                color: '#f093fb',
                stats: '50+ Reports'
              },
              {
                icon: faBullhorn,
                title: 'Unified Communication',
                desc: 'Seamless messaging between teachers, parents, and students. Announcements, events, and emergency notifications in one platform.',
                color: '#f5576c',
                stats: '24/7 Support'
              },
              {
                icon: faCalendarAlt,
                title: 'Smart Scheduling',
                desc: 'AI-powered timetable generation, resource booking, and conflict resolution. Optimize your school\'s time management.',
                color: '#4facfe',
                stats: 'Zero Conflicts'
              },
            ].map((feature, index) => (
              <div key={index} className={`col-lg-4 col-md-6 animate-fade-up stagger-${index + 1}`}>
                <div className="card-realistic h-100 p-4 interactive-element feature-card" style={{
                  border: 'none',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: `0 8px 25px ${feature.color}30`,
                      marginRight: '16px'
                    }}>
                      <FontAwesomeIcon icon={feature.icon} size="lg" style={{ color: 'white' }} />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1" style={{ color: feature.color }}>{feature.stats}</h6>
                      <small className="text-muted">Live Data</small>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#1f2145' }}>{feature.title}</h5>
                  <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Showcase */}
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6">
              <div className="card-realistic p-4" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon icon={faShieldAlt} size="2x" className="me-3" />
                  <h4 className="mb-0 fw-bold">Enterprise Security</h4>
                </div>
                <p className="mb-4 opacity-90">Bank-level encryption, GDPR compliance, and 99.9% uptime guarantee. Your school data is completely secure.</p>
                <div className="d-flex gap-3">
                  <div className="text-center">
                    <div className="fw-bold h4 mb-0">256-bit</div>
                    <small className="opacity-75">SSL Encryption</small>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold h4 mb-0">99.9%</div>
                    <small className="opacity-75">Uptime</small>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold h4 mb-0">24/7</div>
                    <small className="opacity-75">Monitoring</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-realistic p-4" style={{
                background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                color: 'white',
                border: 'none'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon icon={faGlobe} size="2x" className="me-3" />
                  <h4 className="mb-0 fw-bold">Global Reach</h4>
                </div>
                <p className="mb-4 opacity-90">Used by schools in 25+ countries with multi-language support and localized features.</p>
                <div className="d-flex gap-3 flex-wrap">
                  <span className="badge bg-white bg-opacity-20 px-3 py-2">🇺🇸 English</span>
                  <span className="badge bg-white bg-opacity-20 px-3 py-2">🇪🇸 Español</span>
                  <span className="badge bg-white bg-opacity-20 px-3 py-2">🇫🇷 Français</span>
                  <span className="badge bg-white bg-opacity-20 px-3 py-2">🇩🇪 Deutsch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students Showcase Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>Our Students</span>
            <h2 className="display-5 fw-bold mb-3">Success Stories</h2>
            <p className="lead text-muted mb-5">Meet some of our outstanding students who are excelling with SKOOLWEB</p>
          </div>

          <div className="row g-4">
            {[
              {
                name: 'Emma Thompson',
                grade: 'Grade 10',
                achievement: 'Top Student Award',
                image: '/images/emma.jpg',
                imageAlt: 'Female student smiling at desk',
                quote: 'SKOOLWEB helped me stay organized and achieve my goals!'
              },
              {
                name: 'Alex Rodriguez',
                grade: 'Grade 8',
                achievement: 'Science Fair Winner',
                image: '/images/alex.jpg',
                imageAlt: 'Student working on a science project',
                quote: 'The platform makes learning fun and interactive.'
              },
              {
                name: 'Sophia Chen',
                grade: 'Grade 12',
                achievement: 'Valedictorian',
                image: '/images/sophia.jpg',
                imageAlt: 'Student celebrating academic achievement',
                quote: 'SKOOLWEB prepared me for college success.'
              },
              {
                name: 'Marcus Johnson',
                grade: 'Grade 9',
                achievement: 'Athletics MVP',
                image: '/images/marcus.jpg',
                imageAlt: 'Active student with sports spirit',
                quote: 'Balancing sports and studies has never been easier!'
              }
            ].map((student, index) => (
              <div key={index} className="col-md-3 animate-fade-up student-card" style={{ animationDelay: `${150 + index * 100}ms` }}>
                <div className="card h-100 border-0 shadow-sm" style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <img src={student.image} alt={student.imageAlt} className="student-photo" />
                  <div className="card-body text-center">
                    <h6 className="fw-bold mb-1">{student.name}</h6>
                    <p className="text-muted small mb-2">{student.grade}</p>
                    <span className="badge bg-primary mb-3">{student.achievement}</span>
                    <p className="card-text small">"{student.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Capabilities */}
      <section className="py-5" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>Template Benefits</span>
            <h2 className="display-5 fw-bold mb-3">Why Choose SKOOLWEB?</h2>
          </div>

          <div className="row g-4 animate-fade-up animate-delay-100">
            {[
              { icon: faClock, title: '10x Faster Development', desc: 'Pre-built components and pages save weeks of development time' },
              { icon: faTrophy, title: 'Production Ready', desc: 'Optimized performance and best practices built-in' },
              { icon: faDesktop, title: 'Fully Responsive', desc: 'Works perfectly on desktop, tablet, and mobile devices' },
              { icon: faLightbulb, title: 'Easy to Customize', desc: 'Clean code structure for quick modifications' },
            ].map((item, index) => (
              <div key={index} className="col-md-6 animate-fade-up" style={{ animationDelay: `${150 + index * 100}ms` }}>
                <div className="d-flex gap-4 p-4" style={{
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FontAwesomeIcon icon={item.icon} size="lg" style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-5 animate-fade-up animate-delay-100" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>Pricing</span>
            <h2 className="display-5 fw-bold mb-3">Clear pricing for school success</h2>
            <p className="lead text-muted mb-5">Pick the best SKOOLWEB plan for your institution and start automating today.</p>
          </div>

          <div className="row g-4">
            {[
              {
                title: 'Starter',
                price: '$59',
                description: 'Perfect for small schools starting their digital journey',
                features: ['Student profiles', 'Attendance tracking', 'Parent portal', 'Email support'],
                label: 'Request Demo'
              },
              {
                title: 'Growth',
                price: '$129',
                description: 'For growing schools that want analytics and automation',
                features: ['Everything in Starter', 'Grade insights', 'Timetable planner', 'SMS alerts'],
                popular: true,
                label: 'Book Call'
              },
              {
                title: 'Enterprise',
                price: 'Custom',
                description: 'Best for larger schools and district-wide rollouts',
                features: ['Custom setup', 'Dedicated success partner', 'Advanced reports', 'Priority support'],
                label: 'Contact Sales'
              }
            ].map((plan, index) => (
              <div key={index} className="col-md-4 animate-fade-up" style={{ animationDelay: `${150 + index * 120}ms` }}>
                <div className={`pricing-card card h-100 p-4 rounded-4 ${plan.popular ? 'pricing-card-popular' : 'bg-white'}`}>
                  <div className="card-body d-flex flex-column h-100">
                    {plan.popular && <span className="pricing-badge mb-3">Popular</span>}
                    <h5 className="fw-bold">{plan.title}</h5>
                    <h2 className="display-5 fw-bold my-3">{plan.price}</h2>
                    <p className="text-muted">{plan.description}</p>
                    <ul className="list-unstyled mt-4 mb-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="d-flex align-items-center mb-2 text-muted">
                          <FontAwesomeIcon icon={faCheck} className="me-2 text-success" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className={`btn btn-lg w-100 fw-bold ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`}>{plan.label}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5 animate-fade-up animate-delay-100">
        <div className="container">
          <div className="text-center mb-5">
            <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              display: 'inline-block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>Testimonials</span>
            <h2 className="display-5 fw-bold mb-3">Loved by Schools Worldwide</h2>
            <p className="lead text-muted">See what our users have to say</p>
          </div>

          <div className="row g-4">
            {[
              {
                name: 'Sarah Johnson',
                role: 'School Principal',
                text: 'SKOOLWEB completely transformed how we manage our school. The interface is so intuitive!',
                avatar: '👩‍💼'
              },
              {
                name: 'Ahmed Khan',
                role: 'IT Manager',
                text: 'Implementation was smooth and support team is incredibly responsive. Highly recommended!',
                avatar: '👨‍💻'
              },
              {
                name: 'Maria Garcia',
                role: 'Teacher',
                text: 'Grading and attendance tracking is now so easy. Parents love the instant notifications!',
                avatar: '👩‍🏫'
              },
            ].map((testimonial, index) => (
              <div key={index} className="col-md-4 animate-fade-up" style={{ animationDelay: `${150 + index * 120}ms` }}>
                <div className="card h-100 border-0 testimonial-card" style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  borderRadius: '15px'
                }}>
                  <div className="card-body">
                    <div className="mb-3 d-flex">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="me-1" style={{ color: '#ffc107' }} />
                      ))}
                    </div>
                    <p className="card-text mb-4">"{testimonial.text}"</p>
                    <div className="d-flex align-items-center">
                      <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        marginRight: '12px',
                        transition: 'transform 0.3s ease'
                      }}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-fade-up animate-delay-100" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}>
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-4">Ready to Transform Your School?</h2>
          <p className="lead mb-5">Join 500+ schools already using SKOOLWEB to streamline their operations</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <Link to="/contact" className="btn btn-light btn-lg fw-bold px-5">
              <FontAwesomeIcon icon={faArrowRight} className="me-2" />
              Request a Demo
            </Link>
            <a href="#pricing" className="btn btn-outline-light btn-lg fw-bold px-5">View Pricing</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="animate-fade-up animate-delay-100" style={{ background: '#0f172a', color: 'white', paddingTop: '60px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="d-flex align-items-center mb-3">
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginRight: '10px',
                  fontSize: '20px'
                }}>SK</div>
                <h5 className="mb-0 fw-bold">SKOOLWEB</h5>
              </div>
              <p style={{ color: '#94a3b8' }}>Transforming education with innovative school management solutions that empower educators, engage parents, and inspire students.</p>
              <div className="d-flex gap-3 mt-3">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover-primary">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover-primary">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover-primary">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Product</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#features" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Features</a></li>
                <li className="mb-2"><a href="#pricing" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Pricing</a></li>
                <li className="mb-2"><Link to="/contact" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Request Demo</Link></li>
                <li className="mb-2"><Link to="/pricing" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Plans</Link></li>
                <li className="mb-2"><a href="#testimonials" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#home" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Home</a></li>
                <li className="mb-2"><Link to="/contact" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">About Us</Link></li>
                <li className="mb-2"><Link to="/contact" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Careers</Link></li>
                <li className="mb-2"><Link to="/contact" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Support</Link></li>
                <li className="mb-2"><Link to="/contact" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="fw-bold mb-3">Resources</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#help" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Help Center</a></li>
                <li className="mb-2"><a href="#blog" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Blog</a></li>
                <li className="mb-2"><a href="#guides" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Implementation Guides</a></li>
                <li className="mb-2"><a href="#api" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">API Docs</a></li>
                <li className="mb-2"><a href="#webinars" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Webinars</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="fw-bold mb-3">Stay Connected</h6>
              <p style={{ color: '#94a3b8' }}>Get the latest updates on new features, educational insights, and success stories.</p>
              <form className="d-flex gap-2 mb-3">
                <input type="email" className="form-control rounded-pill" placeholder="Your email" aria-label="Your email" style={{ background: '#1e293b', border: '1px solid #334155', color: 'white' }} />
                <button className="btn btn-primary rounded-pill">Subscribe</button>
              </form>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" style={{ color: '#94a3b8' }} />
                <a href="mailto:hello@skoolweb.com" style={{ color: '#94a3b8' }} className="text-decoration-none">hello@skoolweb.com</a>
              </div>
              <div className="d-flex align-items-center mt-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" style={{ color: '#94a3b8' }} />
                <span style={{ color: '#94a3b8' }}>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          <hr style={{ borderColor: '#273449' }} />
          <div className="row align-items-center">
            <div className="col-md-6" style={{ color: '#94a3b8' }}>
              <p className="mb-0">&copy; 2026 SKOOLWEB. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-end">
              <a href="#privacy" style={{ color: '#94a3b8' }} className="me-3 footer-link text-decoration-none">Privacy Policy</a>
              <a href="#terms" style={{ color: '#94a3b8' }} className="me-3 footer-link text-decoration-none">Terms of Service</a>
              <a href="#cookies" style={{ color: '#94a3b8' }} className="footer-link text-decoration-none">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;