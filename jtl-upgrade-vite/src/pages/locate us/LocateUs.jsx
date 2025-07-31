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

const coverageData = {
  "Nairobi": {
    "Nairobi": [ "Fully Covered" ],
  },
  "Coast": {
    "Mombasa": ["CBD", "Airport", "Bamburi", "Bombolulu", "Chaani", "Changamwe", "Kakujo", "Kiembeni", "Kisauni", "Likoni", "Makaburini", "Makadara", "Makupa", "Mikindani", "Miritini", "Mtopanga", "Mvita", "NSSF", "Nyali Cinemax", "Nyali Exchange", "Port Reitz", "Shimanzi", "Voyager"],
    "Kilifi": ["Kikambala", "Mtwapa", "Shanzu"],
    "Taita Taveta": ["Maweni", "Voi CBD"],
  },
  "Central": {
    "Nyeri": ["Karatina", "Nyeri Town"],
    "Murang'a": ["Kenol", "Muranga Township"],
    "Kiambu": ["Banana Hill", "Gatongora (Ruiru)", "Gatuanyaga (Garisa Road)", "Gichuru", "Gikambura", "Githurai 45", "Juja", "Kabete", "Kahawa Sukari", "Kahawa Wendani", "Kahawa West", "Kalimoni", "Kanunga", "Karuri Town", "Kiambaa", "Kiambu Township", "Kikuyu", "Kinoo", "Kirigiti", "Landless Estate (Thika)", "Limuru", "Lower Kabete", "Magomano", "Maki Estate", "Makongeni (Thika)", "Membley (Ruiru)", "Muguga", "Mugumo Estate", "Murema Estate", "Mwihoko", "Ndumbuini (Uthiru Area)", "Ndenderu", "Ngoingwa Estate (Thika)", "Rironi", "Ruaka", "Ruiru", "Ruiru (Williamson Arcade)", "Thika (Industrial Area)", "Thika Town", "Thogoto", "Wangige", "Waverley Estate", "Witeithie", "Witeithie - Maraba"],
    "Kirinyaga": ["Kerugoya Town", "Kutus", "Sagana", "Mwea", "Kagio"],
    "Nyandarua": ["Ol Kalou"],
  },
  "Eastern": {
    "Machakos": ["Athi River", "Centre", "Daystar", "Gateway Mall", "Katani", "Machakos Town", "Machakos Junction", "Miwani", "Mlolongo", "Ngei", "Portland", "Signature Mall", "Syokimau"],
    "Meru": ["Exchange", "Makutano", "Nkubu"],
    "Embu": ["Kimathi", "Ngariama", "Telkom"],
    "Tharaka Nithi": ["Chuka Town"],
  },
  "Western": {
    "Kakamega": ["Kakamega Town", "Lurambi", "Mumias Town"],
    "Bungoma": ["Bungoma Town", "Kanduyi", "Webuye"],
    "Busia": ["Busia Town", "Lwero", "Malaba"],
  },
  "Nyanza": {
    "Kisumu": ["CBD", "Airport", "Carwash", "Industrial Area", "Kajulu", "Mamboleo", "Manyatta", "Migosi", "Milimani", "Mountain View", "Nyalenda", "Nyamasaria", "Stadium"],
    "Kisii": ["Exchange", "Gesonso", "Kisii Dallas", "Kisii Hill", "Milimani", "Kisii University"],
    "Nyamira": ["Keroka"],
  },
  "Rift-Valley": {
    "Elgeyo Marakwet": ["Iten Township", "Kamwosor", "Nyaru"],
    "Kajiado": ["Athi River", "Kajiado Township", "Kibiko", "Kiserian", "Kitengela", "Matasia", "Ngong", "Nkoroi", "Ongata Rongai", "Ostrich Farm"],
    "Kericho": ["Cheromit", "Kabianga", "Kapsuser", "Kericho Town", "Litein"],
    "Laikipia": ["Equator", "Nanyuki Township", "Nyahururu Town (Muthaiga)", "Runda Estate", "Thompson Falls"],
    "Nandi": ["Baraton", "Lessos", "Nandi Hills", "Kapsabet", "Mosoriot"],
    "Nakuru": ["Barnabas", "Barracks", "Elburgon", "Elementaita", "El dama Ravine", "Engoshura", "Egerton", "Gilgil Town", "Kabarak", "Kabasis", "Lanet", "Longonot", "Kabasis Center", "Kiamunyeki", "Kiamunyi", "Kikopey", "KMTC Nakuru", "Mau Summit", "Mai Mahiu", "Mercy Njeri", "Milimani", "Mogotio", "Molo Town", "Naivasha Town", "Naivasha (Moi South Lake)", "Nakuru East", "Nakuru Town", "Ngata", "Njoro", "Polo Center", "Rhonda", "Rongai", "Salgaa", "Sobea", "Soysambu Conservancy"],
    "Trans Nzoia": ["Kitale", "Lessos Estate", "Matunda"],
    "Uasin Gishu": ["Eldoret East", "Eldoret North", "Eldoret Town", "Hoeys Bridge", "Huruma", "Jamii Milling", "Kapseret", "Kapsoya", "Kimumu", "Kongoni", "Langas", "Leseru", "Matunda", "Moi University", "Mosoriot", "Soy", "Railways", "Testimony", "Turbo", "West Indies", "Yamumbi"],
    "Baringo": ["Eldama Ravine", "Emining", "Kabarak", "Mogotio"],
    "Bomet": ["Bomet Oasis", "Bomet Town", "Kapchepkoro", "Sotik"],
    "Narok": ["London Estate", "Mulot", "Narok Farmers", "Narok Town", "Narok TKL", "Ololunga", "Suswa"],
  },
};

