import styles from './FileInput.module.css';

type propTypes = {
  file?: any;
  onStoreFile: () => void;
};

function FileInput({ file, onStoreFile, ...rest }: propTypes) {
  return (
    <label className={styles['file-input']} htmlFor="file-input">
      <input
        className={styles['original-input']}
        id="file-input"
        type="file"
        {...rest}
      />
      Choose a file
    </label>
  );
}

export default FileInput;
