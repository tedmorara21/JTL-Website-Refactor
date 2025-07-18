import React from 'react';
import { NavLink } from 'react-router-dom';

import ContactsHeader from '../ContactsHeader/ContactsHeader';

import './Header.css';

export default function Header() {
  return (
    <>
      <ContactsHeader />

      <div className="header-container">
        <div className="header-nav">
          <div className="header-nav-container">

            <div className="header-left">
              <NavLink to="/" className="header-logo-link">
                <img src="/logo.png" alt="JTL Logo" className="header-logo" />
              </NavLink>
            </div>

            <div className="header-right">
              <div className="header-links">
                <ul>
                  <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                  <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                  <li><NavLink to="/faiba-mobile" className={({ isActive }) => isActive ? 'active' : ''}>Faiba Mobile</NavLink></li>
                  <li><NavLink to="/faiba-fixed" className={({ isActive }) => isActive ? 'active' : ''}>Faiba Fixed</NavLink></li>
                  <li><NavLink to="/self-care" className={({ isActive }) => isActive ? 'active' : ''}>Self Care</NavLink></li>
                  <li><NavLink to="/locate-us" className={({ isActive }) => isActive ? 'active' : ''}>Locate Us</NavLink></li>
                </ul>
              </div>

              <div className="header-other-links">
                <button className="faiba-shop-btn">
                  <span className="shop-icon">🛒</span>
                  <span>FAIBA SHOP</span>
                </button>
                <div className="header-search">
                  <input type="text" placeholder="Search" className="search-input" />
                  <button className="search-btn">🔍</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

