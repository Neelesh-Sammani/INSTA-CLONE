import React, { useState } from 'react';
import Modal from 'react-modal';
import './ThreeDotsMenu.css'; // Assuming you have a CSS file for styling

function ThreeDotsMenu() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="menu-container">
      <div className="menu-icon" onClick={toggleModal}>
        ...
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <ul className="modal-options">
          <li>Report</li>
          <li>Unfollow</li>
          <li>Add to favourites</li>
          <li>Go to post</li>
          <li>Share to...</li>
          <li>Copy link</li>
          <li>Embed</li>
          <li>About this account</li>
          <li onClick={closeModal}>Cancel</li>
        </ul>
      </Modal>
    </div>
  );
}

export default ThreeDotsMenu;
