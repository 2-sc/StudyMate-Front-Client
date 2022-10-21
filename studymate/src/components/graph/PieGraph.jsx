import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import Box from '../common/Box';
import styled from '@emotion/styled';

function PieGraph({ data }) {
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
    <Wrapper>
      <ResponsivePie
        data={data}
        width={380}
        height={380}
        margin={{ top: 0, right: 80, bottom: 0, left: 110 }}
        innerRadius={0.5}
        padAngle={2}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pastel1' }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
      />
      <Total>{`Total ${hoursStr} : ${minutesStr} : ${secondesStr}`}</Total>
    </Wrapper>
  );
}

export default PieGraph;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Total = styled.h1`
  font-size: 20px;
  margin: -45px 0 0;
`;
