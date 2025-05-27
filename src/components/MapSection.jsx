import React from 'react';
import mapImage from '../assets/worldMap.png';
import { useNavigate } from 'react-router-dom';

import './MapSection.css';

function MapSection() {
    const navigate = useNavigate();
  return (
    <div className="map-container">
      <h1 className = "highlight-title">어디로 떠나볼까요?</h1>
      <img src={mapImage} alt="세계 지도" className="map-image" />

      <div className="marker" style={{ top: '45%', left: '20%' }} onClick={() => navigate('/china')} />
      <div className="marker" style={{ top: '45%', left: '57%' }} onClick={() => navigate('/korea')} />
      <div className="marker" style={{ top: '48%', left: '75%' }} onClick={() => navigate('/japan')} />

    </div>
  );
}

export default MapSection;