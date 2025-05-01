// src/pages/Birds/BirdsPage.js - Fixed to use modal
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import AnimalDetail from '../../components/ui/AnimalDetail/AnimalDetail';
import animals from '../../data/animals';
import styles from './BirdsPage.module.css';

const BirdsPage = () => {
  const [activeAnimalId, setActiveAnimalId] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const birds = animals.filter(animal => animal.group === 'birds');

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

  const activeAnimal = birds.find(animal => animal.id === activeAnimalId);

  if (isLoading) {
    return <div className={styles.loadingScreen}>Loading...</div>;
  }

  return (
    <div className={styles.birdsPage}>
      <div className={styles.container}>
        <Sidebar 
          animals={birds} 
          activeAnimalId={activeAnimalId} 
          onAnimalClick={handleAnimalClick}
          title="Birds"
        />
        
        <div className={styles.content}>
          <div className={styles.groupInfo}>
            <h1>Australian Birds</h1>
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <div className={styles.infoIcon}>🦜</div>
                <div className={styles.infoStats}>
                  <span>{birds.length} Species</span>
                  <span>Avian Diversity</span>
                </div>
              </div>
              <p>
                Australia's bird population is incredibly diverse, featuring over 800 species 
                of birds, many of which are endemic to the continent. From the iconic kookaburra 
                to the colorful galah, Australian birds have adapted to various habitats across 
                the continent.
              </p>
              <p>
                Many Australian birds have evolved in isolation from other continents, resulting 
                in unique characteristics and behaviors. Large flightless birds like the emu, 
                various species of colorful parrots, and the remarkable lyrebird with its 
                mimicking abilities are all part of Australia's stunning avian diversity.
              </p>
              <p>
                Select a bird from the sidebar or the gallery below to learn more about these fascinating species.
              </p>
            </div>
            
            <h2 className={styles.galleryTitle}>Bird Gallery</h2>
            <div className={styles.imageGrid}>
              {birds.map(bird => (
                <div 
                  key={bird.id} 
                  className={styles.imageItem}
                  onClick={() => handleAnimalClick(bird.id)}
                >
                  <img src={bird.imgSrc} alt={bird.name} />
                  <span>{bird.name}</span>
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

export default BirdsPage;