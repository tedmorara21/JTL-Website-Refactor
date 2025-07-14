import React, { useState } from 'react';
import './Hero.css';

const slides = [
  {
    img: '/hero-slide-1.jpg',
    alt: 'Faiba Home',
    link: 'https://jtl.co.ke/pata-faiba',
  },
  {
    img: '/hero-slide-2.jpg',
    alt: 'Faiba Home',
    link: 'https://jtl.co.ke/pata-faiba',
  },
  {
    img: '/hero-slide-3.jpg',
    alt: 'Faiba Home',
    link: 'https://jtl.co.ke/pata-faiba',
  },
  {
    img: '/hero-slide-4.jpg',
    alt: 'Faiba Business',
    link: 'https://jtl.co.ke/pata-faiba',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        <a href={slides[current].link} target="_blank" rel="noopener noreferrer">
          <img src={slides[current].img} alt={slides[current].alt} className="carousel-image" />
        </a>
        <button className="carousel-arrow left" onClick={prevSlide} aria-label="Previous Slide">&#8592;</button>
        <button className="carousel-arrow right" onClick={nextSlide} aria-label="Next Slide">&#8594;</button>
        <div className="carousel-indicators">
          {slides.map((_, idx) => (
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