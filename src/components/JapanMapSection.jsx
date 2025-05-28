import React from 'react';
import mapImage from '../assets/Japan.png';
import { useNavigate } from 'react-router-dom';

import './JapanMapSection.css';

function JapanMapSection() {
    const navigate = useNavigate();
    const handleMarkerClick = (region) => {
    navigate(`/japaninfo?region=${region}`); 
    };
  return (
    <div className="map-container">
      <img src={mapImage} alt="일본 지도" className="map-image" />

      <div className="marker" style={{ top: '61%', left: '71%' }} onClick = {() => handleMarkerClick("tokyo")} />
      <div className="marker" style={{ top: '65%', left: '45%' }} onClick = {() => handleMarkerClick("kyoto")} />
      <div className="marker" style={{ top: '69%', left: '44%' }} onClick = {() => handleMarkerClick("osaka")} />
      <div className="marker" style={{ top: '1%', left: '81%' }} onClick = {() => handleMarkerClick("sapporo")} />

    </div>
  );
}

export default JapanMapSection;