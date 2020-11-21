import Dropzone from './Dropzone';
import FileInput from './FileInput';
import styles from './UploadScreen.module.css';

type PropTypes = {};

function UploadScreen(props: PropTypes) {
  const onStoreFile = () => {};

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
