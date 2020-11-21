import { useState } from 'react';
import styles from './Dropzone.module.css';

type propTypes = {
  onFileChange: (file: File) => void;
};

type stateType = {
  status: 'idle' | 'inside' | 'outside';
  depth: number;
};

type dragEventHandlerType = (e: React.DragEvent<HTMLLabelElement>) => void;

function Dropzone({ onFileChange }: propTypes) {
  /** States definitions */
  const [state, setState] = useState<stateType>({
    status: 'idle',
    depth: 0,
  });

  /** Drag event handlers */
  const handleDragStart: dragEventHandlerType = (e) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.clearData();
  };

  const handleDragEnter: dragEventHandlerType = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setState({ ...state, depth: state.depth + 1 });
  };

  const handleDragLeave: dragEventHandlerType = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const deltaDepth = state.depth - 1;

    if (deltaDepth <= 0) {
      setState({
        depth: deltaDepth,
        status: 'outside',
      });
    } else {
      setState({
        ...state,
        depth: deltaDepth,
      });
    }
  };

  const handleDragOver: dragEventHandlerType = (e) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = 'copy';

    setState({ ...state, status: 'inside' });
  };

  const handleDrop: dragEventHandlerType = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onFileChange(e.dataTransfer.files[0]);

    setState({
      status: 'outside',
      depth: 0,
    });
  };

  /** Component Render */
  return (
    <label
      className={`${styles['dropzone']} ${state.status}`}
      htmlFor="file-input"
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src="/image.svg" alt="image uploader background" />
      <p>Drag &amp; Drop your image here</p>
    </label>
  );
}

export default Dropzone;
