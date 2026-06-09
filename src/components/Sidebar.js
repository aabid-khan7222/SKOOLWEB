import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserGraduate, faChalkboardTeacher, faUserFriends, faBook, faCalendarAlt, faCog, faDesktop, faMobileAlt, faLanguage, faBox, faMoon } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light vh-100 p-3" style={{ width: '250px' }}>
      <div className="mb-4">
        <h5>PreSkool</h5>
      </div>
      <ul className="list-unstyled">
        <li className="mb-3">
          <strong>MAIN</strong>
        </li>
        <li className="mb-2">
          <Link to="/" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/application" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faDesktop} className="me-2" />
            Application
          </Link>
        </li>
        <li className="mb-3">
          <strong>LAYOUT</strong>
        </li>
        <li className="mb-2">
          <Link to="/layout-default" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faDesktop} className="me-2" />
            Default
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/layout-mini" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faMobileAlt} className="me-2" />
            Mini
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/layout-rtl" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faLanguage} className="me-2" />
            RTL
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/layout-box" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faBox} className="me-2" />
            Box
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/layout-dark" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faMoon} className="me-2" />
            Dark
          </Link>
        </li>
        <li className="mb-3">
          <strong>Peoples</strong>
        </li>
        <li className="mb-2">
          <Link to="/students" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faUserGraduate} className="me-2" />
            Students
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/teachers" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
            Teachers
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/parents" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faUserFriends} className="me-2" />
            Parents
          </Link>
        </li>
        <li className="mb-3">
          <strong>Academics</strong>
        </li>
        <li className="mb-2">
          <Link to="/subjects" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faBook} className="me-2" />
            Subjects
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/classes" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
            Class
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/timetable" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
            Timetable
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/settings" className="text-decoration-none d-flex align-items-center">
            <FontAwesomeIcon icon={faCog} className="me-2" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;