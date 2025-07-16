import React from 'react';

import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';

import './About.css';

export default function About() {
  return (
    <>
      <Header />
      
      <main className="about-main">
        {/* Top Section: Company Title and Description */}
        <section className="about-hero">
          <h1 className="about-title">Jamii Telecommunications Limited</h1>
          <p className="about-desc">
            Jamii Telecommunications Limited (JTL) is a privately owned Kenyan telecommunication service provider offering broadband and mobile services under the "FAIBA" brand.
          </p>
        </section>

        {/* Vision & Mission Section */}
        <section className="about-row">
          <div className="about-col about-img-col">
            <img src="/about-1.png" alt="Mascot" className="about-mascot" />
          </div>
          <div className="about-col about-green-box">
            <h2>Our Vision</h2>
            <p>To be a market leader in providing innovative communication & digital services</p>
            <h2>Our Mission</h2>
            <p>Connecting Kenya for increased productivity & sustainable growth.</p>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-row">
          <div className="about-col about-dark-box">
            <h2>Our Values</h2>
            <ul>
              <li>The Customer is always King</li>
              <li>Teamwork</li>
              <li>The staff are key</li>
              <li>Performance driven</li>
              <li>Execution is key</li>
              <li>Excellence in everything</li>
              <li>Ethics and Integrity in all our dealings with customers</li>
            </ul>
          </div>
          <div className="about-col about-img-col">
            <img src="/about-2.png" alt="Mascot 2" className="about-mascot" />
          </div>
        </section>

        {/* Innovations Section */}
        <section className="about-row">
          <div className="about-col about-img-col">
            <img src="/about-3.png" alt="Innovation" className="about-img" />
          </div>
          <div className="about-col about-green-box">
            <h2>Innovations & Accomplishments</h2>
            <ul>
              <li>First to deploy a 700MHZ mobile network in Kenya</li>
              <li>First VOLTE mobile service provider in Kenya</li>
              <li>First 100% free on-net voice service for life* in Kenya.</li>
              <li>First to deploy 100% fiber optic network infrastructure in Kenya</li>
              <li>First to deliver 1000mbps capacity network to both Home or business in Kenya</li>
              <li>First commercial & residential FTTx service in Kenya</li>
              <li>First to deliver 1mbps broadband internet for ksh. 1000 (less than $10) in Kenya</li>
              <li>Shared in its TEAM's achievements</li>
            </ul>
          </div>
        </section>
      </main>

      <AppDownload />
      <Footer />
    </>
  );
}