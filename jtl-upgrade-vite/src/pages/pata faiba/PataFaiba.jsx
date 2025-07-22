import React from 'react';

import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';

import './PataFaiba.css';

export default function PataFaiba() {
  return (
    <>
        <Header />

        <div className="pata-faiba-page">
        <h1 className="pata-faiba-title">Pata Faiba</h1>

        <form className="pata-faiba-form">
            <div className="form-group">
            <label>Name *</label>
            <input type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group">
            <label>Location / Apartment / Office Building *</label>
            <input type="text" placeholder="Your Location" required />
            </div>

            <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
            <label>Product *</label>
            <select required>
                <option value="">-- Please select --</option>
                <option value="Home">Home</option>
                <option value="Business">Business</option>
            </select>
            </div>

            <div className="form-group">
            <label>Mobile Number *</label>
            <input type="tel" placeholder="07XX XXX XXX" required />
            </div>

            <div className="form-group">
            <label>Package *</label>
            <select required>
                <option value="">-- Please select --</option>
                <option value="35Mbps">35Mbps</option>
                <option value="70Mbps">70Mbps</option>
            </select>
            </div>

            <div className="form-group full-width">
            <label>County * (residence)</label>
            <select required>
                <option value="">-- Please select --</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Mombasa">Mombasa</option>
            </select>
            </div>

            <div className="form-group full-width terms">
            <label>
                <input type="checkbox" required /> I agree to the terms and conditions.
            </label>
            </div>

            <div className="form-group full-width captcha">
            {/* Use your reCAPTCHA component here if you have one */}
            <p>[ reCAPTCHA placeholder ]</p>
            </div>

            <div className="form-group full-width">
            <button type="submit" className="faiba-submit-btn">SUBMIT REQUEST</button>
            </div>
        </form>
        </div>

        <AppDownload />
        <Footer />
    </>
  );
}
