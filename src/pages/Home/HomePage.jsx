import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import AnimalCard from '../../components/ui/AnimalCard/AnimalCard';
import AnimalDetail from '../../components/ui/AnimalDetail/AnimalDetail';
import animals from '../../data/animals';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [activeAnimalId, setActiveAnimalId] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Add a fade-in effect when the component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleAnimalClick = (id) => {
    if (activeAnimalId === id) {
      setActiveAnimalId(null);
    } else {
      setActiveAnimalId(id);
    }
  };

  const handleShowDetails = () => {
    setShowDetailModal(true);
  };

  const activeAnimal = animals.find(animal => animal.id === activeAnimalId);

  // Group animals by category for quick reference
  const animalsByCategory = {
    mammals: animals.filter(animal => animal.category === 'mammal').length,
    birds: animals.filter(animal => animal.category === 'bird').length,
    reptiles: animals.filter(animal => animal.category === 'reptile').length,
  };

  return (
    <div className={`${styles.homePage} ${fadeIn ? styles.fadeIn : ''}`}>
      <div className={styles.container}>
        <Sidebar 
          animals={animals} 
          activeAnimalId={activeAnimalId} 
          onAnimalClick={handleAnimalClick}
          title="All Animals"
        />
        
        <div className={styles.content}>
          {!activeAnimal ? (
            <div className={styles.welcome}>
              <h1>Welcome to Australia Zoo</h1>
              <p>
                Discover the amazing wildlife of Australia through our fascinating exhibition featuring mammals, birds, and reptiles from across the continent. 
                
              </p>
              <p>
                Explore the unique ecosystems and learn about the incredible adaptations 
                that have evolved in these animals. Select an animal from the sidebar to 
                learn more about it.
              </p>
              
              <div className={styles.categoryLinks}>
                <div className={styles.categoryCard}>
                  <h3>Mammals</h3>
                  <div className={styles.categoryIcon}>🦘</div>
                  <p>Discover {animalsByCategory.mammals} unique marsupials and monotremes native to Australia.</p>
                  <a href="/mammals" className={styles.categoryLink}>Explore Mammals</a>
                </div>
                <div className={styles.categoryCard}>
                  <h3>Birds</h3>
                  <div className={styles.categoryIcon}>🦜</div>
                  <p>Meet {animalsByCategory.birds} of Australia's diverse and colorful bird species.</p>
                  <a href="/birds" className={styles.categoryLink}>Explore Birds</a>
                </div>
                <div className={styles.categoryCard}>
                  <h3>Reptiles</h3>
                  <div className={styles.categoryIcon}>🦎</div>
                  <p>Learn about {animalsByCategory.reptiles} fascinating reptiles found across the Australian continent.</p>
                  <a href="/reptiles" className={styles.categoryLink}>Explore Reptiles</a>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.animalContent}>
              <AnimalCard animal={activeAnimal} />
              <button 
                className={styles.detailsButton}
                onClick={handleShowDetails}
              >
                View Detailed Information
              </button>
            </div>
          )}
        </div>
      </div>
      
      {showDetailModal && activeAnimal && (
        <AnimalDetail 
          animal={activeAnimal} 
          onClose={() => setShowDetailModal(false)} 
        />
      )}
    </div>
  );
};

export default HomePage;