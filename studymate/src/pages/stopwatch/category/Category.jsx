import { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CategoryListItem from './CategoryListItem';
import CategoryInsert from './CategoryInsert';

function Category({ closeModal }) {
  const [categories, setCategories] = useState([]);

  const onInsert = text => {
    const category = {
      id: categories.length + 1,
      text,
    };
    setCategories(categories.concat(category));
  };

  const onRemove = id => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <Wrapper>
      <CloseBtn onClick={closeModal}>
        <Icon icon={faXmark} />
      </CloseBtn>
      <Title>공부내용을 선택하세요</Title>
      <CategoryList>
        <CategoryListItem categories={categories} onRemove={onRemove} />
      </CategoryList>
      <BottomCategory>
        <CategoryInsert onInsert={onInsert} />
      </BottomCategory>
    </Wrapper>
  );
}

export default Category;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseBtn = styled.button`
  margin: 18px 24px 0px 320px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 25px;
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 23px;
  font-weight: 700;
  font-size: 25px;
`;

const CategoryList = styled.div``;

const BottomCategory = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;
