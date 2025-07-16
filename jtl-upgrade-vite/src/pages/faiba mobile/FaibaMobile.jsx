import React from 'react';

import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';

import './FaibaMobile.css';

export default function FaibaMobile() {
  // Example bundles
  const bundles = [
    { data: '65GB', price: 'Ksh 1,000', validity: '30 Days', promo: true },
    { data: '40GB', price: 'Ksh 500', validity: '30 Days' },
    { data: '25GB', price: 'Ksh 300', validity: '7 Days' },
    { data: '8GB', price: 'Ksh 150', validity: '3 Days' },
    { data: '1GB', price: 'Ksh 50', validity: '1 Day' },
    { data: '200MB', price: 'Ksh 10', validity: '1 Hour' },
  ];

  return (
    <>
      <Header />

      <main className="faiba-mobile-main">
        {/* Hero Banner */}
        <section className="faiba-mobile-hero">
          <div className="faiba-mobile-hero-content">
            <div className="faiba-mobile-hero-text">
              <span className="faiba-mobile-badge">PROMO</span>
              <h1 className="faiba-mobile-title">Ji-Upgrade na Faiba Mobile</h1>
              <p className="faiba-mobile-subtitle">GET <span className="green">65GB FREE</span> on your first SIM activation</p>
              <p className="faiba-mobile-desc">Enjoy the fastest, most affordable 4G data bundles in Kenya.</p>
            </div>
            <div className="faiba-mobile-hero-img-wrap">
              <img src="https://placehold.co/300x400?text=Phone+Image" alt="Faiba Mobile Phone" className="faiba-mobile-hero-img" />
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="faiba-mobile-tabs">
          <button className="faiba-mobile-tab active">Data Plans</button>
          {/* Future: <button className="faiba-mobile-tab">Bilawaya</button> <button className="faiba-mobile-tab">Information</button> */}
        </div>

        {/* Bundles Grid */}
        <section className="faiba-mobile-bundles-section">
          <div className="faiba-mobile-bundles-grid">
            {bundles.map((bundle, idx) => (
              <div className={`faiba-mobile-bundle-card${bundle.promo ? ' promo' : ''}`} key={idx}>
                {bundle.promo && <span className="faiba-mobile-bundle-promo">FREE 65GB</span>}
                <div className="faiba-mobile-bundle-data">{bundle.data}</div>
                <div className="faiba-mobile-bundle-validity">{bundle.validity}</div>
                <div className="faiba-mobile-bundle-price">{bundle.price}</div>
                <button className="faiba-mobile-bundle-btn">BUY NOW</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <AppDownload />
      <Footer />
    </>
  );
} 