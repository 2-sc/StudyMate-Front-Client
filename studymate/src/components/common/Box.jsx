import React from 'react';
import styled from '@emotion/styled';

function Box({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Box;

const Wrapper = styled.div`
  width: ${(props) => props.size[0]}px;
  height: ${(props) => props.size[1]}px;
  border-radius: ${(props) => (props.place === 'outer' ? '40px' : '25px')};
  background-color: ${(props) => `rgba(255,255,255,${props.opacity})`};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
`;
