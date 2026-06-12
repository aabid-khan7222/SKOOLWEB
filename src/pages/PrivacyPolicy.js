import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';

const PrivacyPolicy = () => (
  <LegalPageLayout title="Privacy Policy" lastUpdated="June 12, 2026">
    <section className="legal-section">
      <p>
        SKOOLWEB (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and security of
        personal information entrusted to us by schools, educators, parents, students, and administrators.
        This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use
        our school management platform, website, and related services (collectively, the &quot;Services&quot;).
      </p>
      <p>
        By accessing or using SKOOLWEB, you acknowledge that you have read and understood this Privacy Policy.
        If you are using the Services on behalf of a school or institution, you represent that you have the
        authority to accept this policy on its behalf.
      </p>
    </section>

    <section className="legal-section">
      <h2>1. Information We Collect</h2>
      <p>We collect information necessary to deliver and improve our school management Services. This may include:</p>
      <h3>1.1 Information Provided by Schools and Users</h3>
      <ul>
        <li>School name, address, affiliation details, and administrative contact information</li>
        <li>Staff and teacher profiles, including name, email, phone number, designation, and employment details</li>
        <li>Student records such as name, date of birth, class, section, roll number, attendance, grades, and academic history</li>
        <li>Parent and guardian contact details, including phone numbers and email addresses</li>
        <li>Fee records, payment references, and billing information related to school subscriptions</li>
        <li>Communications sent through the platform, including notices, messages, and support requests</li>
      </ul>
      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li>Device type, browser version, operating system, and IP address</li>
        <li>Login timestamps, session activity, and feature usage analytics</li>
        <li>Cookies and similar technologies used to maintain sessions and improve performance</li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>2. How We Use Your Information</h2>
      <p>We use collected information for legitimate educational and operational purposes, including to:</p>
      <ul>
        <li>Provide, operate, and maintain the SKOOLWEB platform and its modules</li>
        <li>Enable attendance tracking, timetable management, fee collection, reporting, and parent communication</li>
        <li>Authenticate users and enforce role-based access controls</li>
        <li>Respond to support requests, demo inquiries, and service-related communications</li>
        <li>Improve platform performance, security, and user experience through aggregated analytics</li>
        <li>Comply with applicable laws, regulations, and lawful requests from authorities</li>
        <li>Send important service updates, security alerts, and administrative notifications</li>
      </ul>
      <p>
        We do not sell personal information. We do not use student data for unrelated advertising or
        marketing purposes.
      </p>
    </section>

    <section className="legal-section">
      <h2>3. Student and Minor Data</h2>
      <p>
        SKOOLWEB is designed for use by schools and educational institutions. Student information is
        collected and processed only at the direction of the school that has contracted our Services.
        Schools remain responsible for obtaining appropriate consent from parents or guardians where required
        by applicable law.
      </p>
      <p>
        We implement access controls so that student data is visible only to authorized school personnel,
        parents or guardians linked to the student, and other users permitted by the school&apos;s configuration.
      </p>
    </section>

    <section className="legal-section">
      <h2>4. Data Sharing and Disclosure</h2>
      <p>We may share information only in the following circumstances:</p>
      <ul>
        <li>
          <strong>With the school:</strong> Data entered into SKOOLWEB is accessible to authorized users
          within the subscribing institution according to assigned roles and permissions.
        </li>
        <li>
          <strong>Service providers:</strong> Trusted third-party vendors who assist with hosting,
          infrastructure, email delivery, payment processing, or customer support, bound by confidentiality
          and data protection obligations.
        </li>
        <li>
          <strong>Legal requirements:</strong> When required by law, court order, or governmental request,
          or to protect the rights, safety, and security of users and the platform.
        </li>
        <li>
          <strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets,
          subject to continued protection of personal information.
        </li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>5. Data Security</h2>
      <p>
        We employ industry-standard technical and organizational measures to protect personal information,
        including encrypted data transmission, secure authentication, regular backups, and restricted access
        to production systems. While we strive to safeguard all data, no method of electronic storage or
        transmission is completely secure, and we cannot guarantee absolute security.
      </p>
    </section>

    <section className="legal-section">
      <h2>6. Data Retention</h2>
      <p>
        We retain personal information for as long as the school maintains an active account or as needed
        to provide the Services. Upon termination of a school&apos;s subscription, data may be retained for a
        limited period to allow export and then deleted or anonymized in accordance with our data retention
        policy and applicable legal requirements.
      </p>
    </section>

    <section className="legal-section">
      <h2>7. Your Rights and Choices</h2>
      <p>Depending on your role and applicable law, you may have the right to:</p>
      <ul>
        <li>Access, correct, or update personal information held about you</li>
        <li>Request deletion of data, subject to the school&apos;s records obligations and legal retention requirements</li>
        <li>Withdraw consent where processing is based on consent, without affecting prior lawful processing</li>
        <li>Object to or restrict certain processing activities</li>
        <li>Receive a copy of your data in a portable format where technically feasible</li>
      </ul>
      <p>
        Parents, students, and staff should contact their school administrator for data requests related to
        records maintained within SKOOLWEB. Schools may also contact us directly for account-level assistance.
      </p>
    </section>

    <section className="legal-section">
      <h2>8. Cookies and Tracking Technologies</h2>
      <p>
        Our website and platform use cookies and similar technologies to keep you signed in, remember
        preferences, and analyze usage patterns. You can control cookies through your browser settings;
        however, disabling certain cookies may affect platform functionality.
      </p>
    </section>

    <section className="legal-section">
      <h2>9. International Data Transfers</h2>
      <p>
        If you access our Services from outside India, your information may be transferred to and processed
        in data centers located in India or other jurisdictions where our service providers operate. We
        take appropriate steps to ensure that such transfers comply with applicable data protection laws.
      </p>
    </section>

    <section className="legal-section">
      <h2>10. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
        or legal requirements. We will post the revised policy on this page and update the &quot;Last updated&quot;
        date. Material changes may also be communicated to registered school administrators via email or
        in-platform notice.
      </p>
    </section>

    <section className="legal-section">
      <h2>11. Contact Us</h2>
      <p>
        If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
        please contact us:
      </p>
      <ul className="legal-contact-list">
        <li><strong>Email:</strong> privacy@skoolweb.com</li>
        <li><strong>Website:</strong> <Link to="/contact">Contact Us</Link></li>
        <li><strong>Product:</strong> SKOOLWEB School Management Platform</li>
      </ul>
    </section>
  </LegalPageLayout>
);

export default PrivacyPolicy;
