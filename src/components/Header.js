import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope, faUser, faCalendarAlt, faGlobe, faComments, faCog } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <div className="d-flex align-items-center me-3">
          <span className="fw-bold">PreSkool</span>
        </div>
        <div className="d-flex align-items-center flex-grow-1">
          <div className="input-group me-3" style={{ maxWidth: '300px' }}>
            <span className="input-group-text"><FontAwesomeIcon icon={faSearch} /></span>
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="me-3">
            <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
            <span>Academic Year : 2024 / 2025</span>
          </div>
          <div className="me-3">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div className="me-3">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="me-3">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="me-3">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <div className="me-3">
            <FontAwesomeIcon icon={faCog} />
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;