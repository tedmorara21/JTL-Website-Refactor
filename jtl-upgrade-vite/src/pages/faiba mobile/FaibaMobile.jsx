import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';

import './FaibaMobile.css';

const carouselImages = [
  '/faiba-mobile-1.png',
  '/faiba-mobile-2.jpg',
  '/faiba-mobile-3.jpg',
  '/faiba-mobile-4.jpg',
  '/faiba-mobile-5.jpg',
  '/faiba-mobile-6.jpg',
  '/faiba-mobile-7.jpg',
];

function Hero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + carouselImages.length) % carouselImages.length);
  const nextSlide = () => setCurrent((current + 1) % carouselImages.length);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        <a>
          <img src={carouselImages[current]} className="carousel-image" />
        </a>

        <button className="arrow-left" onClick={prevSlide}>&#8592;</button>
        <button className="arrow-right" onClick={nextSlide}>&#8594;</button>

        <div className="carousel-indicators">
          {carouselImages.map((_, idx) => (
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

function Bundles() {
  const [activeBundlesTab, setActiveBundlesTab] = useState('Data Plans');

  return (
    <section className="faiba-mobile-bundles-section">
      <div className="faiba-mobile-bundles-tabs">
        {['Data Plans', 'Gumzo Non-Stop (Calls only)', 'Faiba All In One (Calls, SMS, Data)'].map((tab, idx) => (
          <button
            key={idx}
            className={`faiba-mobile-bundles-tab${activeBundlesTab === tab ? ' active' : ''}`}
            onClick={() => setActiveBundlesTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      { activeBundlesTab === 'Data Plans' && <DataPlans /> }
      { activeBundlesTab === 'Gumzo Non-Stop (Calls only)' && <GumzoNonStop /> }
      { activeBundlesTab === 'Faiba All In One (Calls, SMS, Data)' && <FaibaAllInOne /> }
    </section>
  )
}

{/* BUNDLES SECTION */}
function DataPlans() {
   const data_plans = [
      { title: '225 MB', price: 'Ksh 20', validity: 'Valid for 1 Day',  },
      { title: '1 GB', price: 'Ksh 50', validity: 'Valid for 1 Day' },
      { title: 'Fisi Unlimited', price: 'Ksh 150', validity: 'Valid for 3 hours' },
      { title: '1 + 1 GB', price: 'Ksh 60', validity: 'Valid for 1 Day', bonus: 'BONUS VALID 11pm to 5am' },
      { title: '5 GB', price: 'Ksh 50', validity: 'Valid from 11pm to 5am' },
      { title: '2.5 GB', price: 'Ksh 100', validity: 'Valid for 3 Days' },
      { title: '8 GB', price: 'Ksh 300', validity: 'Valid for 7 Days' },
      { title: '8 + 8 GB Night', price: 'Ksh 400', validity: 'Valid for 7 Days', bonus: 'BONUS VALID 11pm to 5am' },
      { title: '15 GB', price: 'Ksh 500', validity: 'Valid for 30 Days' },
      { title: '15 + 15 GB Night', price: 'Ksh 650', validity: 'Valid for 30 Days', bonus: 'BONUS VALID 11pm to 5am' },
      { title: "30 GB", price: "Ksh 1,000", validity: "Valid for 30 Days" },
      { title: "30 + 30 GB", price: "Ksh 1,300", validity: "Valid for 30 Days", bonus: 'BONUS VALID 11pm to 5am' },
      { title: "65 GB", price: "Ksh 2,000", validity: "Valid for 30 Days" },
      { title: "100 GB", price: "Ksh 3,000", validity: "Valid for 60 Days" },
      { title: "140 GB", price: "Ksh 4,000", validity: "Valid for 60 Days" },
      { title: "225 GB", price: "Ksh 6,000", validity: "Valid for 90 Days" },
    ];

    return (
      <div className="faiba-mobile-bundles-grid">
            {data_plans.map((data_plan, idx) => (
              <div className={`faiba-mobile-bundle-card`} key={idx}>
                <div className="faiba-mobile-bundle-title"> {data_plan.title} </div>
                <div className="faiba-mobile-bundle-validity item-dot"> {data_plan.validity} </div>
                { data_plan.bonus && <div className="faiba-mobile-bundle-bonus"> {data_plan.bonus} </div> }
                <div className="faiba-mobile-bundle-price"> {data_plan.price} </div>
                <div className="faiba-mobile-bundle-btn-container">
                  <button className="faiba-mobile-bundle-btn"> BUY NOW </button>
                </div>
              </div>
            ))}
      </div>
    )
}

{/* BUNDLES SECTION */}
function GumzoNonStop() {
  const gumzo_calls = [
    { title: '50 minutes', price: 'Ksh 50', validity: 'Valid for 1 Day\n', minutes: '50 minutes to Other Networks', bonus: 'Faiba to Faiba Calls' },
    { title: '100 minutes', price: 'Ksh 150', validity: 'Valid for 7 Days', minutes: '100 minutes to Other Networks', bonus: 'Faiba to Faiba Calls' },
    { title: '200 minutes', price: 'Ksh 250', validity: 'Valid for 7 Days', minutes: '200 minutes to Other Networks', bonus: 'Faiba to Faiba Calls' },
    { title: '300 minutes', price: 'Ksh 350', validity: 'Valid for 30 Days', minutes: '300 minutes to Other Networks', bonus: 'Faiba to Faiba Calls' },
    { title: '500 minutes', price: 'Ksh 500', validity: 'Valid for 30 Days', minutes: '500 minutes to Other Networks', bonus: 'Faiba to Faiba Calls' },
    { title: '700 minutes', price: 'Ksh 700', validity: 'Valid for 30 Days', minutes: '700 minutes to Other Networks', bonus: 'FREE Faiba to Faiba Calls' },
    { title: '1000 minutes', price: 'Ksh 1,000', validity: 'Valid for 30 Days', minutes: '1,000 minutes to Other Networks', bonus: 'FREE Faiba to Faiba Calls' },
  ];

  return (
    <div className="faiba-mobile-bundles-grid">
          {gumzo_calls.map((gumzo_call, idx) => (
            <div className={`faiba-mobile-bundle-card`} key={idx}>
              <div className="faiba-mobile-bundle-title"> {gumzo_call.title} </div>
              <div className="faiba-mobile-bundle-validity item-dot"> {gumzo_call.validity} </div>
              <div className="faiba-mobile-bundle-minutes item-dot"> {gumzo_call.minutes} </div>
              { gumzo_call.bonus && <div className="faiba-mobile-bundle-bonus"> {gumzo_call.bonus} </div> }
              <div className="faiba-mobile-bundle-price"> {gumzo_call.price} </div>
              <div className="faiba-mobile-bundle-btn-container">
                <button className="faiba-mobile-bundle-btn">BUY NOW</button>
              </div>
            </div>
          ))}
    </div>
  )
}

{/* BUNDLES SECTION */}
function FaibaAllInOne() {
  const faiba_all_in_one = [
    { title: 'CHUI', price: 'Ksh 500', data: '5 GB Data', sms: '100 SMS', minutes: '300 minutes to other networks', validity: 'Valid for 30 Days' },
    { title: 'KIFARU', price: 'Ksh 700', data: '7 GB Data', sms: '100 SMS', minutes: '500 minutes to other networks', validity: 'Valid for 30 Days' },
    { title: 'NDOVU', price: 'Ksh 1,000', data: '10 GB Data', sms: '100 SMS', minutes: '700 minutes to other networks', validity: 'Valid for 30 Days' },
    { title: 'SIMBA', price: 'Ksh 2,000', data: '20 GB Data', sms: '100 SMS', minutes: '1,500 minutes to other networks', validity: 'Valid for 30 Days' },
  ];

  return (
    <div className="faiba-mobile-bundles-grid">
          {faiba_all_in_one.map((faiba, idx) => (
            <div className={`faiba-mobile-bundle-card`} key={idx}>
              <div className="faiba-mobile-bundle-title"> {faiba.title} </div>
              <div className="faiba-mobile-bundle-validity item-dot"> {faiba.validity} </div>
              <div className="faiba-mobile-bundle-data item-dot"> {faiba.data} </div>
              <div className="faiba-mobile-bundle-sms item-dot"> {faiba.sms} </div>
              <div className="faiba-mobile-bundle-minutes item-dot"> {faiba.minutes} </div>
              <div className="faiba-mobile-bundle-bonus"> FREE Faiba to Faiba Calls </div>
              <div className="faiba-mobile-bundle-price"> {faiba.price} </div>
              <div className="faiba-mobile-bundle-btn-container">
                <button className="faiba-mobile-bundle-btn"> BUY NOW </button>
              </div>
            </div>
          ))}
    </div>
  )
}

function Bilawaya() {
  const bilawaya_plans = [
    { title: 'BILAWAYA PLUS', price: 'Ksh 3,000 per month', data: 'Get 210GB Monthly / 7 GB Daily on Bilawaya Plus', validity: 'Valid for 30 Days' },
    { title: 'BILAWAYA PREMIUM', price: 'Ksh 5,250 per month', data: 'Get 450GB Monthly / 15 GB Daily on Bilawaya Plus', validity: 'Valid for 30 Days' },
  ];

  return (
    <section className="faiba-mobile-bundles-section">
      <div className="faiba-mobile-bundles-grid">
          {bilawaya_plans.map((bilawaya_plan, idx) => (
            <div className={`faiba-mobile-bundle-card`} key={idx}>
              <div className="faiba-mobile-bundle-title">{bilawaya_plan.title}</div>
              <div className="faiba-mobile-bundle-validity item-dot"> {bilawaya_plan.validity} </div>
              <div className="faiba-mobile-bundle-data item-dot"> {bilawaya_plan.data} </div>
              <div className="faiba-mobile-bundle-price"> {bilawaya_plan.price} </div>
              <div className="faiba-mobile-bundle-btn-container">
                <button className="faiba-mobile-bundle-btn"> BUY NOW </button>
              </div>
            </div>
          ))}
      </div>  
    </section>
  )
}

function Information() {
  const [ codeInput, setCodeInput ] = useState('');
  const [ codeMessage, setCodeMessage ] = useState('');

  const checkExtentionCode = () => {
    if ( codeInput.trim() === '' ) {
      setCodeMessage('Enter Extention Code');
      setTimeout( () => setCodeMessage(''), 2000 );
    } else {
      setCodeMessage('Rate Unavailable');
      setTimeout(() => setCodeMessage(''), 2000);
    }
  }

  return (
    <section className="faiba-mobile-info-section">
      <div className="faiba-mobile-info-grid">
        <div className="faiba-mobile-info-card">
          <h1 className='faiba-mobile-info-title'> Prepaid Tariff </h1>
          <p>Enjoy the most affordable rates in Kenya.</p>
          <ul>
            <li> On-net calls at Kshs. 2/min </li>
            <li> Off-net calls at Kshs. 2.78/min </li>
            <li> On-net & Off-net SMS at Kshs. 1 </li>
            <li> On-net calls & SMS <strong>FREE</strong> if on a valid bundle </li>
          </ul>
          <div className='faiba-mobile-info-btn-container'>
            <button className="faiba-mobile-info-btn"> VIEW TERMS </button>
          </div>
        </div>

        <div className="faiba-mobile-info-card">
          <h1 className='faiba-mobile-info-title'> International Calling </h1>
          <p> Call over 700 destinations worldwide</p>
          <div className='faiba-mobile-info-input-container'>
            <select className='faiba-mobile-info-select'>
              <option> Afghanistan </option>
              <option> Albania </option>
              <option> Kenya </option>
              {/* Add more countries here */}
            </select>
            <input 
              type="text" 
              placeholder="Extention Code" 
              className='faiba-mobile-info-input' 
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
            />
          </div>
          <div className='faiba-mobile-info-btn-container'>
            <button className="faiba-mobile-info-btn" onClick={checkExtentionCode}> CHECK RATE </button>
            { codeMessage === 'Enter Extention Code' && <p className='incorrect'> {codeMessage} </p> }
            { codeMessage === 'Rate Unavailable' && <p className='correct'> {codeMessage} </p> }
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FaibaMobile() {
  const [activeTab, setActiveTab] = useState('Bundles');

  return (
    <>
      <Header />
      <Hero />

      <div className="faiba-mobile-tabs">
        { ['Bundles', 'Bilawaya', 'Information'].map((tab, idx) => (
          <button
            key={idx}
            className={`faiba-mobile-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          > {tab} </button>
        )) }
      </div>

      { activeTab === 'Bundles' && <Bundles /> }
      { activeTab === 'Bilawaya' && <Bilawaya /> }
      { activeTab === 'Information' && <Information /> }
      

      <AppDownload />
      <Footer />
    </>
  );
}
