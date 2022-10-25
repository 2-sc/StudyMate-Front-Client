import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ScheduleListItem({ schedules, onRemove }) {
  return (
    <Wrapper>
      <InputText value={'창업대전 (09:00 ~ 18:00)'} />
    </Wrapper>
  );
}

export default ScheduleListItem;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  border-bottom: 2px solid #e4bbff;
`;

const InputText = styled.input`
  width: 100%;
  height: 100%;
  margin-bottom: 2px;
  font-size: 13px;
  border: none;
  background: transparent;
  outline: none;
`;

const DeleteBtn = styled.button`
  margin-right: -6px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: #d95765;
  cursor: pointer;
  &:hover {
    visibility: ${props => (props.hideState ? 'hidden' : 'visible')};
  }
`;
