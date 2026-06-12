import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from './SiteFooter';

const LegalPageLayout = ({ title, lastUpdated, children }) => (
  <div className="d-flex flex-column min-vh-100">
    <main className="flex-grow-1 legal-page" style={{ paddingTop: '88px' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <Link to="/" className="legal-back-link">
              &larr; Back to Home
            </Link>
            <header className="legal-header">
              <h1 className="legal-title">{title}</h1>
              <p className="legal-updated">Last updated: {lastUpdated}</p>
            </header>
            <article className="legal-body">{children}</article>
          </div>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default LegalPageLayout;
