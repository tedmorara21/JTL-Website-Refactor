import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import FaibaMobile from './pages/faiba mobile/FaibaMobile';
import FaibaFixed from './pages/faiba fixed/FaibaFixed';
import SelfCare from './pages/Self Care/SelfCare';
import LocateUs from './pages/locate us/LocateUs';

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faiba-mobile" element={<FaibaMobile />} />
        <Route path="/faiba-fixed" element={<FaibaFixed />} />
        <Route path="/self-care" element={<SelfCare />} />
        <Route path="/locate-us" element={<LocateUs />} />
      </Routes>

    </BrowserRouter>
  );
}