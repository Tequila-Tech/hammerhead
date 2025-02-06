import { useState } from 'react';
import './Nav.css';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`main-wrapper ${isActive ? 'active' : ''}`}>
      <div className="logo">
        <img
          className="img"
          src="/mainLogo.jpeg"
          alt="Logo"
          decoding="async"
          loading="lazy"
        />
      </div>
      <ul className={`nav-list ${isActive ? 'active' : ''}`}>
        <li><a className="text-red" href="/">Home</a></li>
        <li><a href="/packages">Packages</a></li>
        <li><a href="/specialty">Specialty Dives</a></li>
        <li><a href="/snorkel">Snorkel Tours</a></li>
        <li><a href="/about">About Us</a></li>
        <li>
          <a
            href="https://www.google.com/search?q=hammerhead+scuba+diving+cozumel&oq=hammer&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIOCAAQRRg5GEMYgAQYigUyBwgBEC4YgAQyBggCECMYJzIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0NDAzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x8f4e57005df3a099:0xe7e5a151dc640a4a,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reviews
          </a>
        </li>
        <li><a href="https://blog.hammerheadcozumel.com/" target='blank'>Blog</a></li>
      </ul>
      <div className="cta">
        <a className="primary-cta" href="/booking">Book Now</a>
      </div>
      <div className="toggle" id="tgt" onClick={handleToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;