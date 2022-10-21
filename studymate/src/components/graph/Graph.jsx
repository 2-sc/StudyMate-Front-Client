import React, { useState } from 'react';
import Box from '../common/Box';
import styled from '@emotion/styled';
import PieGraph from './PieGraph';
import TimeLineGraph from './TimeLineGraph';

function Graph({ data }) {
  const [graphState, setGraphState] = useState('timeline');

  const getColor = name => {
    return name.name === graphState ? '#e7e7e7' : 'inherit';
  };

  const handleGraphState = e => {
    setGraphState(e.target.getAttribute('name'));
    getColor(e.target.getAttribute('name'));
  };

  return (
    <Wrapper size={[438, 400]} opacity={0.8}>
      <Title>Graph</Title>
      <Buttons>
        <Button name="timeline" graphState={graphState} getColor={getColor} onClick={handleGraphState}>
          Time Line
        </Button>
        <Button name="total" graphState={graphState} getColor={getColor} onClick={handleGraphState}>
          Total
        </Button>
      </Buttons>
      {graphState === 'timeline' ? <TimeLineGraph /> : <PieGraph data={data} />}
    </Wrapper>
  );
}

export default Graph;

const center = `
display: flex;
justify-content: flex-start;
align-items: center;
`;

const Wrapper = styled(Box)`
  ${center}
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 15px 0;
`;

const Buttons = styled.div`
  ${center};
  gap: 80px;
  z-index: 2;
  margin-bottom: 10px;
`;

const Button = styled.div`
  padding: 6px 30px;
  background-color: ${props => props.getColor};
  border-radius: 10px;
  cursor: pointer;
`;
