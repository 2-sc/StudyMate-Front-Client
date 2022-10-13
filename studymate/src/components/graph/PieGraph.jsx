import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import Box from '../common/Box';
import styled from '@emotion/styled';

function PieGraph({ data }) {
  return (
    <Wrapper>
      <ResponsivePie
        data={data}
        width={400}
        height={400}
        margin={{ top: 0, right: 100, bottom: 0, left: 100 }}
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
    </Wrapper>
  );
}

export default PieGraph;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;
