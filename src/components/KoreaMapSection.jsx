import React from 'react';
import mapImage from '../assets/Korea.png';
import { useNavigate } from 'react-router-dom';

import './KoreaMapSection.css';

function KoreaMapSection() {
    const navigate = useNavigate();

      const handleMarkerClick = (region) => {
    navigate(`/koreainfo?region=${region}`); 
  };
  return (
    <div className="map-container">
      <img src={mapImage} alt="한국 지도" className="map-image" />

      <div className="marker" style={{ top: '17%', left: '33%' }} onClick = {() => handleMarkerClick("seoul")} />
      <div className="marker" style={{ top: '50%', left: '84%' }} onClick = {() => handleMarkerClick("gyeongju")} />
      <div className="marker" style={{ top: '61%', left: '78%' }} onClick = {() => handleMarkerClick("busan")} />
      <div className="marker" style={{ top: '91%', left: '25%' }} onClick = {() => handleMarkerClick("jeju")} />
    </div>
  );
}

export default KoreaMapSection;