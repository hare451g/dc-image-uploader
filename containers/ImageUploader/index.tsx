import axios from 'axios';
import { useEffect, useState } from 'react';

// Feature Components
import ErrorScreen from './components/ErrorScreen';
import ProgressScreen from './components/ProgressScreen';
import ResultScreen from './components/ResultScreen';
import UploadScreen from './components/UploadScreen';

type requestStateType = {
  statusType: 'idle' | 'pending' | 'resolved' | 'rejected';
  data: {
    file: {
      size: number;
      name: string;
      type: string;
      path: string;
    };
    messages: string;
  };
  error: Error;
};

/** Initial state */
const initialRequestState: requestStateType = {
  statusType: 'idle',
  data: {
    file: {
      size: 0,
      name: null,
      type: null,
      path: null,
    },
    messages: null,
  },
  error: null,
};

// feature definition
function ImageUploader() {
  // states definitions
  const [file, setFile] = useState<File>(undefined);
  const [requestState, setRequestState] = useState<requestStateType>(
    initialRequestState
  );
  const [progress, setProgress] = useState<number>(0);

  const handleStoreFile = (fileInput: File) => {
    setFile(fileInput);
  };

  const handleRetry = () => {
    setRequestState({ ...initialRequestState });
  };

  const onUploadProgress = ({ loaded, total }: ProgressEvent) => {
    const current = Math.round(loaded * 100) / total;
    if (current >= 100) {
      setProgress(100);
    } else {
      setProgress(current);
    }
  };

  useEffect(() => {
    const performUpload = async (fileToUpload: File) => {
      try {
        setRequestState({ ...requestState, statusType: 'pending' });

        const form = new FormData();
        form.append('file', fileToUpload);

        const response = await axios.post('/api/image-upload/', form, {
          onUploadProgress,
          headers: {
            ['Content-Type']: 'multipart/formdata',
          },
        });

        setRequestState({
          ...requestState,
          statusType: 'resolved',
          data: response.data,
        });
      } catch (error) {
        setRequestState({
          ...requestState,
          statusType: 'rejected',
          error: error.message,
        });
      }
    };

    if (requestState.statusType === 'idle' && file) {
      performUpload(file);
    }
  }, [file]);

  // Feature screen routing
  switch (requestState.statusType) {
    case 'idle':
      return <UploadScreen onStoreFile={handleStoreFile} />;

    case 'pending':
      return <ProgressScreen progress={progress} />;

    case 'resolved':
      return <ResultScreen imageURL={requestState.data.file.path} />;

    case 'rejected':
    default:
      return <ErrorScreen error={requestState.error} onRetry={handleRetry} />;
  }
}

export default ImageUploader;
