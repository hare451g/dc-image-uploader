import { useState } from 'react';

// Feature Components
import ErrorScreen from './components/ErrorScreen';
import ProgressScreen from './components/ProgressScreen';
import ResultScreen from './components/ResultScreen';
import UploadScreen from './components/UploadScreen';

// feature definition
function ImageUploader() {
  // states definitions
  const [status, setStatus] = useState<string>('idle');
  const [progress, setProgress] = useState<number>(0);
  const [imageURL, setImageURL] = useState<string>(null);
  const [error, setError] = useState<Error>(undefined);

  // Feature screen routing
  switch (status) {
    case 'idle':
      return <UploadScreen />;

    case 'pending':
      return <ProgressScreen progress={progress} />;

    case 'resolved':
      return <ResultScreen imageURL={imageURL} />;

    case 'rejected':
    default:
      return <ErrorScreen error={error} />;
  }
}

export default ImageUploader;
