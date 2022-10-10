import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Box from '../../components/common/Box';
import Inputs from './Inputs';

function Login() {
  const [info, setInfo] = useState({
    id: '',
    password: '',
  });

  const handleChangeInfo = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(info);
  };

  return (
    <>
      <Inputs place={'login'} info={info} handleChangeInfo={handleChangeInfo} />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}

function Signup() {
  const [info, setInfo] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const [warningState, setWarningState] = useState({
    id: false,
    password: false,
    nickname: false,
  });

  const handleChangeInfo = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(info);
  };

  const handleChangeBool = str => {
    return str === 'true' ? false : true;
  };

  const handleWarningState = e => {
    setWarningState({
      ...warningState,
      [e.target.name]: handleChangeBool(e.target.value),
    });
  };

  useEffect(() => {
    console.log('warningState :>> ', warningState);
  }, [warningState]);

  return (
    <>
      <Inputs info={info} handleChangeInfo={handleChangeInfo} warningState={warningState} />
      <Button onClick={handleSubmit}>Create</Button>
      <Buttons>
        <Button name="id" value={warningState.id} onClick={handleWarningState}>
          ID
        </Button>
        <Button name="password" value={warningState.password} onClick={handleWarningState}>
          Password
        </Button>
        <Button name="nickname" value={warningState.nickname} onClick={handleWarningState}>
          Nickname
        </Button>
      </Buttons>
    </>
  );
}

function Sign({ place }) {
  return (
    <Wrapper>
      <Video autoPlay loop muted>
        <source src="video/video.mp4" type="video/mp4" />
      </Video>
      <BoxStyled place={place} size={[300, 300]} opacity={0.5}>
        <Title>{place === 'login' ? 'Login' : 'Sign up'}</Title>
        {place === 'login' ? <Login /> : <Signup />}
      </BoxStyled>
    </Wrapper>
  );
}

export default Sign;

const FLEX_CENTER_COLUMN = `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${FLEX_CENTER_COLUMN}
`;

const Video = styled.video`
  object-fit: cover;
  width: 80vw;
  height: 80vh;
  position: absolute;
  z-index: -1;
`;

const BoxStyled = styled(Box)`
  ${FLEX_CENTER_COLUMN};
  gap: 20px;
  min-height: ${props => (props.place === 'login' ? '250px' : '300px')};
  height: fit-content;
  padding-bottom: 10px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #757575;
  margin: 0;
`;

const Buttons = styled.div`
  & > :nth-of-type(2) {
    margin: 0 10px;
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #6162bc;
  color: white;
`;
