import styles from './ErrorScreen.module.css';

type PropTypes = {
  error: Error;
};

function ErrorScreen({ error }: PropTypes) {
  return (
    <>
      <img alt="error icon" height="42px" src="/error.svg" />
      <h1>Upload failed</h1>
      <p>Failed to upload message</p>
      <div className={styles['log-container']}>
        <p className={styles.log}>{error}</p>
      </div>
      <button className={styles['btn-retry']}>Retry</button>
    </>
  );
}

ErrorScreen.defaultProps = {
  error: 'Unhandled error occurred',
};

export default ErrorScreen;
