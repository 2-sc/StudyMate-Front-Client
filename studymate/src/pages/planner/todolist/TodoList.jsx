import { useState } from 'react';
import styled from '@emotion/styled';
import TodoListItem from './TodoListItem';
import TodoInsert from './TodoInsert';

function Todolist() {
  const [todos, setTodos] = useState([]);

  const onInsert = text => {
    const todo = {
      id: todos.length + 1,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
  };

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => {
    const _todos = [...todos];

    const index = _todos.findIndex(todo => todo.id === id);
    if (index < 0) return;
    _todos[index].checked = !_todos[index].checked;
    setTodos(_todos);
  };
  return (
    <Wrapper>
      <TopContainer>
        <Title>Todolist</Title>
      </TopContainer>
      <TodoList>
        <TodoListItem todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoList>
      <BottomContainer>
        <TodoInsert onInsert={onInsert} />
      </BottomContainer>
    </Wrapper>
  );
}

export default Todolist;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  font-weight: 700;
  font-size: 24px;
`;

const Title = styled.div``;

const TodoList = styled.div`
  height: 248px;
  margin: 30px 23px 0 23px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 4px;
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e4bbff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ecd3fca0;
  }
`;

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;
