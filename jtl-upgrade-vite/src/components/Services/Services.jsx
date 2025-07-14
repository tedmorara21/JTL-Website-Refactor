import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Faiba Fixed Internet',
    description: 'Fastest & most reliable broadband internet services for Corporate, Homes, SME’s & residential customers using Fiber Optic',
    button: 'View our plans',
    link: 'https://jtl.co.ke/internet',
    cardClass: 'service-card dark',
    btnClass: 'btn btn-primary',
  },
  {
    title: 'Faiba Mobile 4G LTE',
    description: 'Purely 4G mobile network that allows customers to enjoy fast and affordable data internet packages on their mobile phones',
    button: 'View our offers',
    link: 'https://jtl.co.ke/mobile',
    cardClass: 'service-card primary',
    btnClass: 'btn btn-dark',
  },
  {
    title: 'Faiba Shop Outlets',
    description: 'Check out a shop near you that is open to buy MiFi, Router & Faiba simcard for the best offers & customer care in Nairobi & other major towns',
    button: 'Find Us',
    link: 'https://jtl.co.ke/locate-us',
    cardClass: 'service-card dark',
    btnClass: 'btn btn-primary',
  },
];

export default function Services() {
  return (
    <section className="services-row">
      {services.map((service, idx) => (
        <div className={service.cardClass} key={service.title}>
          <div className="service-content">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
          <a href={service.link} className={service.btnClass} target="_blank" rel="noopener noreferrer">
            {service.button}
          </a>
        </div>
      ))}
    </section>
  );
}