import React from 'react';
import styles from './styles/error-screen.module.css';

const ErrorScreen = () => {
  return (
    <div className={styles["error-container"]}>
      <h1 className={styles["error-header"]}>
        ERROR: SOMETHING WENT WRONG
      </h1>
      <p className={styles["error-message"]}>
        We're sorry, but there was an error processing your request.
      </p>
      <button className={styles["error-button"]} onClick={() => window.location.reload()}>
        OK
      </button>
    </div>
  );
}

export default ErrorScreen;