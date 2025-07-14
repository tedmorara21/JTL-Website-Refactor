import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faPaperPlane, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h5 className="footer-title">About Us</h5>
            <a href="/about">About Us</a>
            <a href="https://careers.jtl.co.ke" target="_blank" rel="noopener noreferrer">Careers</a>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">Mobile</h5>
            <a href="/mobile">Bundles</a>
            <a href="https://faibashop.com/en/" target="_blank" rel="noopener noreferrer">Devices</a>
            <a href="https://faiba4g.speedtestcustom.com/" target="_blank" rel="noopener noreferrer">Speedtest</a>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">Fixed</h5>
            <a href="/internet">Internet</a>
            <a href="/internet">Business</a>
            <a href="https://myaccount.jtl.co.ke" target="_blank" rel="noopener noreferrer">Selfcare</a>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">Locate Us</h5>
            <a href="https://goo.gl/maps/5pXL7isCKh96MjJU6" target="_blank" rel="noopener noreferrer">
              Jamii Towers<br />Hospital Rd<br />Upper Hill, Nairobi
            </a>
          </div>
          <div className="footer-col">
            <h5 className="footer-title">Terms</h5>
            <a href="/terms">T&Cs</a>
            <a href="/faq">FAQ</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-row footer-contacts">
          <a href="tel:0747585100" className="footer-contact-link"><FontAwesomeIcon icon={faMobileAlt} /> 0747 585 100</a>
          <a href="tel:0208405100" className="footer-contact-link"><FontAwesomeIcon icon={faMobileAlt} /> 020 8405100</a>
          <a href="mailto:csc@jtl.co.ke" className="footer-contact-link"><FontAwesomeIcon icon={faPaperPlane} /> csc@jtl.co.ke</a>
          <a href="#" className="footer-contact-link"><FontAwesomeIcon icon={faMapMarkerAlt} /> 47419 – 00100 Nairobi</a>
        </div>
        <div className="footer-row footer-socials">
          <a href="https://www.instagram.com/faibamobile/" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FontAwesomeIcon icon={faInstagram} /> @faibamobile</a>
          <a href="https://twitter.com/faibajtl" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FontAwesomeIcon icon={faTwitter} /> @faibajtl</a>
          <a href="https://twitter.com/faibamobile" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FontAwesomeIcon icon={faTwitter} /> @faibamobile</a>
          <a href="https://facebook.com/faibajtl" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FontAwesomeIcon icon={faFacebook} /> faibajtl</a>
          <a href="https://facebook.com/faibamobile" target="_blank" rel="noopener noreferrer" className="footer-social-link"><FontAwesomeIcon icon={faFacebook} /> faibamobile</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jamii Telecommunications Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}