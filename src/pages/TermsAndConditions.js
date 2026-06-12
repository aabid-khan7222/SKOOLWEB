import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';

const TermsAndConditions = () => (
  <LegalPageLayout title="Terms & Conditions" lastUpdated="June 12, 2026">
    <section className="legal-section">
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the SKOOLWEB school
        management platform, website, mobile applications, and related services (collectively, the
        &quot;Services&quot;) provided by SKOOLWEB (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
      </p>
      <p>
        By registering for, accessing, or using the Services, you agree to be bound by these Terms. If you
        are entering into these Terms on behalf of a school, educational institution, or organization, you
        represent that you have the authority to bind that entity. If you do not agree to these Terms, you
        must not use the Services.
      </p>
    </section>

    <section className="legal-section">
      <h2>1. Description of Services</h2>
      <p>
        SKOOLWEB provides a cloud-based school management system that may include, among other features,
        student information management, attendance tracking, timetable scheduling, fee management, parent
        communication, academic reporting, library management, transport tracking, and administrative tools.
      </p>
      <p>
        We reserve the right to modify, add, or discontinue features at any time. We will make reasonable
        efforts to notify subscribed schools of material changes that affect core functionality.
      </p>
    </section>

    <section className="legal-section">
      <h2>2. Account Registration and Access</h2>
      <ul>
        <li>
          Schools must provide accurate and complete information during registration and maintain updated
          account details throughout the subscription period.
        </li>
        <li>
          The school is responsible for creating and managing user accounts for staff, teachers, parents,
          and other authorized users, including assigning appropriate roles and permissions.
        </li>
        <li>
          Each user must keep login credentials confidential and notify the school administrator immediately
          of any unauthorized access or security breach.
        </li>
        <li>
          We may suspend or terminate accounts that violate these Terms or pose a security risk to the
          platform or other users.
        </li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>3. School Responsibilities</h2>
      <p>As a subscribing institution, the school agrees to:</p>
      <ul>
        <li>
          Ensure that all data entered into SKOOLWEB, including student and staff records, is accurate,
          lawfully obtained, and used in compliance with applicable education and privacy laws.
        </li>
        <li>
          Obtain necessary consents from parents, guardians, or students where required before collecting
          or processing personal information through the platform.
        </li>
        <li>
          Train authorized users on proper use of the system and enforce acceptable use policies within
          the institution.
        </li>
        <li>
          Regularly review user access rights and promptly revoke access for individuals who are no longer
          affiliated with the school.
        </li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>4. Acceptable Use</h2>
      <p>You agree not to use the Services to:</p>
      <ul>
        <li>Upload, transmit, or store unlawful, harmful, defamatory, or infringing content</li>
        <li>Attempt to gain unauthorized access to other accounts, systems, or data</li>
        <li>Interfere with or disrupt the integrity, security, or performance of the platform</li>
        <li>Reverse engineer, decompile, or attempt to extract source code except as permitted by law</li>
        <li>Use automated scripts or bots to scrape data or overload system resources</li>
        <li>Resell, sublicense, or commercially exploit the Services without our written consent</li>
      </ul>
      <p>
        Violation of acceptable use policies may result in immediate suspension or termination of access,
        without refund, and may be reported to relevant authorities where appropriate.
      </p>
    </section>

    <section className="legal-section">
      <h2>5. Subscription, Fees, and Payment</h2>
      <ul>
        <li>
          Access to certain features may require a paid subscription as described on our{' '}
          <Link to="/pricing">Pricing</Link> page. Free plans may be subject to usage limits.
        </li>
        <li>
          Subscription fees are billed according to the selected plan and billing cycle. All fees are
          exclusive of applicable taxes unless stated otherwise.
        </li>
        <li>
          Payments are non-refundable except where required by applicable law or explicitly stated in a
          written agreement.
        </li>
        <li>
          Failure to pay outstanding fees may result in suspension of Services after reasonable notice.
          We are not liable for data loss resulting from suspension due to non-payment.
        </li>
        <li>
          Schools are responsible for exporting their data before account closure if they wish to retain
          records locally.
        </li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>6. Intellectual Property</h2>
      <p>
        SKOOLWEB, including its software, design, logos, documentation, and underlying technology, is
        owned by us and protected by intellectual property laws. These Terms grant schools a limited,
        non-exclusive, non-transferable license to use the Services during the subscription period for
        internal educational and administrative purposes.
      </p>
      <p>
        Schools retain ownership of the data they upload to the platform. By using the Services, schools
        grant us a license to host, process, and display that data solely to provide and improve the
        Services as described in our <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>
    </section>

    <section className="legal-section">
      <h2>7. Service Availability and Support</h2>
      <p>
        We aim to maintain high availability of the platform but do not guarantee uninterrupted or
        error-free operation. Scheduled maintenance, updates, and circumstances beyond our reasonable
        control—including internet outages, natural disasters, or third-party service failures—may
        temporarily affect access.
      </p>
      <p>
        Support levels vary by subscription plan. Paid subscribers may receive priority assistance as
        outlined in their plan details.
      </p>
    </section>

    <section className="legal-section">
      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent
        permitted by law, we disclaim all warranties, whether express or implied, including warranties
        of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant
        that the Services will meet every specific requirement of your institution or that all errors
        will be corrected immediately.
      </p>
    </section>

    <section className="legal-section">
      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, SKOOLWEB and its officers, employees, and
        partners shall not be liable for any indirect, incidental, special, consequential, or punitive
        damages, including loss of profits, data, goodwill, or business interruption, arising from your
        use of or inability to use the Services.
      </p>
      <p>
        Our total aggregate liability for any claims arising under these Terms shall not exceed the
        amount paid by the school to SKOOLWEB in the twelve (12) months preceding the claim, or INR
        10,000, whichever is greater.
      </p>
    </section>

    <section className="legal-section">
      <h2>10. Indemnification</h2>
      <p>
        Schools agree to indemnify and hold harmless SKOOLWEB from any claims, damages, losses, or
        expenses (including reasonable legal fees) arising from the school&apos;s misuse of the Services,
        violation of these Terms, infringement of third-party rights, or unlawful processing of
        personal data entered into the platform.
      </p>
    </section>

    <section className="legal-section">
      <h2>11. Termination</h2>
      <ul>
        <li>
          Either party may terminate the subscription in accordance with the applicable plan terms or
          written agreement.
        </li>
        <li>
          We may suspend or terminate access immediately if the school breaches these Terms, engages in
          fraudulent activity, or fails to pay applicable fees.
        </li>
        <li>
          Upon termination, the school&apos;s right to access the Services ceases. Provisions that by their
          nature should survive termination—including intellectual property, limitation of liability,
          indemnification, and governing law—will remain in effect.
        </li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>12. Governing Law and Disputes</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India, without
        regard to conflict of law principles. Any disputes arising from these Terms or the Services shall
        be subject to the exclusive jurisdiction of the courts located in India, unless otherwise agreed
        in writing between the parties.
      </p>
    </section>

    <section className="legal-section">
      <h2>13. Changes to These Terms</h2>
      <p>
        We may revise these Terms from time to time. Updated Terms will be posted on this page with a
        revised &quot;Last updated&quot; date. Continued use of the Services after changes take effect constitutes
        acceptance of the revised Terms. Material changes may be communicated to school administrators
        via email or in-platform notification.
      </p>
    </section>

    <section className="legal-section">
      <h2>14. Contact Information</h2>
      <p>For questions about these Terms and Conditions, please reach out to us:</p>
      <ul className="legal-contact-list">
        <li><strong>Email:</strong> legal@skoolweb.com</li>
        <li><strong>Website:</strong> <Link to="/contact">Contact Us</Link></li>
        <li><strong>Product:</strong> SKOOLWEB School Management Platform</li>
      </ul>
    </section>
  </LegalPageLayout>
);

export default TermsAndConditions;