const shopLocationsRender = () => {
  return (
    <>
      {/* FAIBA SHOPS */}
      <h2 className="locate-shop-title"> FAIBA SHOPS </h2>

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
    
      {/* DEALERS */}
      <h2 className="locate-shop-title"> DEALERS </h2>

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
          height="500" 
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8171118.443060526!2d32.60865740015342!3d0.15389973846571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2ske!4v1752839538401!5m2!1sen!2ske"
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

const coverageRender = ( {expandedRegion, setExpandedRegion, expandedCounty, setExpandedCounty} ) => {
  const toggleRegion = (region) => {
    setExpandedRegion( expandedRegion === region ? null : region );
    setExpandedCounty({}); // collapse counties when switching regions
  };

  const toggleCounty = (region, county) => {
    setExpandedCounty(prev => ({
      ...prev,
      [region]: prev[region] === county ? null : county
    }));
  };

  return (
    <div className="coverage-section">
      <h3 className="coverage-title"> Regions </h3>
      <span className="coverage-subtitle"> Shows the areas Faiba Mobile covers </span>

      <div className="coverage-accordion">
        { Object.entries(coverageData).map( ([region, counties]) => (
          <div key={region} className="coverage-card">
            <button className="coverage-region-toggle" onClick={() => toggleRegion( region )}>
              {region} <span>{expandedRegion === region ? "▲" : "▼"}</span>
            </button>

            { expandedRegion === region && (
              <div className="county-list">
                { Object.entries(counties).map( ([county, subregions]) => (
                  <div key={county} className="county-item">
                    <button className="county-toggle" onClick={() => toggleCounty( region, county )}>
                      {county} <span> {expandedCounty[region] === county ? "−" : "+"} </span>
                    </button>

                     { expandedCounty[region] === county && (
                      <ul className="subregion-list">
                        { subregions.map((subregion, idx) => (
                          <li key={idx}> - {subregion} </li>
                        )) }
                      </ul>
                    ) }
                  </div>
                )) }
              </div>
            ) }
          </div>
        ) ) }
      </div>
    </div>
  );
}

export default function LocateUs() {
  const [activeTab, setActiveTab] = useState(0);

  const [ expandedRegion, setExpandedRegion ] = useState(null);
  const [ expandedCounty, setExpandedCounty ] = useState({});

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
        { activeTab === 2 && coverageRender( {expandedRegion, setExpandedRegion, expandedCounty, setExpandedCounty}) }
      
      </main>

      <AppDownload />
      <Footer />
    </>
  );
} 
