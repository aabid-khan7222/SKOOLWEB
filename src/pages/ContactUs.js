import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';
import DemoRequestSection from '../components/DemoRequestSection';

const ContactUs = () => (
  <div className="d-flex flex-column min-vh-100">
    <main
      className="flex-grow-1"
      style={{ background: 'linear-gradient(135deg, #e9efff 0%, #f8fbff 100%)', paddingTop: 'calc(80px + 1.5rem)' }}
    >
      <div className="demo-back-nav">
        <Link to="/" className="legal-back-link">
          &larr; Back to Home
        </Link>
      </div>
      <div className="container pb-5">
        <DemoRequestSection captchaInputId="demo-request-captcha" headingLevel="h1" />
      </div>
    </main>

    <SiteFooter />
  </div>
);

export default ContactUs;
