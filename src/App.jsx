import { Routes, Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";

import ChinaPage from './pages/ChinaPage.jsx';
import KoreaPage from './pages/KoreaPage.jsx';
import JapanPage from './pages/JapanPage.jsx';

import Koreainfo from "./pages/infopages/koreainfo.jsx";
import Japaninfo from "./pages/infopages/japaninfo.jsx";
import Chinainfo from "./pages/infopages/chinainfo.jsx";

import MapSection from "./components/MapSection.jsx";

import "./App.css";

function App() {
  
  return (
    <div className = "app-container">

      <Routes>
        <Route path="/" element={<><Navbar /><MapSection /><Home /></>} />
        <Route path="/china" element={<ChinaPage />} />
        <Route path="/korea" element={<KoreaPage />} />
        <Route path="/japan" element={<JapanPage />} />

        <Route path="/koreainfo" element={<Koreainfo />} />
        <Route path="/japaninfo" element={<Japaninfo />} />
        <Route path="/chinainfo" element={<Chinainfo />} />
      </Routes>
    </div>
  );
}

export default App;