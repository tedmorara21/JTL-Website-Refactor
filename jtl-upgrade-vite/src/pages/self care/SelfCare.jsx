import React from 'react';

import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer'; 


import './SelfCare.css';

export default function SelfCare() {
  return (
    <>
      <Header />

      <div className="self-care-container">
        <div className="self-care-welcome-card">
          <div className="self-care-welcome-actions">
          <h1 className="self-care-title"> WELCOME </h1>
          <p className="self-care-subtitle"> Manage your Faiba account, view usage, and access support through our Self Care portal. </p>
            <button className="self-care-signup-btn" onClick={ () => window.open('https://myaccount.jtl.co.ke/register','_blank') }> SIGN UP </button>
            <button className="self-care-signin-btn" onClick={ () => window.open('https://myaccount.jtl.co.ke/login', '_blank') }> SIGN IN </button>
          </div>
        </div>
      </div>

      <AppDownload />
      <Footer />
    </>
  );
} 
