import React, { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, ModalBody } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    minWidth: '500px',
    maxHeight: '500px',
    transform: 'translate(-50%, -50%)',
    overflow: 'scroll',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.6)',
  },
};

export default function HelpModal({ modalIsOpen, closeModal, post }) {
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  useEffect(() => {
    if (post) {
      console.tron.log(post.content);
    }
  }, [post]);

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalBody>
          <h1>{post ? post.title : ''}</h1>
          <strong>{post ? post.type.title : ''}</strong>

          <p>{post ? post.content : ''}</p>

          <Link to="/posts">Anexo</Link>

          <div>
            <button type="button" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </ModalBody>
      </Modal>
    </Container>
  );
}

HelpModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  post: PropTypes.func.isRequired,
};
