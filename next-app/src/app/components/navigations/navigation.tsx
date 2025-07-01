'use client'
import "./navigation.css"
import "./hamburger.css"
import React, { useState } from 'react';

const Navigation = () => {
  // Toggle click button for mobile hamburger menu
  const [isClicked, setClick] = useState(false);

  // Check current click state set the opposite boolean when clicked
  const toggleClick = () => {
    setClick(prevClick => !prevClick)
    console.log(isClicked);
  }

  return ( 
    <nav className="navbar">
      <div className="navbar-box">
        <a href="http://localhost:3000" className="navbar-company-name">
          Encore Studio
        </a>

        <ol className="desktop-nav-lists">
          <li className="desktop-nav-list">
            <a href="#showcasesSection" className="nav-text">
              Our Work
            </a>
          </li>

          <li className="desktop-nav-list">
            <a href="#contactsSection" className="nav-text">
              Contact
            </a>
          </li>

          <li className="desktop-nav-list">
            <a href="#pricesSection" className="nav-text">
              Pricing
            </a>
          </li>
        </ol>

        <div className="hamburger-box" onClick={toggleClick}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </div>

        <ol className="mobile-nav-lists" style={{display : isClicked ? "block" : "none"}}>
          
          <li className="mobile-nav-list">
            <a href="#showcasesSection" className="nav-text">
              Our Work
            </a>
          </li>

                    <li className="mobile-nav-list">
            <a href="#pricesSection" className="nav-text">
              Pricing
            </a>
          </li>

          <li className="mobile-nav-list">
            <a href="#contactsSection" className="nav-text">
              Contact
            </a>
          </li>

        </ol>
    </nav>
  );
};

export default Navigation;