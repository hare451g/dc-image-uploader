import { useState } from 'react';
import UploadScreen from './components/UploadScreen';

type PropTypes = {};

function ImageUploader(props: PropTypes) {
  // states
  const [status, setStatus] = useState<string>('idle');

  switch (status) {
    case 'idle':
      return <UploadScreen />;

    default:
      return <div>something went wrong . . . </div>;
  }
}

export default ImageUploader;
