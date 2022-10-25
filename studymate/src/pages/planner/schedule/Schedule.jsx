import { useState } from 'react';
import styled from '@emotion/styled';
import SchedulePlus from './SchedulePlus';
import ScheduleListItem from './ScheduleListItem';

function Schedule() {
  return (
    <Wrapper>
      <Top>
        <SchedulePlus />
      </Top>
      <List>
        <ScheduleListItem />
      </List>
    </Wrapper>
  );
}

export default Schedule;

const Wrapper = styled.div`
  margin: 25px 16px 0px 16px;
`;

const Top = styled.div``;

const List = styled.div`
  height: 140px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  /* &::-webkit-scrollbar-thumb {
    background: #e4bbff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ecd3fca0;
  } */
`;
