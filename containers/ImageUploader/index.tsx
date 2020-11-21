import { useState } from 'react';
import ProgressScreen from './components/ProgressScreen';
import UploadScreen from './components/UploadScreen';

type PropTypes = {};

function ImageUploader(props: PropTypes) {
  // states
  const [status, setStatus] = useState<string>('idle');
  const [progress, setProgress] = useState<number>(0);

  switch (status) {
    case 'idle':
      return <UploadScreen />;

    case 'pending':
      return <ProgressScreen progress={progress} />;

    default:
      return <div>something went wrong . . . </div>;
  }
}

export default ImageUploader;
