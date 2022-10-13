import React from 'react';
import Box from '../common/Box';
import styled from '@emotion/styled';
import PieGraph from './PieGraph';

function Graph({ data }) {
  let total = 0;

  data.forEach(el => {
    total = total + el.value;
  });

  const totalHours = Math.floor(total / 60);

  const totalMinutes = Math.floor(total % 60);

  const totalSecondes = Math.floor(totalMinutes % 60);

  const hoursStr = totalHours < 10 ? `0${totalHours}` : `${totalHours}`;
  const minutesStr = totalMinutes < 10 ? `0${totalMinutes}` : `${totalMinutes}`;
  const secondesStr = totalSecondes < 10 ? `0${totalSecondes}` : `${totalSecondes}`;

  return (
    <Wrapper size={[475, 439]} opacity={0.8}>
      <PieGraph data={data} />
      <Total>{`Total ${hoursStr} : ${minutesStr} : ${secondesStr}`}</Total>
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

const Total = styled.h1`
  font-size: 30px;
  margin: -60px 0 0;
`;
