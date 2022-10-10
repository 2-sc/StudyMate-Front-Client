import React from 'react';
import styled from '@emotion/styled';
import Box from '../../components/common/Box';
import Calendar from '../../components/calendar/Calendar';
import Dazim from './components/Dazim';

function Planner() {
  return (
    <Wrapper>
      <RightBox>
        <TopBox size={[438, 53]}>
          <Dazim />
        </TopBox>
        <Container size={[438, 400]}></Container>
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
`;

const Container = styled(Box)``;

const LeftBox = styled.div``;

const SideBox = styled(Box)`
  margin-top: 25px;
`;
