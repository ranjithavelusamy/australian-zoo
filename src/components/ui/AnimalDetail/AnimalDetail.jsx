import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AnimalDetail.module.css';

const AnimalDetail = ({ animal, onClose }) => {
  if (!animal) return null;

  return (
    <div className={styles.animalDetailContainer}>
      <div className={styles.animalDetail}>
        <div className={styles.header}>
          <h2>{animal.name}</h2>
          {onClose && (
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
          )}
        </div>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={animal.imgSrc} alt={animal.name} />
          </div>
          
          <div className={styles.info}>
            <p className={styles.description}>{animal.description}</p>
            
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Group:</span>
                <Link to={`/${animal.group}`} className={styles.groupLink}>
                  {animal.group.charAt(0).toUpperCase() + animal.group.slice(1)}
                </Link>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.label}>Diet:</span>
                <span>{animal.diet}</span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.label}>Habitat:</span>
                <span>{animal.habitat}</span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.label}>Lifespan:</span>
                <span>{animal.lifespan}</span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.label}>Conservation Status:</span>
                <span>{animal.conservation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;