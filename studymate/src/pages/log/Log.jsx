import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Calendar from '../../components/calendar/Calendar';
import dummyData from '../../components/graph/dummyData';
import Graph from '../../components/graph/Graph';
import Dazim from './Dazim';
import TodoList from './TodoList';

function Log() {
  const [resultData, setResultData] = useState();
  useEffect(() => console.log(resultData), [resultData]);
  return (
    <Wrapper>
      <LeftBox>
        <Dazim />
        <Graph data={dummyData} />
      </LeftBox>
      <RightBox>
        <Calendar resultData={resultData} setResultData={setResultData} />
        <TodoList />
      </RightBox>
    </Wrapper>
  );
}
export default Log;

const Wrapper = styled.div`
  width: calc(100% - 223px);
  display: flex;
  justify-content: space-around;
`;

const LeftBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin-left: 15px;
`;

const RightBox = styled.div`
  margin-top: 11px;
  height: 100%;
  & > div:nth-child(2) {
    position: absolute;
    bottom: 25px;
  }
`;
