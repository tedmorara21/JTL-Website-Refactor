import React from 'react';

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
              <a href="/" className="header-logo-link">
                <img src="/logo.png" alt="JTL Logo" className="header-logo" />
              </a>
            </div>

            <div className="header-right">
              <div className="header-links">
                <ul>
                  <li><a href='/' className="active">Home</a></li>
                  <li><a href='/about'>About</a></li>
                  <li><a href='/faiba-mobile'>Faiba Mobile</a></li>
                  <li><a href='/faiba-fixed'>Faiba Fixed</a></li>
                  <li><a href='/self-care'>Self Care</a></li>
                  <li><a href='/locate-us'>Locate Us</a></li>
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