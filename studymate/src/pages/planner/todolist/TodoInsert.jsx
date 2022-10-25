import { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TodoInsert({ onInsert }) {
  const [inputValue, setInputValue] = useState(``);
  const ref = useRef();

  return (
    <Wrapper>
      <TodoInput>
        <Input value={''} ref={ref} placeholder="Add new Todo" />
      </TodoInput>
      <PlusBtn>
        <Icon icon={faPlus} />
      </PlusBtn>
    </Wrapper>
  );
}

export default TodoInsert;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0px 0px 25px 25px;
`;

const TodoInput = styled.div`
  width: 356px;
  height: 35px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  margin-left: 7px;
  border: none;
  background: transparent;
  outline: none;
  &::placeholder {
    font-size: 16px;
    color: #e4bbff;
  }
`;

const PlusBtn = styled.div``;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 23px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`;
