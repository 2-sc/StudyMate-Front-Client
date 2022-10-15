import { useState, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import Todo from './Todo';
import TodoInsert from './TodoInsert';

function Todolist() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '제발',
      checked: true,
    },
    {
      id: 2,
      text: '되라구',
      checked: false,
    },
  ]);

  const nextId = useRef(3);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  return (
    <Wrapper>
      <TopContainer>
        <Title>Todolist</Title>
      </TopContainer>
      <TodoList>
        <Todo onRemove={onRemove} todos={todos} />
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
  margin: 30px 32px 0 32px;
`;

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;
