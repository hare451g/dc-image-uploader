import Head from 'next/head';
import ImageUploader from '../containers/ImageUploader';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.card}>
        <ImageUploader />
      </div>
    </div>
  );
}
