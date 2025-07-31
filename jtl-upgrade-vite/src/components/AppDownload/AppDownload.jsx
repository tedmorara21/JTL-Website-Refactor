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
            <img className="app-badge" src="/app-download-1.png" alt="Faiba Android App" height="50" />
          </a>
          

          <a target="_blank" rel="noopener noreferrer" href="https://appgallery.huawei.com/app/C102393165?sharePrepath=ag&channelId=Faiba&id=6360f105f9f0409ebe5ed71dbcad236f&s=B3D5696A5745910665146EF304330B5E5D1FE77062F4AC3E6EEFD43859B98BAB&detailType=0&v=">
            <img className="app-badge" src="/app-download-2.png" alt="Faiba App Gallery App" height="50" />
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/faiba-4g/id1436271256">
            <img className="app-badge" src="/app-download-3.png" alt="Faiba iOS App" height="50" />
          </a>
          
        </div>
      </div>
    </section>
  );
} 
