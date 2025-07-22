import React from 'react';

import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';

import './Terms.css';

const terms = [
  {
    title: 'Faiba Mobile Terms',
    link: '/docs/faiba-mobile.pdf'
  },
  {
    title: 'Faiba Business Terms',
    link: '/docs/faiba-business.pdf'
  },
  {
    title: 'Faiba Home Terms',
    link: '/docs/faiba-home.pdf'
  },
  {
    title: 'Fair Usage Policy',
    link: '/docs/fair-usage.pdf'
  },
  {
    title: 'Personal Data Protection Policy',
    link: '/docs/personal-data.pdf'
  },
];

export default function Terms() {
  return (
    <>
        <Header />

        <div className="terms-page">
        <div className="terms-header">
            <h1>Terms and Conditions</h1>
        </div>

        <div className="terms-grid">
            {terms.map((term) => (
            <div key={term.title} className="terms-card">
                <h3>{term.title}</h3>
                <a href={term.link} target="_blank" rel="noopener noreferrer" className="terms-btn">
                VIEW PDF 📄
                </a>
            </div>
            ))}
        </div>
        </div>

        <AppDownload />
        <Footer />
    </>
  );
}
