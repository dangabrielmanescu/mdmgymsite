import React from "react";
import './Contact.css';
import map from '../../Dependecies/map.png'

function ContactUs () {
return (
    <div className="contact-us">
        <div className="map " >
            <img src= {map} alt="My map" style={{ width: '1150px', height: 'auto' }}></img>
        </div>
    </div>
)


};

export default ContactUs;