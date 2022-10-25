import React from 'react';
import Box from '../../components/common/Box';
import styled from '@emotion/styled';
import { ReactComponent as ClickBox } from '../../assets/checkbox.svg';

function TodoList() {
  return (
    <BoxStyled size={[214, 220]} opacity={0.8}>
      <Title>Todolist</Title>
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
    </BoxStyled>
  );
}

export default TodoList;

const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 16px;
  margin: 5px 0;
`;

const ListWrapper = styled.div``;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
`;

const ClickBoxStyle = styled(ClickBox)`
  width: 14px;
  height: 14px;
  margin-right: 15px;
`;

const CheckBox = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 15px;
  border-radius: 50px;
  border: 2px solid #e4bbff;
`;
const ListBox = styled.div`
  position: relative;
  flex: 1;
  margin-right: 15px;
  color: #ccc;
  font-size: 14px;

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
