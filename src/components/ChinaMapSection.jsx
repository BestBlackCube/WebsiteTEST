import React from 'react';
import mapImage from '../assets/China.png';
import { useNavigate } from 'react-router-dom';

import './ChinaMapSection.css';

function ChinaMapSection() {
    const navigate = useNavigate();
    const handleMarkerClick = (region) => {
    navigate(`/chinainfo?region=${region}`); 
    };
  return (
    <div className="map-container">
      <img src={mapImage} alt="중국 지도" className="map-image" />

      <div className="marker" style={{ top: '1%', left: '72%' }} onClick = {() => handleMarkerClick("beijing")} />
      <div className="marker" style={{ top: '46%', left: '94%' }} onClick = {() => handleMarkerClick("shanghai")} />
      <div className="marker" style={{ top: '31%', left: '41%' }} onClick = {() => handleMarkerClick("xian")} />
        <div className="marker" style={{ top: '75%', left: '46%' }} onClick = {() => handleMarkerClick("guilin")} />

    </div>
  );
}

export default ChinaMapSection;