import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import FaibaMobile from './pages/faiba mobile/FaibaMobile';
import FaibaFixed from './pages/faiba fixed/FaibaFixed';
import SelfCare from './pages/Self Care/SelfCare';
import LocateUs from './pages/locate us/LocateUs';
import PataFaiba from './pages/pata faiba/PataFaiba';
import Terms from './pages/terms/Terms';

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mobile" element={<FaibaMobile />} />
        <Route path="/internet" element={<FaibaFixed />} />
        <Route path="/self-care" element={<SelfCare />} />
        <Route path="/locate-us" element={<LocateUs />} />
        <Route path="/pata-faiba" element={<PataFaiba />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

    </BrowserRouter>
  );
}