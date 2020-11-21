import styles from './FileInput.module.css';

type propTypes = {
  onFileChange: (file: File) => void;
};

function FileInput({ onFileChange, ...rest }: propTypes) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFileChange(e.target.files[0]);
  };

  return (
    <label className="file-input" htmlFor="file-input">
      <input
        className={styles['original-input']}
        id="file-input"
        type="file"
        onChange={handleFileChange}
        {...rest}
      />
      Choose a file
    </label>
  );
}

export default FileInput;
