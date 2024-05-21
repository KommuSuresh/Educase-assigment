import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaHome, FaCompass, FaBookmark, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item"> {/* Use Link instead of anchor tag */}
        <FaHome className="nav-icon" />
        <span className="nav-text">Home</span>
      </Link>
      <Link to="/explore" className="nav-item"> {/* Change href to "to" */}
        <FaCompass className="nav-icon" />
        <span className="nav-text">Explore</span>
      </Link>
      <Link to="/bookmark" className="nav-item"> {/* Change href to "to" */}
        <FaBookmark className="nav-icon" />
        <span className="nav-text">Bookmark</span>
      </Link>
      <Link to="/profile" className="nav-item"> {/* Change href to "to" */}
        <FaUser className="nav-icon" />
        <span className="nav-text">Profile</span>
      </Link>
    </div>
  );
};

export default Navbar;
