import { useRef } from 'react';
import styles from './ResultScreen.module.css';

type PropTypes = {
  imageURL: string;
};

function ResultScreen({ imageURL }: PropTypes) {
  /** Ref */
  const inputRef = useRef(null);

  const handleCopyLinkClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    inputRef.current.select();
    document.execCommand('copy');
  };

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
        <input
          className={styles['text-image-url']}
          value={imageURL}
          ref={inputRef}
        />
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
