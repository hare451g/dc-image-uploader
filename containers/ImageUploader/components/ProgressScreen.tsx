import { useState } from 'react';
import styles from './ProgressScreen.module.css';

type PropTypes = {
  progress: number;
};

const ProgressScreen = ({ progress }: PropTypes) => (
  <>
    <h1 className={styles.title}>Uploading...</h1>
    <div className={styles['progress-bar']}>
      <div className={styles.progress} style={{ width: `${progress}%` }} />
    </div>
  </>
);

export default ProgressScreen;
