import { useState } from 'react';
import styles from './Dropzone.module.css';

type propTypes = {
  file?: any;
  onStoreFile: () => void;
};

type stateTypes = {
  status: 'idle' | 'inside' | 'outside';
};

function Dropzone({ file, onStoreFile }: propTypes) {
  const [status, setStatus] = useState<stateTypes['status']>('idle');

  return (
    <label className={styles.dropzone} htmlFor="file-input">
      <img src="/image.svg" alt="image uploader background" />
      <p>Drag &amp; Drop your image here</p>
    </label>
  );
}

export default Dropzone;
