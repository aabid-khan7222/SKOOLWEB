import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

const Pricing = () => {
  const plans = [
    {
      title: 'Free Plan',
      price: '₹0',
      priceDetail: 'Free for up to 100 students',
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
      cta: 'Get Started',
      popular: false,
      setupFee: null,
      trial: null
    },
    {
      title: 'Paid Plan',
      price: '₹25,000',
      priceDetail: '/ yearly',
      description: 'Complete School Management with advanced modules and priority support',
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
      cta: 'Get Started',
      popular: true,
      setupFee: '₹2,000',
      trial: '30 days'
    }
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [selectedFeatures, setSelectedFeatures] = React.useState([]);

  const handleShowMore = (features) => {
    setSelectedFeatures(features);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFeatures([]);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
    <div className="flex-grow-1" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%)', paddingTop: '88px', paddingBottom: '80px' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold mb-2" style={{ color: '#6366f1', letterSpacing: '0.2em' }}>SKOOLWEB Pricing</p>
          <h1 className="display-5 fw-bold">Simple pricing with powerful value</h1>
          <p className="lead text-muted">Choose a plan built for school operations, parent engagement, and academic growth.</p>
        </div>

        <div className="row g-4">
          {plans.map((plan) => (
            <div key={plan.title} className="col-md-4">
              <div className={`pricing-card card h-100 p-4 rounded-4 ${plan.popular ? 'pricing-card-popular border-primary border-3' : 'bg-white'}`}>
                <div className="card-body d-flex flex-column h-100">
                  {plan.popular && <span className="pricing-badge mb-3 bg-primary text-white px-3 py-1 rounded-pill small fw-bold">Popular</span>}
                  <h5 className="fw-bold">{plan.title}</h5>
                  <div className="my-3">
                    <h2 className="display-4 fw-bold">{plan.price}</h2>
                    <span className="text-muted">{plan.priceDetail}</span>
                  </div>
                  
                  {/* Additional Plan Info */}
                  {(plan.setupFee || plan.trial) && (
                    <div className="d-flex gap-3 mb-2 text-sm">
                      {plan.setupFee && (
                        <span className="d-flex align-items-center">
                          <span className="me-1">📦</span>
                          <span className="text-muted">Setup: {plan.setupFee}</span>
                        </span>
                      )}
                      {plan.trial && (
                        <span className="d-flex align-items-center">
                          <span className="me-1">🎯</span>
                          <span className="text-muted">{plan.trial} trial</span>
                        </span>
                      )}
                    </div>
                  )}
                  
                  <p className="text-muted">{plan.description}</p>
                  
                  {/* Features List with Show More */}
                  <div className="mt-4 mb-4 flex-grow-1">
                    <ul className="list-unstyled">
                      {plan.features.slice(0, 6).map((feature) => (
                        <li key={feature} className="d-flex align-items-center mb-2 text-muted">
                          <span className="me-2" style={{ color: '#10b981' }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {plan.features.length > 6 && (
                      <button 
                        className="btn btn-sm btn-outline-primary mt-2"
                        onClick={() => handleShowMore(plan.features)}
                      >
                        Show all {plan.features.length} features →
                      </button>
                    )}
                  </div>
                  
                  <div className="mt-auto">
                    <Link className={`btn btn-lg w-100 fw-bold ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`} to="/contact">{plan.cta}</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Show More */}
        {showModal && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={handleCloseModal}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fw-bold">All Features</h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                </div>
                <div className="modal-body">
                  <ul className="list-unstyled">
                    {selectedFeatures.map((feature) => (
                      <li key={feature} className="d-flex align-items-center mb-2 text-muted">
                        <span className="me-2" style={{ color: '#10b981', fontSize: '1.2em' }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Removed custom/enterprise CTA per request - only Free and Paid plans shown */}
      </div>
    </div>
    <SiteFooter />
    </div>
  );
};

export default Pricing;