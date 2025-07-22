import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';

import './FaibaFixed.css';

const tabs = [
  'Faiba Home Plus',
  'Faiba Business Plus',
  'Konnect',
];

const heroSlides = [
  'faiba-fixed-1.jpg',
  'faiba-fixed-2.jpg',
  'faiba-fixed-3.png',
  'faiba-fixed-4.jpg',
  'faiba-fixed-5.png',
  'faiba-fixed-6.png',
  'faiba-fixed-7.png',
  'faiba-fixed-8.png',
]

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrent((current + 1) % heroSlides.length);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        <a>
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
  )
}

const FaibaHomePlus = () => {
  const homePlus = [
    {
      title: '35 Mbps',
      price: 'Ksh 3,000 per month',
    }, 
    {
      title: '60 Mbps',
      price: 'Ksh 4,000 per month',
    }, 
    {
      title: '90 Mbps',
      price: 'Ksh 5,000 per month',
    },
    {
      title: '150 Mbps',
      price: 'Ksh 10,000 per month',
    }, 
    {
      title: '200 Mbps',
      price: 'Ksh 15,000 per month',
    },
    {
      title: '300 Mbps',
      price: 'Ksh 20,000 per month',
    },
    {
      title: '1 Gps',
      price: 'Ksh 30,000 per month',
    },
  ] 

  const featuresList = [
    'Up to 8K streaming',
    '45 GB welcome bundle',
    '10GB on service renewal',
    'Family share option (Up to 5 Sim Cards)',
    'Unlimited internet for a month',
    '24/7 support',
  ]
  
  return (
    <section className="faiba-fixed-bundles-section">
      <div className="faiba-fixed-bundles-grid">
        {homePlus.map((bundle, idx) => (
          <div className="faiba-fixed-bundle-card" key={idx}>
            <div className="faiba-fixed-bundle-title"> {bundle.title} </div>
            <ul className="faiba-fixed-bundle-features">
              { featuresList.map(( feature, idx ) => (
                <li key={idx}> {feature} </li>
              )) }
            </ul>
            <p className="faiba-fixed-bundle-price"> {bundle.price} </p>
            <div className="faiba-fixed-bundle-btn-container">
              <button className="faiba-fixed-bundle-btn" onClick={() => window.location.href ='/pata-faiba'}> CONTACT US </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const FaibaBusinessPlus = () => {
  const businessPlus = [
    {
      title: '100 Mbps',
      price: 'Ksh 10,000 per month',
      users: 'Ideal for 1 - 10 users'
    }, 
    {
      title: '150 Mbps',
      price: 'Ksh 15,000 per month',
      users: 'Ideal for 11 - 20 users'
    }, 
    {
      title: '250 Mbps',
      price: 'Ksh 25,000 per month',
      users: 'Ideal for 21 - 30 users'
    },
    {
      title: '300 Mbps',
      price: 'Ksh 30,000 per month',
      users: 'Ideal for 31 - 40 users'
    }, 
    {
      title: '400 Mbps',
      price: 'Ksh 45,000 per month',
      users: 'Ideal for 41 - 50 users'
    },
    {
      title: '600 Mbps',
      price: 'Ksh 55,000 per month',
      users: 'Ideal for 51 - 65 users'
    },
  ];

  const featuresList = [
    'HD Video Conferencing',
    'Dedicated Connection',
    'Fast Cloud Backup',
    '45 GB welcome bundle',
    '10GB on service renewal',
    'Corporate share plan (Up to 5 Sim Cards)',
  ]

  return (
    <section className="faiba-fixed-bundles-section">
      <div className="faiba-fixed-bundles-grid">
        {businessPlus.map((bundle, idx) => (
          <div className="faiba-fixed-bundle-card" key={idx}>
            <div className="faiba-fixed-bundle-title"> {bundle.title} </div>
            <ul className="faiba-fixed-bundle-features">
              { featuresList.map(( feature, idx ) => (
                <li key={idx}> {feature} </li>
              )) }
            </ul>
            <div className="faiba-fixed-bundle-users"> {bundle.users} </div>
            <p className="faiba-fixed-bundle-price"> {bundle.price} </p>
            <div className="faiba-fixed-bundle-btn-container">
              <button className="faiba-fixed-bundle-btn" onClick={() => window.location.href ='/pata-faiba'}> CONTACT US </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Konnect = () => {
  const konnectBundles = [
    {
      title: 'Konnect 1',
      speed: '1 Mbps',
    }, 
    {
      title: 'Konnect 2',
      speed: '2 Mbps',
    }, 
    {
      title: 'Konnect 3',
      speed: '3 Mbps',
    },
    {
      title: 'Konnect 5',
      speed: '5 Mbps',
    }, 
    {
      title: 'Konnect 10',
      speed: '10 Mbps',
    },
    {
      title: 'Konnect 20',
      speed: '20 Mbps',
    },
    {
      title: 'Konnect 50',
      speed: '50 Mbps',
    },
  ] 

  return (
    <section className="faiba-fixed-bundles-section">
      <div className="faiba-fixed-bundles-grid">
        { konnectBundles.map((bundle, idx) => (
          <div className="faiba-fixed-bundle-card" key={idx}>
            <div className="faiba-fixed-bundle-title"> {bundle.title} </div>
            <p className="faiba-fixed-konnect-speed"> {bundle.speed} </p>
            <div className="faiba-fixed-bundle-btn-container">
              <button className="faiba-fixed-bundle-btn" onClick={() => window.location.href ='/pata-faiba'}> CONTACT US </button>
            </div>
          </div>
        )) }
      </div>
    </section>
  )
}

export default function FaibaFixed() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />
      <Hero />

        {/* Tabs */}
        <div className="faiba-fixed-tabs">
          { tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`faiba-fixed-tab${activeTab === idx ? ' active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >  {tab}  </button>
          )) }
        </div>

        { activeTab === 0 && <FaibaHomePlus /> }
        { activeTab === 1 && <FaibaBusinessPlus /> }
        { activeTab === 2 && <Konnect /> }

      <AppDownload />
      <Footer />
    </>
  );
} 
