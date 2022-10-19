import { useState } from 'react';
import styled from '@emotion/styled';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CategoryListItem({ categories, onRemove }) {
  return (
    <Wrapper>
      {categories.map(category => (
        <Item key={category.id} id={category.id} text={category.text} onRemove={onRemove} />
      ))}
    </Wrapper>
  );

  function Item({ id, text }) {
    const [hide, setHide] = useState(true);

    return (
      <Container
        onMouseOver={() => {
          setHide(false);
        }}
        onMouseOut={() => {
          setHide(true);
        }}
      >
        <ListBox>{text}</ListBox>
        {hide || (
          <DeleteBtn onClick={() => onRemove(id)} hideState={hide}>
            <Icon icon={faTrashCan} />
          </DeleteBtn>
        )}
      </Container>
    );
  }
}

export default CategoryListItem;

const Wrapper = styled.div`
  margin-left: 30px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ListBox = styled.div`
  width: 280px;
  margin-right: 15px;
  margin-bottom: 2px;
  border-bottom: 2px solid #e4bbff;
`;

const DeleteBtn = styled.div`
  color: #d95765;
  cursor: pointer;
  &:hover {
    visibility: ${props => (props.hideState ? 'hidden' : 'visible')};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;
