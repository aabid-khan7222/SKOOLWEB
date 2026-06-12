import React, { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';
import DemoRequestSection from '../components/DemoRequestSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar, faCheck, faCheckCircle, faUsers, faBookOpen, faClipboardList, faChartLine, faCalendarAlt, faBullhorn, faBell, faArrowRight, faClock, faTrophy, faLightbulb, faDesktop, faPlay, faRocket, faShieldAlt, faGlobe, faChevronDown, faChevronUp, faAward, faGraduationCap, faChalkboardTeacher, faSchool, faFileAlt, faMoneyBillWave, faCog, faMobileAlt, faCloud, faLock, faHeadset, faHandshake, faMagic, faZap, faSync, faChartPie, faUserFriends, faLaptopCode, faPalette, faLayerGroup, faThumbsUp, faQuoteLeft, faChevronRight, faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';

const API_BASE = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/$/, '');
const SCHOOL_HOME_PAGE_API = `${API_BASE}/api/public/school-home-page`;
const FUTURISTIC5_URL = 'https://www.futuristic5.com/';

const buildStatsMap = (stats) => {
  if (!stats) return {};

  if (Array.isArray(stats)) {
    return stats.reduce((acc, item) => {
      const label = item?.label || item?.title || item?.name;
      const value = item?.value ?? item?.display ?? item?.count;
      if (label != null && value != null && value !== '') {
        acc[String(label).trim()] = String(value);
      }
      return acc;
    }, {});
  }

  if (typeof stats === 'object') {
    const labelByKey = {
      totalStudents: 'Total Students',
      attendanceRate: 'Attendance Rate',
      activeUsers: 'Active Users',
      uptimeGuarantee: 'Uptime Guarantee',
      totalSubjects: 'Total Subjects',
      totalReports: 'Total Reports',
    };

    return Object.entries(stats).reduce((acc, [key, item]) => {
      const label = labelByKey[key] || item?.label || item?.title || key;
      const value = typeof item === 'object' && item !== null
        ? item?.value ?? item?.display ?? item?.count
        : item;
      if (label && value != null && value !== '') {
        acc[String(label).trim()] = String(value);
      }
      return acc;
    }, {});
  }

  return {};
};

