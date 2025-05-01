// src/pages/AnimalDetailPage/AnimalDetailPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import animals from '../../data/animals';
import styles from './AnimalDetailPage.module.css';

const AnimalDetailPage = () => {
  const { id } = useParams();
  const animal = animals.find(a => a.id === parseInt(id));

  if (!animal) {
    return (
      <div className={styles.notFound}>
        <h2>Animal Not Found</h2>
        <p>Sorry, we couldn't find the animal you're looking for.</p>
        <Link to="/" className={styles.backButton}>Return to Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.animalDetailPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{animal.name}</h1>
          <Link to="/" className={styles.backButton}>Back to Home</Link>
        </div>
        
        <div className={styles.content}>
          <div className={styles.mainImage}>
            <img src={animal.imgSrc} alt={animal.name} />
          </div>
          
          <div className={styles.animalInfo}>
            <div className={styles.description}>
              <h2>About the {animal.name}</h2>
              <p>{animal.description}</p>
            </div>
            
            <div className={styles.details}>
              <div className={styles.detailSection}>
                <h3>Classification</h3>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Group:They're related to kangaroos and wallabies.</span>
                  <Link to={`/${animal.group}`} className={styles.groupLink}>
                    {animal.group.charAt(0).toUpperCase() + animal.group.slice(1)}
                  </Link>
                </div>
              </div>
              
              <div className={styles.detailSection}>
                <h3>Diet & Habitat</h3>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Diet:</span>
                  <span>{animal.diet}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Habitat: Quokka is dense riparian vegetation</span>
                  <span>{animal.habitat}</span>
                </div>
              </div>
              
              <div className={styles.detailSection}>
                <h3>Facts</h3>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Lifespan:10 years</span>
                  <span>{animal.lifespan}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Conservation Status:Vulnerable (Population decreasing)</span>
                  <span>{animal.conservation}</span>
                </div>
              </div>
            </div>
            
            <div className={styles.navigationLinks}>
              <Link to="/" className={styles.navLink}>Home</Link>
              <Link to={`/${animal.group}`} className={styles.navLink}>
                View All {animal.group.charAt(0).toUpperCase() + animal.group.slice(1)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailPage;