import { useState } from 'react';

/** Components */
import Dropzone from './Dropzone';
import FileInput from './FileInput';

/** Styles */
import styles from './UploadScreen.module.css';

type PropTypes = {
  onStoreFile: (fileInput: File) => void;
};

const MAX_FILE_SIZE = 1000 * 100 * 5; // 500kb

const VALID_IMG_FORMATS = [
  'image/gif',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/svg',
  'image/svg+xml',
  'image/webp',
];

function UploadScreen({ onStoreFile }: PropTypes) {
  /** State definitions */
  const [error, setError] = useState<string>(null);

  /** Event handlers */
  const handleDismissError = () => {
    setError(null);
  };

  const handleFileChange = (file: File) => {
    handleDismissError();

    if (VALID_IMG_FORMATS.indexOf(file.type) < 0) {
      setError(
        `Invalid file format ${file.type} ` +
          +'please make sure your image is one of these types' +
          VALID_IMG_FORMATS.join(', ')
      );
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(
        'Max file size exceeded (500kb), ' +
          'please make sure your image size is under 500 kilobytes'
      );
      return;
    }

    onStoreFile(file);
  };

  /** Render component */
  return (
    <>
      <h1 className={styles.title}>Upload your image</h1>
      <p className={styles.subtitle}>
        File should be image png / jpg / jpeg ...
      </p>
      <Dropzone onFileChange={handleFileChange} />
      <div className={styles.footer}>
        <p> Or </p>
        <FileInput onFileChange={handleFileChange} />
      </div>
      {error && (
        <p className={styles['error-messages']} onClick={handleDismissError}>
          {error}
        </p>
      )}
    </>
  );
}

export default UploadScreen;