const LandingPage = () => {

  const [isVisible, setIsVisible] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 

  // फीचर्स को इन-प्लेस पॉपअप में दिखाने के लिए स्टेट

  const [expandedPlans, setExpandedPlans] = useState({});

  const [statsMap, setStatsMap] = useState({});



  const heroRef = useRef(null);

  const featuresRef = useRef(null);

  const statsRef = useRef(null);



  const toggleFeatures = (index) => {

    setExpandedPlans(prev => ({

      ...prev,

      [index]: !prev[index]

    }));

  };

  const getStat = (label) => statsMap[label] || '—';



  useEffect(() => {
    const controller = new AbortController();

    fetch(SCHOOL_HOME_PAGE_API, { signal: controller.signal })
      .then((res) => res.json())
      .then((result) => {
        const stats = result?.success ? result?.data?.content?.stats : null;
        if (stats) {
          setStatsMap(buildStatsMap(stats));
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('School home page API:', err.message);
        }
      });

    return () => controller.abort();
  }, []);



  useEffect(() => {

    setIsVisible(true);



    const handleMouseMove = (e) => {

      setMousePosition({ x: e.clientX, y: e.clientY });

    };



    window.addEventListener('mousemove', handleMouseMove);

    return () => {

      window.removeEventListener('mousemove', handleMouseMove);

    };

  }, []);



  // Intersection Observer for scroll animations

  useEffect(() => {

    const observerOptions = {

      threshold: 0.1,

      rootMargin: '0px 0px -50px 0px'

    };



    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('animate-in');

        }

      });

    }, observerOptions);



    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));



    return () => observer.disconnect();

  }, []);



  return (

    <div style={{ overflowX: 'hidden', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Custom CSS for advanced animations */}

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

       

        * {

          margin: 0;

          padding: 0;

          box-sizing: border-box;

        }



        html {

          scroll-behavior: smooth;

        }



        body {

          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

          line-height: 1.6;

          color: #1a1a2e;

          background-color: #ffffff;

          overflow-x: hidden;

        }



        /* Custom Scrollbar for Features Popup Box */

        .features-scrollbar::-webkit-scrollbar {

          width: 6px;

        }

        .features-scrollbar::-webkit-scrollbar-track {

          background: #f1f1f1;

          border-radius: 10px;

        }

        .features-scrollbar::-webkit-scrollbar-thumb {

          background: #667eea;

          border-radius: 10px;

        }

        .features-scrollbar::-webkit-scrollbar-thumb:hover {

          background: #764ba2;

        }



        /* Advanced Gradient Animations */

        @keyframes gradientShift {

          0% { background-position: 0% 50%; }

          50% { background-position: 100% 50%; }

          100% { background-position: 0% 50%; }

        }



        @keyframes float3D {

          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }

          25% { transform: translateY(-10px) rotateX(2deg) rotateY(2deg); }

          50% { transform: translateY(-5px) rotateX(0deg) rotateY(-2deg); }

          75% { transform: translateY(-15px) rotateX(-2deg) rotateY(1deg); }

        }



        @keyframes morphing {

          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }

          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }

          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }

        }



        @keyframes shimmer {

          0% { transform: translateX(-100%); }

          100% { transform: translateX(100%); }

        }



        @keyframes glow {

          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }

          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6), 0 0 60px rgba(139, 92, 246, 0.4); }

        }



        @keyframes slideUpFade {

          from { opacity: 0; transform: translateY(60px) scale(0.95); }

          to { opacity: 1; transform: translateY(0) scale(1); }

        }



        @keyframes slideInFromLeft {

          from { opacity: 0; transform: translateX(-80px) rotate(-5deg); }

          to { opacity: 1; transform: translateX(0) rotate(0); }

        }



        @keyframes slideInFromRight {

          from { opacity: 0; transform: translateX(80px) rotate(5deg); }

          to { opacity: 1; transform: translateX(0) rotate(0); }

        }



        @keyframes pulse2 {

          0%, 100% { transform: scale(1); opacity: 1; }

          50% { transform: scale(1.05); opacity: 0.8; }

        }



        @keyframes numberCount {

          from { opacity: 0; transform: translateY(20px); }

          to { opacity: 1; transform: translateY(0); }

        }



        .scroll-animate {

          opacity: 0;

          transform: translateY(40px);

          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

        }



        .scroll-animate.animate-in {

          opacity: 1;

          transform: translateY(0);

        }



        .glass-effect {

          background: rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(20px);

          -webkit-backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.3);

        }



        .gradient-text-pro {

          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);

          background-size: 200% auto;

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

          background-clip: text;

          animation: gradientShift 3s ease infinite;

        }



        .btn-pro {

          position: relative;

          overflow: hidden;

          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

          border: none;

          font-weight: 600;

        }



        .btn-pro::before {

          content: '';

          position: absolute;

          top: 0;

          left: -100%;

          width: 100%;

          height: 100%;

          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);

          transition: left 0.6s;

        }



        .btn-pro:hover::before {

          left: 100%;

        }



        .btn-pro:hover {

          transform: translateY(-3px) scale(1.02);

          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);

        }



        .btn-pro.btn-outline-light:hover {

          background: #fff !important;

          color: #667eea !important;

          border-color: #fff !important;

        }



        .card-pro {

          background: white;

          border-radius: 24px;

          padding: 32px;

          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

          position: relative;

          overflow: hidden;

        }



        .card-pro::before {

          content: '';

          position: absolute;

          top: 0;

          left: 0;

          right: 0;

          height: 4px;

          background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);

          transform: scaleX(0);

          transition: transform 0.5s ease;

        }



        .card-pro:hover::before {

          transform: scaleX(1);

        }



        .card-pro:hover {

          transform: translateY(-12px) scale(1.02);

          box-shadow: 0 30px 60px rgba(99, 102, 241, 0.2);

        }



        .floating-element {

          animation: float3D 6s ease-in-out infinite;

        }



        .glow-effect {

          animation: glow 2s ease-in-out infinite;

        }



        /* Mesh Gradient Background */

        .mesh-gradient {

          background:

            radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),

            radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),

            radial-gradient(at 100% 100%, rgba(240, 147, 251, 0.15) 0px, transparent 50%),

            radial-gradient(at 0% 100%, rgba(99, 102, 241, 0.15) 0px, transparent 50%);

        }



        /* Noise texture overlay */

        .noise-overlay {

          position: fixed;

          top: 0;

          left: 0;

          width: 100%;

          height: 100%;

          pointer-events: none;

          opacity: 0.03;

          z-index: 9999;

          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");

        }



        .hero-text-col {

          position: relative;

          z-index: 2;

        }



        .hero-visual-col {

          position: relative;

          z-index: 1;

        }



        .hero-mockup-wrap {

          width: 100%;

          max-width: 540px;

          margin-left: auto;

          margin-right: auto;

        }



        @media (min-width: 1400px) {

          .hero-mockup-wrap {

            margin-right: 0;

          }

        }



        #home .hero-headline {

          font-size: clamp(2rem, 3.2vw, 3.75rem);

          line-height: 1.12;

        }

      `}</style>



      {/* Noise Texture Overlay */}

      <div className="noise-overlay"></div>



      {/* Hero Section */}

      <section

  id="home"

  ref={heroRef}

  className="position-relative"

  style={{

    background: 'radial-gradient(circle at 75% 30%, #26245e 0%, #171736 60%, #111126 100%)',

    minHeight: '100vh',

    paddingTop: 'calc(80px + 2rem)',

    paddingBottom: '80px',

    overflow: 'hidden',

    position: 'relative'

  }}

>

        {/* Animated Background Elements */}

        <div className="position-absolute" style={{

          top: '10%',

          left: '5%',

          width: '200px',

          height: '200px',

          background: 'rgba(255, 255, 255, 0.1)',

          borderRadius: '50%',

          filter: 'blur(40px)',

          animation: 'float3D 8s ease-in-out infinite'

        }}></div>

        <div className="position-absolute" style={{

          bottom: '20%',

          right: '10%',

          width: '300px',

          height: '300px',

          background: 'rgba(240, 147, 251, 0.15)',

          borderRadius: '50%',

          filter: 'blur(60px)',

          animation: 'float3D 10s ease-in-out infinite reverse'

        }}></div>



        {/* Grid Pattern */}

        <div style={{

          position: 'absolute',

          top: 0,

          left: 0,

          right: 0,

          bottom: 0,

          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,

          backgroundSize: '50px 50px',

          opacity: 0.5

        }}></div>



        <div className="container position-relative" style={{ zIndex: 2 }}>

          <div className="row align-items-start gx-4 gx-xxl-5 py-2">

            <div className={`col-12 col-xxl-6 hero-text-col ${isVisible ? 'animate-in' : ''}`} style={{

              animation: 'slideInFromLeft 1s ease-out',

              animationFillMode: 'both'

            }}>

              <div className="mb-4">

                <span className="badge rounded-pill px-4 py-2" style={{

                  background: 'rgba(255, 255, 255, 0.2)',

                  backdropFilter: 'blur(10px)',

                  border: '1px solid rgba(255, 255, 255, 0.3)',

                  color: 'white',

                  fontSize: '14px',

                  fontWeight: '600',

                  letterSpacing: '0.5px'

                }}>

                  <FontAwesomeIcon icon={faZap} className="me-2" />

                  All-in-One School Management Platform

                </span>

              </div>

              <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', fontWeight: 500 }}>
                SkoolWeb by{' '}
                <a
                  href={FUTURISTIC5_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c7d2fe', textDecoration: 'none', fontWeight: 600 }}
                >
                  Futuristic5
                </a>
              </p>

              <h1 className="display-3 fw-black mb-4 hero-headline" style={{

                lineHeight: 1.1,

                color: 'white',

                textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'

              }}>

                Revolutionize Your<br />

                <span style={{

                  background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.8))',

                  WebkitBackgroundClip: 'text',

                  WebkitTextFillColor: 'transparent'

                }}>Educational Institution</span>

              </h1>

             

              <p className="lead mb-5" style={{

                fontSize: '1.25rem',

                color: 'rgba(255, 255, 255, 0.9)',

                lineHeight: 1.8,

                maxWidth: '600px',

                textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'

              }}>

                Empower educators, engage parents, and inspire students with the most advanced school management system. Join 500+ forward-thinking schools transforming education today.

              </p>

             

              <div className="d-flex flex-wrap gap-3 mb-5 hero-cta-group">

                <a href="#contact" className="btn btn-pro btn-light btn-lg px-5 py-3 rounded-pill hero-cta-btn" style={{

                  background: 'white',

                  color: '#667eea',

                  fontWeight: '700',

                  fontSize: '1.1rem',

                  padding: '16px 36px',

                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',

                  border: 'none'

                }}>

                  <FontAwesomeIcon icon={faPlay} className="me-2" />

                  Start Free Trial

                </a>

                <a href="#features" className="btn btn-pro btn-outline-light btn-lg px-5 py-3 rounded-pill hero-cta-btn" style={{

                  borderWidth: '2px',

                  fontWeight: '600',

                  fontSize: '1.1rem',

                  padding: '16px 36px',

                  backdropFilter: 'blur(10px)',

                  background: 'rgba(255,255,255,0.1)'

                }}>

                  <FontAwesomeIcon icon={faChevronDown} className="me-2" />

                  Explore Features

                </a>

              </div>



              {/* Trust Indicators */}

              <div className="glass-effect rounded-4 p-4 hero-trust-banner" style={{

                backdropFilter: 'blur(20px)',

                border: '1px solid rgba(255,255,255,0.2)',

                background: 'rgba(255,255,255,0.1)'

              }}>

                <div className="hero-trust-layout">

                  <div className="hero-trust-stat text-center text-md-start">

                    <div className="fw-black hero-trust-value" style={{ fontSize: '2rem', color: 'white' }}>{getStat('Active Users')}</div>

                    <div className="small hero-trust-label" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Active Users</div>

                  </div>

                  <div className="hero-trust-stat text-center text-md-start">

                    <div className="fw-black hero-trust-value" style={{ fontSize: '2rem', color: 'white' }}>{getStat('Uptime Guarantee')}</div>

                    <div className="small hero-trust-label" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Uptime Guarantee</div>

                  </div>

                  <div className="hero-trust-bottom-row">

                    <div className="hero-trust-stat text-center text-md-start">

                      <div className="fw-black hero-trust-value" style={{ fontSize: '2rem', color: 'white' }}>{getStat('Total Students')}</div>

                      <div className="small hero-trust-label" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Total Students</div>

                    </div>

                    <div className="hero-trust-rating text-center text-md-end">

                      <div className="d-flex justify-content-center justify-content-md-end mb-1 hero-trust-stars">

                        {[...Array(5)].map((_, i) => (

                          <FontAwesomeIcon key={i} icon={faStar} className="text-warning me-1" style={{ fontSize: '18px' }} />

                        ))}

                      </div>

                      <div className="small hero-trust-rating-text" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600' }}>

                        4.9/5 User Rating

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>



            <div className={`col-12 col-xxl-6 hero-visual-col mt-4 mt-xxl-0 ${isVisible ? 'animate-in' : ''}`} style={{

              animation: 'slideInFromRight 1s ease-out',

              animationFillMode: 'both',

              animationDelay: '0.2s'

            }}>

              <div className="hero-mockup-wrap position-relative floating-element">

                {/* Main Dashboard Mockup */}

                <div className="card-pro" style={{

                  background: 'rgba(255, 255, 255, 0.95)',

                  backdropFilter: 'blur(20px)',

                  border: '1px solid rgba(255, 255, 255, 0.5)',

                  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.2)',

                  borderRadius: '24px',

                  overflow: 'hidden'

                }}>

                  {/* Browser Header */}

                  <div style={{

                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',

                    padding: '16px 20px',

                    display: 'flex',

                    alignItems: 'center',

                    gap: '8px'

                  }}>

                    <div style={{ display: 'flex', gap: '8px' }}>

                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ff5f57' }}></div>

                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ffbd2e' }}></div>

                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#28ca42' }}></div>

                    </div>

                    <div style={{

                      flex: 1,

                      background: 'white',

                      borderRadius: '8px',

                      padding: '6px 12px',

                      textAlign: 'center',

                      fontSize: '12px',

                      color: '#6c757d',

                      marginLeft: '12px'

                    }}>

                      skoolweb.com/dashboard

                    </div>

                  </div>



                  {/* Dashboard Content */}

                  <div className="hero-mockup-body" style={{ padding: '30px', background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)' }}>

                    <div className="row g-3 mb-4 hero-mockup-stats-row">

                      <div className="col-6">

                        <div className="p-3 rounded-3 hero-mockup-stat-card" style={{

                          background: 'white',

                          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',

                          border: '1px solid rgba(99, 102, 241, 0.1)'

                        }}>

                          <div className="d-flex align-items-center hero-mockup-stat-inner">

                            <div className="hero-mockup-stat-icon" style={{

                              width: '48px',

                              height: '48px',

                              borderRadius: '14px',

                              background: 'linear-gradient(135deg, #667eea, #764ba2)',

                              display: 'flex',

                              alignItems: 'center',

                              justifyContent: 'center',

                              color: 'white',

                              marginRight: '12px',

                              fontSize: '20px',

                              flexShrink: 0

                            }}>

                              <FontAwesomeIcon icon={faUsers} />

                            </div>

                            <div className="hero-mockup-stat-text" style={{ minWidth: 0 }}>

                              <div className="fw-bold hero-mockup-stat-value" style={{ fontSize: '1.5rem', color: '#1a1a2e' }}>{getStat('Total Students')}</div>

                              <small className="text-muted hero-mockup-stat-label">Total Students</small>

                            </div>

                          </div>

                        </div>

                      </div>

                      <div className="col-6">

                        <div className="p-3 rounded-3 hero-mockup-stat-card" style={{

                          background: 'white',

                          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',

                          border: '1px solid rgba(72, 187, 120, 0.1)'

                        }}>

                          <div className="d-flex align-items-center hero-mockup-stat-inner">

                            <div className="hero-mockup-stat-icon" style={{

                              width: '48px',

                              height: '48px',

                              borderRadius: '14px',

                              background: 'linear-gradient(135deg, #48bb78, #38a169)',

                              display: 'flex',

                              alignItems: 'center',

                              justifyContent: 'center',

                              color: 'white',

                              marginRight: '12px',

                              fontSize: '20px',

                              flexShrink: 0

                            }}>

                              <FontAwesomeIcon icon={faChartLine} />

                            </div>

                            <div className="hero-mockup-stat-text" style={{ minWidth: 0 }}>

                              <div className="fw-bold hero-mockup-stat-value" style={{ fontSize: '1.5rem', color: '#1a1a2e' }}>{getStat('Attendance Rate')}</div>

                              <small className="text-muted hero-mockup-stat-label">Attendance Rate</small>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>



                    {/* Activity Chart Placeholder */}

                    <div className="mb-4">

                      <h6 className="fw-bold mb-3">Weekly Activity</h6>

                      <div style={{

                        height: '100px',

                        background: 'linear-gradient(180deg, rgba(99,102,241,0.1) 0%, transparent 100%)',

                        borderRadius: '12px',

                        display: 'flex',

                        alignItems: 'flex-end',

                        padding: '10px',

                        gap: '8px'

                      }}>

                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (

                          <div key={i} style={{

                            flex: 1,

                            height: `${h}%`,

                            background: `linear-gradient(180deg, #667eea 0%, #764ba2 100%)`,

                            borderRadius: '4px 4px 0 0',

                            transition: 'height 0.5s ease'

                          }}></div>

                        ))}

                      </div>

                    </div>



                    {/* User Profile */}

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

                        fontSize: '28px',

                        fontWeight: 'bold',

                        margin: '0 auto 12px',

                        boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)',

                        animation: 'pulse2 2s infinite'

                      }}>SK</div>

                      <h5 className="fw-bold mb-1">Welcome to SKOOLWEB</h5>

                      <p className="text-muted small mb-0">Your complete school management solution</p>

                    </div>

                  </div>

                </div>



                

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Features Section */}

      <section id="features" ref={featuresRef} className="py-5 position-relative mesh-gradient" style={{ paddingTop: '100px', paddingBottom: '100px' }}>

        <div className="container">

          <div className="text-center mb-5 scroll-animate">

            <span className="badge rounded-pill px-4 py-2 mb-3" style={{

              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

              color: 'white',

              fontWeight: '600',

              fontSize: '14px'

            }}>

              <FontAwesomeIcon icon={faMagic} className="me-2" />

              Powerful Features

            </span>

            <h2 className="display-4 fw-black mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>

              Everything Your School <span className="gradient-text-pro">Needs</span>

            </h2>

            <p className="lead text-muted mb-4" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>

              Comprehensive tools designed specifically for modern educational institutions, helping you manage every aspect of school operations with ease and efficiency.

            </p>

          </div>



          <div className="row g-4">

            {[

              {

                icon: faUsers,

                title: 'Smart Student Management',

                desc: 'Complete student profiles with academic records, attendance tracking, and personalized learning paths.',

                color: '#667eea',

                statLabel: 'Total Students'

              },

              {

                icon: faBookOpen,

                title: 'Advanced Curriculum',

                desc: 'Dynamic syllabus planning, lesson scheduling, and resource allocation with real-time progress tracking.',

                color: '#764ba2',

                statLabel: 'Total Subjects'

              },

              {

                icon: faClipboardList,

                title: 'Smart Attendance',

                desc: 'Digital attendance tracking with instant parent notifications and comprehensive reports.',

                color: '#48bb78',

                statLabel: 'Attendance Rate'

              },

              {

                icon: faChartLine,

                title: 'Analytics & Insights',

                desc: 'Data-driven decision making with detailed reports, performance analytics, and predictive insights.',

                color: '#f093fb',

                statLabel: 'Total Reports'

              },

              {

                icon: faBullhorn,

                title: 'Unified Communication',

                desc: 'Seamless messaging between teachers, parents, and students with emergency notification system.',

                color: '#f5576c',

                stat: '24/7 Support'

              },

              {

                icon: faCalendarAlt,

                title: 'Smart Scheduling',

                desc: 'Automated timetable generation, resource booking, and smart conflict resolution.',

                color: '#4facfe',

                stat: 'Zero Conflicts'

              }

            ].map((feature, index) => (

              <div key={index} className="col-lg-4 col-md-6 scroll-animate" style={{ transitionDelay: `${index * 100}ms` }}>

                <div className="card-pro h-100">

                  <div className="d-flex align-items-center mb-4">

                    <div style={{

                      width: '72px',

                      height: '72px',

                      borderRadius: '20px',

                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,

                      display: 'flex',

                      alignItems: 'center',

                      justifyContent: 'center',

                      flexShrink: 0,

                      boxShadow: `0 12px 30px ${feature.color}40`,

                      marginRight: '20px',

                      fontSize: '28px',

                      color: 'white'

                    }}>

                      <FontAwesomeIcon icon={feature.icon} />

                    </div>

                    <div>

                      <div className="fw-bold" style={{ fontSize: '1.5rem', color: feature.color }}>{feature.statLabel ? getStat(feature.statLabel) : feature.stat}</div>

                      {feature.statLabel && (
                        <small className="text-muted">{feature.statLabel}</small>
                      )}

                    </div>

                  </div>

                  <h4 className="fw-bold mb-3" style={{ color: '#1a1a2e' }}>{feature.title}</h4>

                  <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>{feature.desc}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Pricing Section */}

      <section id="pricing" className="py-5" style={{ paddingTop: '100px', paddingBottom: '100px', background: 'white' }}>

        <div className="container">

          <div className="text-center mb-5 scroll-animate">

            <span className="badge rounded-pill px-4 py-2 mb-3" style={{

              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

              color: 'white',

              fontWeight: '600',

              fontSize: '14px'

            }}>

              <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />

              Flexible Pricing

            </span>

            <h2 className="display-4 fw-black mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>

              Clear pricing for <span className="gradient-text-pro">school success</span>

            </h2>

            <p className="lead text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>

              Pick the best SKOOLWEB plan for your institution and start automating today.

            </p>

          </div>



          <div className="row g-4 align-items-center justify-content-center">

            {[

              {

                title: 'Free',

                price: '$0',

                description: 'Perfect for small schools starting their digital journey',

                features: [

                  'PeopleCore',

                  'AcademicCore',

                  'Fees collection (basic)',

                  'Library (limited)',

                  'Transport (basic)',

                  'Reports (summary)',

                  'User management (basic)',

                  'Notice board & events'

                ],

                label: 'Request Demo',

                popular: false

              },

              {

                title: 'Paid Plan',

                price: '$25,000',

                description: 'For growing schools that want analytics and automation',

                features: [

                  'PeopleCore',

                  'AcademicCore',

                  'Fees collection (full)',

                  'Library (full)',

                  'Hostel',

                  'Transport',

                  'HRM',

                  'Finance & accounts',

                  'Reports (advanced)',

                  'User management',

                  'Membership Management',

                  'School settings',

                  'Application toolkit',

                  'Notice board & events',

                  'Content & pages',

                  'Advanced Analytics',

                  'API Access',

                  'Priority Support'

                ],

                label: 'Book Call',

                popular: true

              }

            ].map((plan, index) => {

              const isExpanded = expandedPlans[index];

              // डिफ़ॉल्ट रूप से सिर्फ पहले 4 फीचर्स बाहर दिखेंगे

              const initialFeatures = plan.features.slice(0, 4);



              return (

                <div key={index} className="col-md-5 col-lg-4 scroll-animate" style={{ transitionDelay: `${index * 150}ms` }}>

                  <div className={`card-pro h-100 ${plan.popular ? 'position-relative' : ''}`} style={{

                    border: plan.popular ? '3px solid #667eea' : 'none',

                    transform: plan.popular ? 'scale(1.05)' : 'scale(1)',

                    display: 'flex',

                    flexDirection: 'column',

                    minHeight: '520px' // कार्ड की हाइट फिक्स रखने के लिए

                  }}>

                    {plan.popular && (

                      <div style={{

                        position: 'absolute',

                        top: '-12px',

                        left: '50%',

                        transform: 'translateX(-50%)',

                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

                        color: 'white',

                        padding: '6px 20px',

                        borderRadius: '20px',

                        fontSize: '12px',

                        fontWeight: '700',

                        whiteSpace: 'nowrap',

                        zIndex: 10

                      }}>

                        MOST POPULAR

                      </div>

                    )}

                   

                    <div className="card-body d-flex flex-column h-100 pt-4" style={{ position: 'relative' }}>

                      <h4 className="fw-bold mb-2">{plan.title}</h4>

                      <div className="mb-3">

                        <span className="display-4 fw-black">{plan.price}</span>

                        {plan.price !== 'Custom' && <span className="text-muted">/month</span>}

                      </div>

                      <p className="text-muted mb-4">{plan.description}</p>

                     

                      {/* डिफ़ॉल्ट रूप से दिखने वाली लिस्ट (सिर्फ 4 फीचर्स) */}

                      <ul className="list-unstyled mb-2" style={{ flexGrow: 1 }}>

                        {initialFeatures.map((feature, j) => (

                          <li key={j} className="d-flex align-items-center mb-3">

                            <FontAwesomeIcon icon={faCheckCircle} className="me-3" style={{ color: '#48bb78', fontSize: '18px', flexShrink: 0 }} />

                            <span className="text-dark">{feature}</span>

                          </li>

                        ))}

                      </ul>



                      {/* इन-प्लेस स्क्रोल होने वाला पॉपअप बॉक्स */}

                      {isExpanded && (

                        <div className="features-scrollbar" style={{

                          position: 'absolute',

                          top: '160px', // प्राइस और डिस्क्रिप्शन के ठीक नीचे सेट किया है

                          left: '15px',

                          right: '15px',

                          bottom: '80px', // बटन के ऊपर तक रहेगा

                          background: '#ffffff',

                          boxShadow: '0 -5px 25px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.1)',

                          borderRadius: '16px',

                          padding: '20px',

                          overflowY: 'auto',

                          zIndex: 5,

                          border: '1px solid #e2e8f0',

                          animation: 'slideUpFade 0.3s ease-out'

                        }}>

                          <div className="d-flex justify-content-between align-items-center mb-3">

                            <h6 className="fw-bold mb-0 text-primary">All Features ({plan.features.length})</h6>

                            <button

                              onClick={() => toggleFeatures(index)}

                              className="btn-close"

                              style={{ fontSize: '12px', cursor: 'pointer' }}

                              aria-label="Close"

                            ></button>

                          </div>

                          <ul className="list-unstyled mb-0">

                            {plan.features.map((feature, j) => (

                              <li key={j} className="d-flex align-items-center mb-3">

                                <FontAwesomeIcon icon={faCheckCircle} className="me-3" style={{ color: '#48bb78', fontSize: '16px', flexShrink: 0 }} />

                                <span className="text-dark" style={{ fontSize: '14px' }}>{feature}</span>

                              </li>

                            ))}

                          </ul>

                        </div>

                      )}



                      {/* Show More बटन */}

                      {plan.features.length > 4 && (

                        <button

                          onClick={() => toggleFeatures(index)}

                          className="btn btn-link text-decoration-none p-0 mb-4 d-flex align-items-center fw-bold text-start mt-2"

                          style={{ color: '#667eea', fontSize: '14px', background: 'none', border: 'none', zIndex: 4 }}

                        >

                          {isExpanded ? 'Hide Popup ↑' : `Show More (${plan.features.length - 4} more) ↓`}

                        </button>

                      )}



                      <a href="#contact" className={`btn btn-lg w-100 fw-bold rounded-pill ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`} style={{

                        padding: '14px',

                        borderRadius: '50px',

                        fontWeight: '600',

                        borderWidth: '2px',

                        marginTop: 'auto',

                        zIndex: 4

                      }}>

                        {plan.label}

                      </a>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      {/* Testimonials Section */}

      <section id="testimonials" className="py-5 mesh-gradient" style={{ paddingTop: '100px', paddingBottom: '100px' }}>

        <div className="container">

          <div className="text-center mb-5 scroll-animate">

            <span className="badge rounded-pill px-4 py-2 mb-3" style={{

              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

              color: 'white',

              fontWeight: '600',

              fontSize: '14px'

            }}>

              <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />

              Testimonials

            </span>

            <h2 className="display-4 fw-black mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>

              Loved by Schools <span className="gradient-text-pro">Worldwide</span>

            </h2>

            <p className="lead text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>

              See what educators, administrators, and parents are saying about SKOOLWEB.

            </p>

          </div>



          <div className="row g-4">

            {[

              {

                name: 'Sarah Johnson',

                role: 'School Principal',

                school: 'Westfield Academy',

                text: 'SKOOLWEB completely transformed how we manage our school. The interface is intuitive, and the automated workflows save us hours every week. Parent satisfaction has increased by 40%.',

                avatar: 'SJ',

                color: '#667eea'

              },

              {

                name: 'Ahmed Khan',

                role: 'IT Director',

                school: 'Global International School',

                text: 'Implementation was seamless and the support team is incredibly responsive. The API integrations work flawlessly with our existing systems. Highly recommended!',

                avatar: 'AK',

                color: '#764ba2'

              },

              {

                name: 'Maria Garcia',

                role: 'Senior Teacher',

                school: 'Sunrise Elementary',

                text: 'Grading and attendance tracking is now effortless. Parents love the instant notifications and the students are more engaged than ever. It\'s a game-changer!',

                avatar: 'MG',

                color: '#48bb78'

              }

            ].map((testimonial, index) => (

              <div key={index} className="col-md-4 scroll-animate" style={{ transitionDelay: `${index * 150}ms` }}>

                <div className="card-pro h-100" style={{

                  background: 'white',

                  position: 'relative'

                }}>

                  <div style={{

                    position: 'absolute',

                    top: '20px',

                    right: '20px',

                    fontSize: '60px',

                    color: 'rgba(99, 102, 241, 0.1)',

                    lineHeight: 1

                  }}>

                    <FontAwesomeIcon icon={faQuoteLeft} />

                  </div>

                  <div className="mb-4">

                    {[...Array(5)].map((_, i) => (

                      <FontAwesomeIcon key={i} icon={faStar} className="text-warning me-1" style={{ fontSize: '18px' }} />

                    ))}

                  </div>

                  <p className="text-dark mb-4" style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>

                    "{testimonial.text}"

                  </p>

                  <div className="d-flex align-items-center">

                    <div style={{

                      width: '56px',

                      height: '56px',

                      borderRadius: '50%',

                      background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}dd)`,

                      display: 'flex',

                      alignItems: 'center',

                      justifyContent: 'center',

                      color: 'white',

                      fontWeight: 'bold',

                      fontSize: '20px',

                      marginRight: '16px'

                    }}>

                      {testimonial.avatar}

                    </div>

                    <div>

                      <h6 className="fw-bold mb-0">{testimonial.name}</h6>

                      <small className="text-muted">{testimonial.role}</small>

                      <div className="small" style={{ color: testimonial.color, fontWeight: '600' }}>{testimonial.school}</div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* CTA Section */}

      <section className="py-5" style={{

        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',

        backgroundSize: '200% 200%',

        animation: 'gradientShift 8s ease infinite',

        paddingTop: '80px',

        paddingBottom: '80px',

        position: 'relative',

        overflow: 'hidden'

      }}>

        {/* Animated circles */}

        <div style={{

          position: 'absolute',

          top: '-50px',

          left: '-50px',

          width: '200px',

          height: '200px',

          borderRadius: '50%',

          background: 'rgba(255,255,255,0.1)',

          animation: 'float3D 8s ease-in-out infinite'

        }}></div>

        <div style={{

          position: 'absolute',

          bottom: '-50px',

          right: '-50px',

          width: '250px',

          height: '250px',

          borderRadius: '50%',

          background: 'rgba(255,255,255,0.1)',

          animation: 'float3D 10s ease-in-out infinite reverse'

        }}></div>



        <div className="container text-center position-relative" style={{ zIndex: 2 }}>

          <h2 className="display-4 fw-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>

            Ready to Transform Your School?

          </h2>

          <p className="lead mb-5" style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>

            Join 500+ forward-thinking schools already using SKOOLWEB to streamline operations and enhance learning outcomes.

          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center landing-cta-group">

            <a href="#contact" className="btn btn-pro btn-light btn-lg px-6 py-3 rounded-pill landing-cta-btn" style={{

              background: 'white',

              color: '#667eea',

              fontWeight: '700',

              fontSize: '1.1rem',

              padding: '18px 42px',

              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',

              border: 'none'

            }}>

              <FontAwesomeIcon icon={faRocket} className="me-2" />

              Request a Demo

            </a>

            <a href="#pricing" className="btn btn-pro btn-outline-light btn-lg px-6 py-3 rounded-pill landing-cta-btn" style={{

              borderWidth: '2px',

              fontWeight: '600',

              fontSize: '1.1rem',

              padding: '18px 42px',

              backdropFilter: 'blur(10px)',

              background: 'rgba(255,255,255,0.1)'

            }}>

              View Pricing

              <FontAwesomeIcon icon={faChevronRight} className="ms-2" />

            </a>

          </div>

        </div>

      </section>



      {/* Contact Section */}
      <section
        id="contact"
        className="py-5"
        style={{
          paddingTop: '100px',
          paddingBottom: '100px',
          background: 'linear-gradient(135deg, #e9efff 0%, #f8fbff 100%)',
        }}
      >
        <div className="container">
          <DemoRequestSection captchaInputId="landing-demo-captcha" headingLevel="h2" />
        </div>
      </section>



      <SiteFooter />

    </div>

  );

};



export default LandingPage; 