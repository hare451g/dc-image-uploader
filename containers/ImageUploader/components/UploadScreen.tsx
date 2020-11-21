import { useState } from 'react';
import Dropzone from './Dropzone';
import FileInput from './FileInput';
import styles from './UploadScreen.module.css';

type PropTypes = {};

function UploadScreen(props: PropTypes) {
  /** State definitions */
  const [files, setFiles] = useState<File>(null);

  /** Event handlers */
  const onStoreFile = (file: File) => {
    setFiles(file);
  };

  /** Render component */
  return (
    <>
      <h1 className={styles.title}>Upload your image</h1>
      <p className={styles.subtitle}>
        File should be image png / jpg / jpeg ...
      </p>
      <Dropzone onStoreFile={onStoreFile} />
      <div className={styles.footer}>
        <p> Or </p>
        <FileInput onStoreFile={onStoreFile} />
      </div>
    </>
  );
}

export default UploadScreen;
