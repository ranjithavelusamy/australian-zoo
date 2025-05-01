// src/components/layout/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Visit Us</h3>
            <address className={styles.addressBlock}>
              <p>123 Wildlife Way</p>
              <p>Sydney, NSW 2000</p>
              <p>Australia</p>
            </address>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Opening Hours</h3>
            <div className={styles.hoursBlock}>
              <p>Daily: <span className={styles.highlight}>9:00 AM - 5:00 PM</span></p>
              <p>Last entry: <span className={styles.highlight}>4:00 PM</span></p>
            </div>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.contactBlock}>
              <p>
                <span className={styles.contactLabel}>Phone:</span> 
                <a href="tel:+61212345678" className={styles.contactLink}>+61 2 1234 5678</a>
              </p>
              <p>
                <span className={styles.contactLabel}>Email:</span> 
                <a href="mailto:info@australiazoo.com" className={styles.contactLink}>info@australiazoo.com</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M18,2h-3c-2.8,0-5,2.2-5,5v3H7v4h3v8h4v-8h3l1-4h-4V7c0-0.6,0.4-1,1-1h3V2z"/>
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M22,5.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C8.5,8.7,5.5,7.1,3.5,4.8C3.2,5.4,3,6.1,3,6.8c0,1.4,0.7,2.7,1.8,3.4C4.2,10.2,3.6,10,3,9.7v0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C20.8,7.3,21.5,6.6,22,5.8z"/>
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12,2.2c3.2,0,3.6,0,4.9,0.1c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.9s0,3.6-0.1,4.9c-0.1,1.2-0.2,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4c-1.3,0.1-1.6,0.1-4.9,0.1s-3.6,0-4.9-0.1c-1.2-0.1-1.8-0.2-2.2-0.4c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4c-0.2-0.4-0.4-1.1-0.4-2.2c-0.1-1.3-0.1-1.6-0.1-4.9s0-3.6,0.1-4.9c0.1-1.2,0.2-1.8,0.4-2.2c0.2-0.6,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.2,8.8,2.2,12,2.2z M12,0C8.7,0,8.3,0,7.1,0.1c-1.3,0.1-2.2,0.3-3,0.6c-0.8,0.3-1.5,0.7-2.1,1.4C1.3,2.8,0.9,3.5,0.6,4.3C0.3,5.1,0.1,6,0.1,7.3C0,8.5,0,8.9,0,12.2s0,3.7,0.1,4.9c0.1,1.3,0.3,2.2,0.6,3c0.3,0.8,0.7,1.5,1.4,2.1c0.7,0.7,1.4,1.1,2.1,1.4c0.8,0.3,1.7,0.5,3,0.6c1.2,0.1,1.6,0.1,4.9,0.1s3.7,0,4.9-0.1c1.3-0.1,2.2-0.3,3-0.6c0.8-0.3,1.5-0.7,2.1-1.4c0.7-0.7,1.1-1.4,1.4-2.1c0.3-0.8,0.5-1.7,0.6-3c0.1-1.2,0.1-1.6,0.1-4.9s0-3.7-0.1-4.9c-0.1-1.3-0.3-2.2-0.6-3c-0.3-0.8-0.7-1.5-1.4-2.1c-0.7-0.7-1.4-1.1-2.1-1.4c-0.8-0.3-1.7-0.5-3-0.6C15.7,0,15.3,0,12,0z M12,5.9c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.9,12,5.9z M12,16.2c-2.2,0-4.1-1.8-4.1-4.1s1.8-4.1,4.1-4.1s4.1,1.8,4.1,4.1S14.2,16.2,12,16.2z M18.5,4.2c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4S19.3,4.2,18.5,4.2z"/>
            </svg>
          </a>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Australia Zoo. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>Privacy Policy</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;