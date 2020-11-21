import styles from './index.module.css';

type PropTypes = {};

function ImageUploader(props: PropTypes) {
  return (
    <div>
      <h1 className={styles.title}>Upload your image</h1>
      <p className={styles.subtitle}>
        File should be image png / jpg / jpeg ...
      </p>
      <div className={styles['dropzone_container']} />
      <div className={styles.footer}>
        <p> Or </p>
        <div className={styles['fileinput_container']} />
      </div>
    </div>
  );
}

export default ImageUploader;
