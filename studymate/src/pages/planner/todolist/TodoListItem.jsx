import { useState } from 'react';
import styled from '@emotion/styled';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as ClickBox } from '../../../assets/checkbox.svg';

function TodoListItem({ todos, onRemove, onToggle }) {
  return (
    <Wrapper>
      <ListWrapper>
        <CheckBoxWrapper>
          <ClickBoxStyle className="icon" />
          <ListBox>카카오톡 로그인 구현</ListBox>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <ClickBoxStyle className="icon" />
          <ListBox>sidebar 상태 변화 디자인</ListBox>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <ClickBoxStyle className="icon" />
          <ListBox>마이페이지 UI 디자인</ListBox>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <ClickBoxStyle className="icon" />
          <ListBox>CS 스터디 계획 짜기</ListBox>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <CheckBox />
          <NoListBox>Django 공부하기</NoListBox>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <ClickBoxStyle className="icon" />
          <ListBox>API 명세서 짜기</ListBox>
        </CheckBoxWrapper>
      </ListWrapper>
    </Wrapper>
  );
}

export default TodoListItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
`;

const ListWrapper = styled.div`
  width: 100%;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  margin-bottom: 3px;
`;

const ClickBoxStyle = styled(ClickBox)`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

const CheckBox = styled.div`
  width: 21px;
  height: 21px;
  margin-right: 15px;
  border-radius: 50px;
  border: 2px solid #e4bbff;
`;
const ListBox = styled.div`
  position: relative;
  flex: 1;
  margin-right: 15px;
  color: #ccc;
  font-size: 16px;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    border-top: 1px solid;
    width: 100%;
    border-top-color: #ccc;
  }
`;

const NoListBox = styled(ListBox)`
  border-bottom: 2px solid #e4bbff;
  color: black;
  &:after {
    border: none;
  }
`;
