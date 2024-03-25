import React, { useState } from "react";
import UploadSection from "../uploadSection"; // Adjust the import path as needed
import "./styles.css"; 

const HomePage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <div>
      <div className="navbar">
        <span className="navbarText">Career Guru</span>
      </div>
      <div className="imageContainer">
        {/* <img 
          src={require('../../assets/juicy-woman-is-looking-for-perfect-candidate.gif')}
          className="topImage" 
        /> */}
      </div>
      <div className="scrollView1">
        <UploadSection
          title="Upload CV"
          description="You can upload a CV by importing or scanning with your camera"
          onUploadPress={openModal}
        />
      </div>
      <div className="scrollView2">
        <UploadSection
          title="Upload Job Spec"
          description="You can upload a Job Spec by importing or scanning with your camera"
          onUploadPress={openModal}
        />
      </div>
      <div className="button">
        <button onClick={() => setModalVisible(true)}>Generate</button>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="centeredView">
          <div className="modalView">
            <span className="modalText">Choose an option</span>
            {/* Add your modal options here */}
            <button onClick={() => setModalVisible(!modalVisible)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
