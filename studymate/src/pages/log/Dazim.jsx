import React from 'react';
import styled from '@emotion/styled';
import Box from '../../components/common/Box';

function Dazim() {
  return (
    <BoxStyled size={[438, 53]} opacity={0.8}>
      <Text>오늘 하루도 화이팅 🔥</Text>
    </BoxStyled>
  );
}

export default Dazim;

const BoxStyled = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  margin: 0;
  font-size: 24px;
`;
