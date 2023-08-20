import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({ onClose, isOpen, info }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__closed button" type="button" onClick={onClose}></button>
        <p className="popup__infotooltip_info">
          {info}
        </p>
      </div>
    </div>
  )
}

export default InfoTooltip