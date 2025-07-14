import React from 'react';
import './AppDownload.css';

export default function AppDownload() {
  return (
    <section className="app-download-banner">
      <div className="app-download-container">
        <div className="app-download-left">
          <h3 className="app-download-title">Download the Faiba App Today</h3>
          <p className="app-download-desc">Manage your Faiba Account on the Go</p>
        </div>
        <div className="app-download-right">

          <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=co.ke.faiba4g.android">
            <img className="app-badge" src="/google-play-badge.png" alt="Faiba Android App" height="50" />
          </a>
          
          <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/faiba-4g/id1436271256">
            <img className="app-badge" src="/app-store-badge.png" alt="Faiba iOS App" height="50" />
          </a>
          
        </div>
      </div>
    </section>
  );
} 