import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import './Home.css';


const heroSlides = [
  {
    img: '/home-1.jpg',
    /* link: 'https://jtl.co.ke/pata-faiba', */
  },
  {
    img: '/home-2.jpg',
    /* link: 'https://jtl.co.ke/pata-faiba', */
  },
  {
    img: '/home-3.png',
    /* link: 'https://jtl.co.ke/pata-faiba', */
  },
  {
    img: '/home-4.jpg',
    /* link: 'https://jtl.co.ke/pata-faiba', */
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  
  const prevSlide = () => setCurrent((current - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrent((current + 1) % heroSlides.length);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        <a> {/* href={heroSlides[current].link} */}
          <img src={heroSlides[current].img} className="carousel-image" />
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
  );
}

const services = [
  {
    title: 'Faiba Fixed Internet',
    description: 'Fastest & most reliable broadband internet services for Corporate, Homes, SME’s & residential customers using Fiber Optic',
    button: 'VIEW OUR PLANS',
    link: '/faiba-fixed',
    cardClass: 'service-card dark',
    btnClass: 'btn btn-primary',
  },
  {
    title: 'Faiba Mobile 4G LTE',
    description: 'Purely 4G mobile network that allows customers to enjoy fast and affordable data internet packages on their mobile phones',
    button: 'VIEW OUR OFFERS',
    link: '/faiba-mobile',
    cardClass: 'service-card primary',
    btnClass: 'btn btn-dark',
  },
  {
    title: 'Faiba Shop Outlets',
    description: 'Check out a shop near you that is open to buy MiFi, Router & Faiba simcard for the best offers & customer care in Nairobi & other major towns',
    button: 'FIND US',
    link: '/locate-us',
    cardClass: 'service-card dark',
    btnClass: 'btn btn-primary',
  },
];

function Services() {
  return (
    <section className="services-row">

      { services.map( (service) => (
        <div className={ service.cardClass } key={ service.title }>
          <div className="service-content">
            <h3 className="service-title"> {service.title} </h3>
            <p className="service-description"> {service.description} </p>
          </div>
          <Link className={ service.btnClass } to={ service.link }> {service.button} </Link>
        </div>
      )) }

    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />

        <Hero />
        <Services />

      <AppDownload />
      <Footer />
    </>
  );
} 