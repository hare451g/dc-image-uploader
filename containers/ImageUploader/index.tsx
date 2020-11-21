import Dropzone from './components/Dropzone';
import FileInput from './components/FileInput';
import styles from './index.module.css';

type PropTypes = {};

function ImageUploader(props: PropTypes) {
  const onStoreFile = () => {};

  return (
    <div>
      <h1 className={styles.title}>Upload your image</h1>
      <p className={styles.subtitle}>
        File should be image png / jpg / jpeg ...
      </p>
      <Dropzone onStoreFile={onStoreFile} />
      <div className={styles.footer}>
        <p> Or </p>
        <FileInput onStoreFile={onStoreFile} />
      </div>
    </div>
  );
}

export default ImageUploader;
