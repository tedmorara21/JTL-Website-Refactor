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
        <h1>SELF CARE</h1>
        <p>Manage your Faiba account, view usage, and access support through our Self Care portal.</p>
      </div>

      <AppDownload />
      <Footer />
    </>
  );
} 