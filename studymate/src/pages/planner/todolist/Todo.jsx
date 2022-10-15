import { useState } from 'react';
import styled from '@emotion/styled';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Todo({ todos, onRemove }) {
  const [hide, setHide] = useState(true);

  return (
    <>
      {todos.map(todo => (
        <TodoListItem key={todo.id} text={todo.text} checked={todo.checked} onRemove={onRemove} />
      ))}
    </>
  );

  function TodoListItem({ id, text, checked, onRemove }) {
    return (
      <Wrapper
        onMouseOver={() => {
          setHide(false);
        }}
        onMouseOut={() => {
          setHide(true);
        }}
      >
        {/* <CheckBox className={cx('checkbox', { checked: checked })}>
          {checked ? <CheckBoxTrue /> : <CheckBoxFalse />}
        </CheckBox> */}
        <CheckBox>{checked}</CheckBox>
        <ListBox>{text}</ListBox>
        {hide || (
          <DeleteBtn onClick={() => onRemove(id)} hideState={hide}>
            <Icon icon={faTrashCan} />
          </DeleteBtn>
        )}
      </Wrapper>
    );
  }
}

export default Todo;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 7px;
`;

const CheckBox = styled.div`
  width: 17px;
  height: 17px;
  margin-right: 15px;
  border-radius: 50px;
  border: 2px solid #e4bbff;
`;

const ListBox = styled.div`
  width: 310px;
  border-bottom: 2px solid #e4bbff;
  margin-right: 15px;
`;

const DeleteBtn = styled.div`
  color: #d95765;
  cursor: pointer;
  &:hover {
    visibility: ${props => (props.hideState ? 'hidden' : 'visible')};
  }
`;

const Icon = styled(FontAwesomeIcon)``;

const CheckBoxTrue = styled.div`
  width: 17px;
  height: 17px;
  margin-right: 15px;
  border-radius: 50px;
  border: 2px solid #9900ff;
`;

const CheckBoxFalse = styled.div``;
