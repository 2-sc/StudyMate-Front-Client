import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Schedule({ onInsert }) {
  const clickHandler = () => {
    onInsert();
  };
  return (
    <Wrapper>
      <Title>Schedule</Title>
      <PlusBtn onClick={clickHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </PlusBtn>
    </Wrapper>
  );
}

export default Schedule;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-right: 95px;
`;

const PlusBtn = styled.button`
  border: none;
  background: transparent;
  outline: none;
  font-size: 19px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
`;
