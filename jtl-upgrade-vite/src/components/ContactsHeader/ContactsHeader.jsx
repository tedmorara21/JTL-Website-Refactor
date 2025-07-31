import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faPaperPlane, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './ContactsHeader.css';

export default function ContactsHeader() {
    return (
        <div className="contacts-bar">
            <a href="tel:0747585100" className="contact-link">
                <span><FontAwesomeIcon icon={faMobileAlt} /> 0747 585 100</span>
            </a>

            <a href="tel:0208405100" className="contact-link">
                <span><FontAwesomeIcon icon={faMobileAlt} /> 020 8405 100</span>
            </a>

            <a href="mailto:csc@jtl.co.ke" className="contact-link">
                <span><FontAwesomeIcon icon={faPaperPlane} /> csc@jtl.co.ke</span>
            </a>

            <a href="mailto:csc@jtl.co.ke" className="contact-link">
                <span><FontAwesomeIcon icon={faMapMarkerAlt} /> Jamii Towers</span>
            </a>
      </div>
    )
}
