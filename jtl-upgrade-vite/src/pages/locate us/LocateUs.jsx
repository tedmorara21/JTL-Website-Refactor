import React from 'react';
import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';
import './LocateUs.css';

const shopTabs = [
  'Shop Locations',
  'Agent Locations',
  'Coverage',
];

const faibaShops = [
  {
    name: 'Jamii Telecom',
    location: 'Jamii Towers',
    phone: '020 8405 377',
    email: 'customercare@jtl.co.ke',
  },
  {
    name: 'Jamii Telecom',
    location: 'TRM',
    phone: '020 8405 382',
    email: 'customercare@jtl.co.ke',
  },
  {
    name: 'Jamii Telecom',
    location: 'Nyali Centre',
    phone: '020 8405 378',
    email: 'customercare@jtl.co.ke',
  },
  {
    name: 'Jamii Telecom',
    location: 'Hurlingham, UON pension scheme building',
    phone: '020 8405 381',
    email: 'customercare@jtl.co.ke',
  },
];

const dealers = [
  {
    name: 'Chandarana Food Plus Supermarkets',
    location: 'Inside Airport Centre Shopping Mall (Magongo Rd, Changamwe, Mombasa)',
    phone: '0793466602',
  },
  {
    name: 'Compnet',
    location: 'Nairobi CBD',
    phone: '254747356631',
    email: 'info@compnetadvisory.com',
  },
  {
    name: 'FonesRUS',
    location: 'Nairobi CBD',
    phone: '254703828282',
    email: 'info@compnetadvisory.com',
  },
  {
    name: 'Maguma',
    location: 'Thika',
    phone: '254701367102',
    email: 'kimanikabata@gmail.com',
  },
  {
    name: 'Phonelink Samsung Shop Trm',
    location: 'Inside Thika Road Mall',
  },
  {
    name: 'Phonelink Samsung Westgate',
    location: 'At Westgate',
  },
  {
    name: 'Samsung Shop',
    location: 'Highwayy Mall, Uhuru Highway, Opposite Nyayo Stadium',
  },
];

export default function LocateUs() {
  return (
    <>
      <Header />
      <main className="locate-main">
        {/* Hero Section */}
        <section className="locate-hero">
          <h1 className="locate-title">Locate Us</h1>
        </section>

        {/* Tabs */}
        <div className="locate-tabs">
          {shopTabs.map((tab, idx) => (
            <button
              key={tab}
              className={`locate-tab${idx === 0 ? ' active' : ''}`}
              disabled={idx !== 0}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Faiba Shops */}
        <h2 className="locate-section-title">Faiba Shops</h2>
        <div className="locate-cards-grid">
          {faibaShops.map((shop, idx) => (
            <div className="locate-card" key={idx}>
              <div className="locate-card-title">{shop.name}</div>
              <div className="locate-card-row"><span className="locate-icon">📍</span>{shop.location}</div>
              <div className="locate-card-row"><span className="locate-icon">📞</span>{shop.phone}</div>
              <div className="locate-card-row"><span className="locate-icon">✉️</span>{shop.email}</div>
            </div>
          ))}
        </div>

        {/* Dealers */}
        <h2 className="locate-section-title">Dealers</h2>
        <div className="locate-cards-grid">
          {dealers.map((dealer, idx) => (
            <div className="locate-card" key={idx}>
              <div className="locate-card-title">{dealer.name}</div>
              <div className="locate-card-row"><span className="locate-icon">📍</span>{dealer.location}</div>
              {dealer.phone && <div className="locate-card-row"><span className="locate-icon">📞</span>{dealer.phone}</div>}
              {dealer.email && <div className="locate-card-row"><span className="locate-icon">✉️</span>{dealer.email}</div>}
            </div>
          ))}
        </div>
      </main>
      <AppDownload />
      <Footer />
    </>
  );
} 