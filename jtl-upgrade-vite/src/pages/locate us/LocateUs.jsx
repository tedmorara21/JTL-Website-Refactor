import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';

import './LocateUs.css';

const locateTabs = [
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
    phone: '+254747356631',
    email: 'info@compnetadvisory.com',
  },
  {
    name: 'FonesRUS',
    location: 'Nairobi CBD',
    phone: '+254703828282',
    email: 'info@compnetadvisory.com',
  },
  {
    name: 'Maguma',
    location: 'Thika',
    phone: '+254701367102',
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

const shopLocationsRender = () => {
  return (
    <>
      {/* Faiba Shops */}
      <h2 className="locate-shop-title"> Faiba Shops </h2>

      <div className="locate-cards-grid">
        {faibaShops.map((shop, idx) => (
          <div className="locate-card" key={idx}>
            <div className="locate-card-title"> {shop.name} </div>
            <div className="locate-card-row"> 📍 {shop.location} </div>
            <div className="locate-card-row"> 📞 {shop.phone} </div>
            <div className="locate-card-row"> ✉️ {shop.email} </div>
          </div>
        ))}
      </div>
    
      {/* Dealers */}
      <h2 className="locate-shop-title"> Dealers </h2>

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
    </>
  )
}

const agentLocationsRender = () => {
  return (
    <div className="agent-location-container">
      <div className="agent-map-section">
        <div className="agent-locate-button-wrapper">
          <button className="locate-nearest-agent-btn"> LOCATE NEAREST AGENT </button>
        </div>

        <iframe
          className='agent-map-iframe'
          title="Faiba Agent Locations"
          width="100%"
          height="450"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8171118.443060526!2d32.60865740015342!3d0.15389973846571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2ske!4v1752839538401!5m2!1sen!2ske"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

const coverageRender = () => {
  const regions = [
    "Nairobi",
    "Coast",
    "Central",
    "Eastern",
    "Western",
    "Nyanza",
    "Rift-Valley",
  ];

  return (
    <div className="coverage-section">
      <h3 className="coverage-title"> Regions </h3>
      <span className="coverage-subtitle"> Shows the areas Faiba Mobile covers </span>

      <div className="coverage-grid">
        {regions.map((region, idx) => (
          <div className="coverage-card" key={idx}>
            <div className="coverage-region-name">{region}</div>
            <button className="coverage-btn">SEE COVERAGE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LocateUs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />

      <main className="locate-main">
        <section className="locate-hero">
          <h1 className="locate-title"> Locate Us </h1>
        </section>

        {/* Tabs */}
        <div className="locate-tabs">
          { locateTabs.map((tab, idx) => (
            <button
              key={tab}
              className={`locate-tab${activeTab === idx ? ' active' : ''}`}
              onClick={() => setActiveTab(idx)}
            > {tab} </button>
          )) }
        </div>

        { activeTab === 0 && shopLocationsRender() }
        { activeTab === 1 && agentLocationsRender() }
        { activeTab === 2 && coverageRender() }
      </main>

      <AppDownload />
      <Footer />
    </>
  );
} 