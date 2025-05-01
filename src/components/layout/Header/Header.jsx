// src/components/layout/Header/Header.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <svg className={styles.logoIcon} viewBox="0 0 24 24" width="24" height="24">
              <path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M15.97,17.37c-1.2,0.63-2.63,0.96-4.22,0.88
                c-2.34-0.13-4.36-1.23-5.39-2.98C5.46,13.81,5,11.8,5,10.09V6.28l7-2.89l7,2.89v3.81c0,1.35-0.38,2.73-1.03,3.97
                C17.32,15.42,16.79,16.48,15.97,17.37z M11.5,14.35l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L11.5,14.35z"/>
            </svg>
            <h1>Australia Zoo</h1>
          </Link>
        </div>
        
        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu} aria-expanded={mobileMenuOpen} aria-label="Toggle navigation menu">
          <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.open : ''}`}></span>
        </button>
        
        <nav className={`${styles.navigation} ${mobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink 
                to="/" 
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                end
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/mammals" 
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Mammals
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/birds" 
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Birds
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/reptiles" 
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Reptiles
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/" 
                className={({ isActive }) => `${styles.navLink} ${styles.ctaLink} ${isActive ? styles.active : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan Your Visit
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;