import styles from './ResultScreen.module.css';

type PropTypes = {
  imageURL: string;
};

function ResultScreen({ imageURL }: PropTypes) {
  const handleCopyLinkClick = () => {};

  return (
    <div className={styles.container}>
      <img alt="success icon" src="/success.svg" height="42px" />
      <h1 className={styles['title']}>Uploaded Successfully</h1>
      <div className={styles['uploaded-image-container']}>
        <img
          alt="uploaded image preview"
          className={styles['uploaded-image-preview']}
          src={imageURL}
        />
      </div>

      <div className={styles['image-url-container']}>
        <span className={styles['text-image-url']}>{imageURL}</span>
        <button
          className={styles['btn-copy-link']}
          onClick={handleCopyLinkClick}
        >
          Copy link
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;
