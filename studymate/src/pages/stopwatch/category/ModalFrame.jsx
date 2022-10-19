import { useState } from 'react';
import styled from '@emotion/styled';
import Box from '../../../components/common/Box';
import Category from './Category';

function ModalFrame({ setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Frame>
      <Background />
      <Contents size={[360, 500]}>
        <Category closeModal={closeModal} />
      </Contents>
    </Frame>
  );
}

export default ModalFrame;

const Frame = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 997;
  transition: all 0.25s;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 998;
  /* background-color: rgba(0, 0, 0, 0.7); */
  background: rgba(228, 187, 255, 0.9);
`;

const Contents = styled(Box)`
  position: absolute;
  margin: auto;
  top: 50%;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%);
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  z-index: 999;
`;
