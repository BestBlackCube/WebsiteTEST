import React from 'react';
import mapImage from '../assets/Japan.png';
import { useNavigate } from 'react-router-dom';

import './JapanMapSection.css';

function KoreaMapSection() {
    const navigate = useNavigate();
  return (
    <div className="map-container">
      <img src={mapImage} alt="일본 지도" className="map-image" />

      <div className="marker" style={{ top: '61%', left: '71%' }} onClick={() => navigate('/japan')} />
      <div className="marker" style={{ top: '65%', left: '45%' }} onClick={() => navigate('/japan')} />
      <div className="marker" style={{ top: '69%', left: '44%' }} onClick={() => navigate('/japan')} />
        <div className="marker" style={{ top: '1%', left: '81%' }} onClick={() => navigate('/japan')} />

    </div>
  );
}

export default KoreaMapSection;