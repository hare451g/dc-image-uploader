import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Image Upload</h1>
    </div>
  );
}
