// src/pages/Mammals/MammalsPage.js - Fixed to use modal
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import AnimalDetail from '../../components/ui/AnimalDetail/AnimalDetail';
import animals from '../../data/animals';
import styles from './MammalsPage.module.css';

const MammalsPage = () => {
  const [activeAnimalId, setActiveAnimalId] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const mammals = animals.filter(animal => animal.group === 'mammals');

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

  const activeAnimal = mammals.find(animal => animal.id === activeAnimalId);

  if (isLoading) {
    return <div className={styles.loadingScreen}>Loading...</div>;
  }

  return (
    <div className={styles.mammalsPage}>
      <div className={styles.container}>
        <Sidebar 
          animals={mammals} 
          activeAnimalId={activeAnimalId} 
          onAnimalClick={handleAnimalClick}
          title="Mammals"
        />
        
        <div className={styles.content}>
          <div className={styles.groupInfo}>
            <h1>Australian Mammals</h1>
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <div className={styles.infoIcon}>🦘</div>
                <div className={styles.infoStats}>
                  <span>{mammals.length} Species</span>
                  <span>Unique Mammals</span>
                </div>
              </div>
              <p>
                Australia is home to some of the world's most unique mammals, many of which 
                are endemic to the continent. The country is known for its marsupials, 
                mammals that carry their young in a pouch, such as kangaroos, koalas, and wombats.
              </p>
              <p>
                Australia is also one of the only places where monotremes, egg-laying mammals 
                like the platypus and echidna, can be found. These remarkable creatures 
                showcase the diversity of mammalian evolution in Australia's isolated ecosystems.
              </p>
              <p>
                Select an animal from the sidebar or the gallery below to learn more about these fascinating species.
              </p>
            </div>
            
            <h2 className={styles.galleryTitle}>Mammal Gallery</h2>
            <div className={styles.imageGrid}>
              {mammals.map(mammal => (
                <div 
                  key={mammal.id} 
                  className={styles.imageItem}
                  onClick={() => handleAnimalClick(mammal.id)}
                >
                  <img src={mammal.imgSrc} alt={mammal.name} />
                  <span>{mammal.name}</span>
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

export default MammalsPage;