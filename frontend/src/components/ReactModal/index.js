import React, { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

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

export default function ReactModal({ modalIsOpen, closeModal, post }) {
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

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

          {post && post.file && (
            <a href={post.file.url} target="_blank">
              Anexo - {post.file.name}
            </a>
          )}

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

ReactModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number,
    file: PropTypes.object,
    title: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

ReactModal.defaultProps = {
  post: {},
};
