import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Blue from '../Blue/Blue';
import Red from '../Red/Red';
import Yellow from '../Yellow/Yellow';
import Green from '../Green/Green';

function Main() {
  return (
    <div id="main-section">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blue" element={<Blue />} />
      <Route path="/red" element={<Red />} />
      <Route path="/yellow" element={<Yellow />} />
      <Route path="/green" element={<Green />} />
    </Routes>
    </div>
  )
}

export default Main