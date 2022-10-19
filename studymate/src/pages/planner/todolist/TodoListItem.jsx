import { useState } from 'react';
import styled from '@emotion/styled';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as ClickBox } from '../../../assets/checkbox.svg';

function TodoListItem({ todos, onRemove, onToggle }) {
  return (
    <>
      {todos.map(todo => (
        <Item
          key={todo.id}
          id={todo.id}
          text={todo.text}
          checked={todo.checked}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </>
  );

  function Item({ id, text, checked, onRemove, onToggle }) {
    const [hide, setHide] = useState(true);

    return (
      <Wrapper
        onMouseOver={() => {
          setHide(false);
        }}
        onMouseOut={() => {
          setHide(true);
        }}
      >
        <CheckBoxContainer onClick={() => onToggle(id)}>
          {checked ? <ClickBoxStyle className="icon" /> : <CheckBox />}
        </CheckBoxContainer>
        <ListBox
          checked={checked}
          style={{
            color: checked ? '#ccc' : '#000',
            border: checked ? 'none' : null,
          }}
        >
          {text}
        </ListBox>
        {hide || (
          <DeleteBtn onClick={() => onRemove(id)} hideState={hide}>
            <Icon icon={faTrashCan} />
          </DeleteBtn>
        )}
      </Wrapper>
    );
  }
}

export default TodoListItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
`;

const CheckBoxContainer = styled.div``;

const ClickBoxStyle = styled(ClickBox)`
  width: 21px;
  height: 21px;
  margin-right: 15px;
`;

const CheckBox = styled.div`
  width: 17px;
  height: 17px;
  margin-right: 15px;
  border-radius: 50px;
  border: 2px solid #e4bbff;
`;

const ListBox = styled.div`
  position: relative;
  flex: 1;
  border-bottom: 2px solid #e4bbff;
  margin-right: 15px;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    border-top: 1px solid;
    width: 100%;
    border-top-color: ${props => (props.checked ? '#ccc' : 'transparent')};
  }
`;

const DeleteBtn = styled.div`
  color: #d95765;
  cursor: pointer;
  &:hover {
    visibility: ${props => (props.hideState ? 'hidden' : 'visible')};
  }
`;

const Icon = styled(FontAwesomeIcon)``;
