import React from 'react';
import './FaibaModal.css';

export default function FaibaModal( {onClose} ) {
  return (
    <div className="faiba-modal-overlay show">
      <div className="faiba-modal-content">
        <div className="faiba-modal-tabs">
          <button className="modal-tab"> New Customer </button>
          <button className="modal-tab"> Existing Customer </button>
          <button className="modal-close" onClick={onClose}> ✖ </button>
        </div>
        <div className="faiba-modal-buttons">
          <button className="modal-action green" onClick={ () => window.open('https://getfaiba.com', '_blank') }> GET SIM CARD </button>
          <button className="modal-action black" onClick={ () => window.location.href = '/self-care'} > BUY NOW </button>
        </div>
      </div>
    </div>
  );
}
