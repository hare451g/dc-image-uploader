import { useState } from 'react';
import ProgressScreen from './components/ProgressScreen';
import ResultScreen from './components/ResultScreen';
import UploadScreen from './components/UploadScreen';

type PropTypes = {};

function ImageUploader(props: PropTypes) {
  // states
  const [status, setStatus] = useState<string>('idle');
  const [progress, setProgress] = useState<number>(0);
  const [imageURL, setImageURL] = useState<string>(null);

  switch (status) {
    case 'idle':
      return <UploadScreen />;

    case 'pending':
      return <ProgressScreen progress={progress} />;

    case 'resolved':
      return <ResultScreen imageURL={imageURL} />;

    case 'rejected':
      return <div>error</div>;

    default:
      return <div>something went wrong . . . </div>;
  }
}

export default ImageUploader;
