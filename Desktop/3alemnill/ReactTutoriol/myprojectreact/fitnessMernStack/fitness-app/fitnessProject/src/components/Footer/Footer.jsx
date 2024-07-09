import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <section className="page-footer">
      <div className="footer-contents">
        
        <div className="footer-col footer-col-1">
          <div className="footer-col-title">
            <h3>About</h3>
          </div>
          <div className="footer-col-desc">
            <p>Take the first step towards a healthier, stronger you with our unbeatable pricing plans. Let's sweat, achieve, and conquer together!.</p>
            <p> If You are brave , Join..</p>
            <span>321 Street, California, USA</span>
            <span>+012 123 45678</span>
            <span>info@fitness.com</span>
            <div className="footer-social-media">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <div className="footer-col footer-col-2">
          <div className="footer-col-title">
            <h3>Quick Links</h3>
          </div>
          <div className="footer-col-desc">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Trainers</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>
        </div>

        <div className="footer-col footer-col-3">
          <div className="footer-col-title">
            <h3>Newsletter</h3>
          </div>
          <div className="footer-col-desc">
            <p>At our dedicated bodybuilding gym, we help members achieve their physical goals through customized training programs and comprehensive guidance from specialized  coaches</p>
            <form className="newsletter">
              <input type="email" placeholder="Your Email" />
              <button className="btn newsletter-btn" type="submit">Subscribe</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
