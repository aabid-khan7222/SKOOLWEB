import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      title: 'Starter',
      price: '$59',
      description: 'Good for small schools and first-time users',
      features: ['Student profiles', 'Attendance', 'Parent portal', 'Email support'],
      cta: 'Request Demo',
      popular: false
    },
    {
      title: 'Growth',
      price: '$129',
      description: 'Perfect for growing schools with analytics and automation',
      features: ['Everything in Starter', 'Grade analytics', 'Timetable planner', 'SMS notifications'],
      cta: 'Book Call',
      popular: true
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'For multi-campus schools and bespoke rollout',
      features: ['Custom integrations', 'Dedicated success manager', 'Advanced reporting', 'Onboarding support'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%)', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold mb-2" style={{ color: '#6366f1', letterSpacing: '0.2em' }}>SKOOLWEB Pricing</p>
          <h1 className="display-5 fw-bold">Simple pricing with powerful value</h1>
          <p className="lead text-muted">Choose a plan built for school operations, parent engagement, and academic growth.</p>
        </div>

        <div className="row g-4">
          {plans.map((plan) => (
            <div key={plan.title} className="col-md-4">
              <div className={`pricing-card card h-100 p-4 rounded-4 ${plan.popular ? 'pricing-card-popular' : 'bg-white'}`}>
                <div className="card-body d-flex flex-column h-100">
                  {plan.popular && <span className="pricing-badge mb-3">Popular</span>}
                  <h5 className="fw-bold">{plan.title}</h5>
                  <h2 className="display-4 fw-bold my-3">{plan.price}</h2>
                  <p className="text-muted">{plan.description}</p>
                  <ul className="list-unstyled mt-4 mb-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="d-flex align-items-center mb-2 text-muted">
                        <span className="me-2" style={{ color: '#10b981' }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link className={`btn btn-lg w-100 fw-bold ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`} to="/contact">{plan.cta}</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-md-8 mx-auto text-center">
            <h3 className="fw-bold">Need a custom solution?</h3>
            <p className="text-muted">Our enterprise plan gives you the flexibility to build a tailored SKOOLWEB rollout for your whole district or network.</p>
            <Link to="/contact" className="btn btn-outline-primary btn-lg rounded-pill">Talk to Sales</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
