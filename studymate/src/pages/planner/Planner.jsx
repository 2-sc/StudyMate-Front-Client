import React from 'react';
import styled from '@emotion/styled';
import Box from '../../components/common/Box';
import Calendar from '../../components/calendar/Calendar';
import Dazim from './components/Dazim';
import Todolist from './components/Todolist';

function Planner() {
  return (
    <Wrapper>
      <RightBox>
        <TopBox size={[438, 53]}>
          <Dazim />
        </TopBox>
        <BottomBox size={[438, 400]}>
          <Todolist />
        </BottomBox>
      </RightBox>
      <LeftBox>
        <Calendar />
        <SideBox size={[215, 220]}></SideBox>
      </LeftBox>
    </Wrapper>
  );
}

export default Planner;

const Wrapper = styled.div`
  width: calc(100% - 215px);
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const TopBox = styled(Box)`
  border-radius: 25px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.8);
`;

const BottomBox = styled(Box)`
  background: rgba(255, 255, 255, 0.8);
`;

const LeftBox = styled.div``;

const SideBox = styled(Box)`
  margin-top: 25px;
  background: rgba(255, 255, 255, 0.8);
`;
