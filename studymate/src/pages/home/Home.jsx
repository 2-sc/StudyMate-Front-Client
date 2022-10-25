import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <LinkStyled to={'/stopwatch'}>
      <Wrapper>
        <Video autoPlay loop muted>
          <source src="video/video.mp4" type="video/mp4" />
        </Video>
        <Title>Study Mate</Title>
      </Wrapper>
    </LinkStyled>
  );
}

export default Home;
const FLEX_CENTER_COLUMN = `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${FLEX_CENTER_COLUMN};
`;

const Video = styled.video`
  object-fit: cover;
  width: 80vw;
  height: 80vh;
  position: absolute;
  z-index: -1;
`;

const Title = styled.h1`
  font-size: 10vw;
`;
