import React from 'react';
import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';

import './PataFaiba.css';

const heroSlides = [ 
    '/pata-faiba-1.jpg', 
    '/pata-faiba-2.jpg',
];

function Hero() {
    const [current, setCurrent] = useState(0);
    
    const prevSlide = () => setCurrent((current - 1 + heroSlides.length) % heroSlides.length);
    const nextSlide = () => setCurrent((current + 1) % heroSlides.length);
  
    return (
      <section className="hero-carousel">
        <div className="carousel-container">
          <a> {/* href={heroSlides[current].link} */}
            <img src={heroSlides[current]} className="carousel-image" />
          </a>
  
          <button className="arrow-left" onClick={prevSlide}>&#8592;</button>
          <button className="arrow-right" onClick={nextSlide}>&#8594;</button>
  
          <div className="carousel-indicators">
            {heroSlides.map((_, idx) => (
              <span
                key={idx}
                className={`carousel-dot${idx === current ? ' active' : ''}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

export default function PataFaiba() {
  return (
    <>
        <Header />
        <Hero />

        <div className="pata-faiba-page">

        <form className="pata-faiba-form">
            <div className="form-group">
            <label> Name *</label>
            <input type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group">
            <label> Location / Apartment / Office Building *</label>
            <input type="text" placeholder="Your Location" required />
            </div>

            <div className="form-group">
            <label> Email *</label>
            <input type="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
            <label> Product *</label>
            <select required>
                <option value="">-- Please select --</option>
                <option value="Nairobi"> Faiba Home Plus </option>
                <option value="Mombasa"> Faiba Business Plan </option>
                <option value="Mombasa"> Faiba Fixed Wireless (Bilawaya) </option>
            </select>
            </div>

            <div className="form-group">
            <label> Mobile Number *</label>
            <input type="tel" placeholder="07XX XXX XXX" required />
            </div>

            <div className="form-group">
            <label> Package *</label>
            <select required>
                <option value="">-- Please select --</option>
                <option value="35Mbps">35Mbps</option>
                <option value="70Mbps">70Mbps</option>
            </select>
            </div>

            <div className="form-group full-width">
            <label> County * (residence)</label>
            <select required>
                <option value="">-- Please select --</option>
                <option value="Nairobi"> Nairobi </option>
                <option value="Mombasa"> Mombasa </option>
                <option value="Mombasa"> Kisumu </option>
            </select>
            </div>

            <div className="form-group full-width terms">
            <label>
                <input type="checkbox" required /> By clicking the submit button below, I hereby agree to and accept the <a className="terms-link" href="/terms"> terms and conditions </a> governing my use of the Faiba Home services. I further confirm that I have read, understood and accept the company’s Fair Usage Policy.
            </label>
            </div>

            <div className="form-group full-width captcha">
                <p> [reCAPTCHA placeholder] </p>
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
