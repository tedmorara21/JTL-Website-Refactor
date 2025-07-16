import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';
import './FaibaFixed.css';

const features = [
  '4G DATA BACKUP',
  '8K STREAMING',
  'DEDICATED CONNECTION',
  'LOWEST LATENCY IN KENYA',
  'TOLL FREE SUPPORT',
  'GAMING NETWORK',
];

const tabs = [
  'Faiba Home Plus',
  'Faiba Business Plus',
  'Konnect',
];

const bundles = [
  [ // Faiba Home Plus
    {
      speed: '35 Mbps',
      price: 'Ksh 3,000',
      period: '/ mo',
      features: [
        'Up to 8K streaming',
        '45 GB welcome bundle and 10GB on service renewal',
        'Family share option (Up to 5 Sim Cards)',
        'Unlimited internet for a month',
        '24/7 support',
      ],
    },
    {
      speed: '60 Mbps',
      price: 'Ksh 4,000',
      period: '/ mo',
      features: [
        'Up to 8K streaming',
        '45 GB welcome bundle and 10GB on service renewal',
        'Family share option (Up to 5 Sim Cards)',
        'Unlimited internet for a month',
        '24/7 support',
      ],
    },
    {
      speed: '90 Mbps',
      price: 'Ksh 5,000',
      period: '/ mo',
      features: [
        'Up to 8K streaming',
        '45 GB welcome bundle and 10GB on service renewal',
        'Family share option (Up to 5 Sim Cards)',
        'Unlimited internet for a month',
        '24/7 support',
      ],
    },
  ],
  [ // Faiba Business Plus
    {
      speed: '150 Mbps',
      price: 'Ksh 10,000',
      period: '/ mo',
      features: [
        'Up to 8K streaming',
        '45 GB welcome bundle and 10GB on service renewal',
        'Family share option (Up to 5 Sim Cards)',
        'Unlimited internet for a month',
        '24/7 support',
      ],
    },
    {
      speed: '200 Mbps',
      price: 'Ksh 15,000',
      period: '/ mo',
      features: [
        'Up to 8K streaming',
        '45 GB welcome bundle and 10GB on service renewal',
        'Family share option (Up to 5 Sim Cards)',
        'Unlimited internet for a month',
        '24/7 support',
      ],
    },
  ],
  [ // Konnect
    {
      speed: '300 Mbps',
      price: 'Ksh 20,000',
      period: '/ mo',
      features: [
        'Up to 8K streaming',
        '45 GB welcome bundle and 10GB on service renewal',
        'Family share option (Up to 5 Sim Cards)',
        'Unlimited internet for a month',
        '24/7 support',
      ],
    },
    {
      speed: '1 Gbps',
      price: 'Ksh 30,000',
      period: '/ mo',
      features: [
        'Up to 8K streaming',
        '45 GB welcome bundle and 10GB on service renewal',
        'Family share option (Up to 5 Sim Cards)',
        'Unlimited internet for a month',
        '24/7 support',
      ],
    },
  ],
];

export default function FaibaFixed() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Header />
      <main className="faiba-fixed-main">
        {/* Hero Banner */}
        <section className="faiba-fixed-hero">
          <div className="faiba-fixed-hero-left">
            <span className="faiba-fixed-new-badge">NEW</span>
            <h1 className="faiba-fixed-title">FAIBA HOME <span className="faiba-fixed-plus-badge">PLUS</span></h1>
            <div className="faiba-fixed-promo-text">Pata Your Home Fibre Connection Plus Mobile Data for you & your family at no extra cost to your billing</div>
          </div>
          <div className="faiba-fixed-hero-center">
            <img src="https://placehold.co/320x180?text=Mascot" alt="Mascot" className="faiba-fixed-mascot" />
          </div>
          <div className="faiba-fixed-hero-right">
            <div className="faiba-fixed-hero-green">
              <div className="faiba-fixed-hero-speed">ENJOY <span>35Mbps</span></div>
              <div className="faiba-fixed-hero-price">FOR ONLY <span>3,000/-</span></div>
              <div className="faiba-fixed-hero-plus">+ 4G DATA</div>
              <img src="https://placehold.co/120x80?text=SIM+Cards" alt="SIM Cards" className="faiba-fixed-sim-img" />
              <div className="faiba-fixed-hero-bundle-details">45GB WELCOME BUNDLE + 10GB ON SERVICE RENEWAL</div>
            </div>
          </div>
        </section>

        {/* Feature Bar */}
        <div className="faiba-fixed-feature-bar">
          {features.map((feature, idx) => (
            <span className="faiba-fixed-feature-btn" key={idx}>{feature}</span>
          ))}
        </div>

        {/* Tabs */}
        <div className="faiba-fixed-tabs">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`faiba-fixed-tab${activeTab === idx ? ' active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bundles Grid */}
        <section className="faiba-fixed-bundles-section">
          <div className="faiba-fixed-bundles-grid">
            {bundles[activeTab].map((bundle, idx) => (
              <div className="faiba-fixed-bundle-card" key={idx}>
                <div className="faiba-fixed-bundle-header">{bundle.speed}</div>
                <div className="faiba-fixed-bundle-price-row">
                  <span className="faiba-fixed-bundle-price">{bundle.price}</span>
                  <span className="faiba-fixed-bundle-period">{bundle.period}</span>
                </div>
                <ul className="faiba-fixed-bundle-features">
                  {bundle.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <button className="faiba-fixed-bundle-btn">CONTACT US</button>
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