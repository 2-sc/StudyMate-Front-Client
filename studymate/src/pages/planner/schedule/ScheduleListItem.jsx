import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ScheduleListItem({ schedules, onRemove }) {
  return (
    <>
      {schedules.map(schedule => (
        <Item key={schedule.id} id={schedule.id} onRemove={onRemove} />
      ))}
    </>
  );

  function Item({ id, onRemove }) {
    const [hide, setHide] = useState(true);
    const [inputValue, setInputValue] = useState(``);

    // useEffect(() => {
    //   console.log({ inputValue });
    // }, [inputValue]);

    return (
      <Wrapper
        onMouseOver={() => {
          setHide(false);
        }}
        onMouseOut={() => {
          setHide(true);
        }}
      >
        <InputText onChange={e => setInputValue(e.target.value)} value={inputValue} />
        {hide || (
          <DeleteBtn onClick={() => onRemove(id)} hideState={hide}>
            <FontAwesomeIcon icon={faTrashCan} />
          </DeleteBtn>
        )}
      </Wrapper>
    );
  }
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
