import React from 'react';
import Box from '../common/Box';
import styled from '@emotion/styled';
import PieGraph from './PieGraph';

function Graph({ data }) {
  return (
    <Wrapper size={[475, 439]} opacity={0.8}>
      <PieGraph data={data} />
    </Wrapper>
  );
}

export default Graph;

const Wrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
