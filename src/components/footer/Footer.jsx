import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import tmdb from '../../assets/blue_square_2.svg';
import bg1 from '../../assets/samuel-regan-asante-unsplash.jpg';
import bg2 from '../../assets/tyson-moultrie-unsplash.jpg';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__content container">
            <div className="footer__content__logo">
                <div className="logo">
                  <h2>Developed with</h2>
                  <img src={tmdb} alt="" />
                </div>
            </div>
            <div className="footer__content__menus">
                <div className="footer__content__menu">
                    <Link to="/">Home</Link>
                    <Link to="/">Checklist</Link>
                    <Link to="/">Description</Link>
                    <Link to="/">About Us</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;