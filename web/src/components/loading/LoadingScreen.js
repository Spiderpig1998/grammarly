import React from 'react';
import styles from './styles/loadingScreen.module.css'

function LoadingScreen() {
  return (
    <div className={styles["loading-screen"]}>
      <div className={styles["loading-spinner"]}></div>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingScreen;