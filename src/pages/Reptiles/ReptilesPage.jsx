// src/pages/Reptiles/ReptilesPage.js - Enhanced component with modal
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import AnimalDetail from '../../components/ui/AnimalDetail/AnimalDetail';
import animals from '../../data/animals';
import styles from './ReptilesPage.module.css';

const ReptilesPage = () => {
  const [activeAnimalId, setActiveAnimalId] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const reptiles = animals.filter(animal => animal.group === 'reptiles');

  // Simulate loading to show animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAnimalClick = (id) => {
    setActiveAnimalId(id);
    setShowDetailModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailModal(false);
  };

  const activeAnimal = reptiles.find(animal => animal.id === activeAnimalId);

  if (isLoading) {
    return <div className={styles.loadingScreen}>Loading...</div>;
  }

  return (
    <div className={styles.reptilesPage}>
      <div className={styles.container}>
        <Sidebar 
          animals={reptiles} 
          activeAnimalId={activeAnimalId} 
          onAnimalClick={handleAnimalClick}
          title="Reptiles"
        />
        
        <div className={styles.content}>
          <div className={styles.groupInfo}>
            <h1>Australian Reptiles</h1>
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <div className={styles.infoIcon}>🦎</div>
                <div className={styles.infoStats}>
                  <span>{reptiles.length} Species</span>
                  <span>Diverse Reptiles</span>
                </div>
              </div>
              <p>
                Australia is home to an extraordinary variety of reptiles, with more than 1,000 
                species across the continent. The country's warm climate and diverse ecosystems 
                provide ideal conditions for reptiles to thrive.
              </p>
              <p>
                From the massive saltwater crocodile to the iconic frilled-neck lizard and 
                various species of skinks, Australian reptiles have adapted to survive in 
                everything from arid deserts to tropical rainforests. Australia also hosts 
                some of the world's most venomous snakes, a testament to the unique evolutionary 
                pressures of the continent.
              </p>
              <p>
                Select a reptile from the sidebar or the gallery below to learn more about these fascinating species.
              </p>
            </div>
            
            <h2 className={styles.galleryTitle}>Reptile Gallery</h2>
            <div className={styles.imageGrid}>
              {reptiles.map(reptile => (
                <div 
                  key={reptile.id} 
                  className={styles.imageItem}
                  onClick={() => handleAnimalClick(reptile.id)}
                >
                  <img src={reptile.imgSrc} alt={reptile.name} />
                  <span>{reptile.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {showDetailModal && activeAnimal && (
        <AnimalDetail 
          animal={activeAnimal} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default ReptilesPage;