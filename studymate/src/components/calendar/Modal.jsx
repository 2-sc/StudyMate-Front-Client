import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Calendar from './Calendar';

function Modal({ day, setDay, isModalOpen, setIsModalOpen }) {
  const [tempDate, setTempDate] = useState();

  const clickedOverlay = e => {
    e.target === e.currentTarget && closedHandler();
  };

  const closedHandler = () => {
    setDay(tempDate);
    setIsModalOpen(false);
  };

  return (
    <Overlay onClick={clickedOverlay}>
      <ModalBox>
        <Calendar resultData={tempDate} setResultData={setTempDate} />
        <Button onClick={closedHandler}>선택 완료</Button>
      </ModalBox>
    </Overlay>
  );
}

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #c4c1c1d0;
  z-index: 100;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  z-index: 1000;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  background-color: white;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  font-size: 20px;
`;
