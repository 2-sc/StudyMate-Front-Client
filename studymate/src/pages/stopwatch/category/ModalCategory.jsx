import { useState } from 'react';
import styled from '@emotion/styled';
import ModalFrame from './ModalFrame';

function ModalCategory() {
  const [modalOpen, setModalOpen] = useState(false);

  const onShowModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Modal onClick={onShowModal}>Category</Modal>
      {modalOpen && <ModalFrame setShowModal={setModalOpen} />}
    </>
  );
}

export default ModalCategory;

const Modal = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #646464;
`;
