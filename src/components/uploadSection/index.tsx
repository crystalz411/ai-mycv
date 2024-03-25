import React from 'react';
import './styles.css'; // Ensure this path matches your actual CSS file location

interface UploadSectionProps {
  title: string;
  description: string;
  onUploadPress: () => void; // Function to trigger on button click
}

const UploadSection: React.FC<UploadSectionProps> = ({ title, description, onUploadPress }) => {
  return (
    <div className="uploadSection">
      <h2 className="uploadText">{title}</h2>
      <p className="uploadSubtext">{description}</p>
      <div className="optionButtons">
        <button className="optionButton" onClick={onUploadPress}>
          Upload File
        </button>
      </div>
    </div>
  );
};

export default UploadSection;
