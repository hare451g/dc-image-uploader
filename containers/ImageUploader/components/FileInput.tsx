import styles from './FileInput.module.css';

type propTypes = {
  onStoreFile: (file: File) => void;
};

function FileInput({ onStoreFile, ...rest }: propTypes) {
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStoreFile(e.target.files[0]);
  };

  return (
    <label className="file-input" htmlFor="file-input">
      <input
        className={styles['original-input']}
        id="file-input"
        type="file"
        onChange={onFileChange}
        {...rest}
      />
      Choose a file
    </label>
  );
}

export default FileInput;
