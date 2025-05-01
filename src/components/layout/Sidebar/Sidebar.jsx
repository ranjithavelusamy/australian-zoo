// src/components/layout/Sidebar/Sidebar.js
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ animals, activeAnimalId, onAnimalClick, title }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2>{title}</h2>
      </div>
      <nav className={styles.sidebarNav}>
        <ul className={styles.animalList}>
          {animals.map(animal => (
            <li 
              key={animal.id} 
              className={`${styles.animalItem} ${activeAnimalId === animal.id ? styles.active : ''}`}
            >
              <button 
                className={styles.animalLink}
                onClick={() => onAnimalClick(animal.id)}
                aria-current={activeAnimalId === animal.id ? 'page' : undefined}
              >
                <span className={styles.animalName}>{animal.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;