import React from 'react';
import mapImage from '../assets/Korea.png';
import { useNavigate } from 'react-router-dom';

import './KoreaMapSection.css';

function KoreaMapSection() {
    const navigate = useNavigate();
  return (
    <div className="map-container">
      <img src={mapImage} alt="한국 지도" className="map-image" />

      <div className="marker" style={{ top: '21%', left: '38%' }} onClick={() => navigate('/korea')} />
      <div className="marker" style={{ top: '50%', left: '84%' }} onClick={() => navigate('/korea')} />
      <div className="marker" style={{ top: '61%', left: '78%' }} onClick={() => navigate('/korea')} />
        <div className="marker" style={{ top: '91%', left: '25%' }} onClick={() => navigate('/korea')} />

    </div>
  );
}

export default KoreaMapSection;