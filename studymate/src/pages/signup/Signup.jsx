import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Box from '../../components/common/Box';

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

  const handleChangeInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(info);
  };

  const handleChangeBool = (str) => {
    return str === 'true' ? false : true;
  };

  const handleWarningState = (e) => {
    setWarningState({
      ...warningState,
      [e.target.name]: handleChangeBool(e.target.value),
    });
  };

  useEffect(() => {
    console.log('warningState :>> ', warningState);
  }, [warningState]);

  return (
    <Wrapper>
      <Video autoPlay loop muted>
        <source src="video/video.mp4" type="video/mp4" />
      </Video>
      <BoxStyled size={[300, 300]} opacity={0.5}>
        <Title>Sign up</Title>
        <Inputs>
          <Input
            name="id"
            placeholder="ID"
            value={info.id}
            onChange={handleChangeInfo}
          />
          {warningState.id && <WarningMessage>id error</WarningMessage>}
          <Input
            name="password"
            type={'password'}
            placeholder="Password"
            value={info.password}
            onChange={handleChangeInfo}
          />
          {warningState.password && (
            <WarningMessage>password error</WarningMessage>
          )}
          <Input
            name="nickname"
            placeholder="Nickname"
            value={info.nickname}
            onChange={handleChangeInfo}
          />
          {warningState.nickname && (
            <WarningMessage>nickname error</WarningMessage>
          )}
        </Inputs>
        <Button onClick={handleSubmit}>Create</Button>
        <Buttons>
          <Button
            name="id"
            value={warningState.id}
            onClick={handleWarningState}>
            ID
          </Button>
          <Button
            name="password"
            value={warningState.password}
            onClick={handleWarningState}>
            Password
          </Button>
          <Button
            name="nickname"
            value={warningState.nickname}
            onClick={handleWarningState}>
            Nickname
          </Button>
        </Buttons>
      </BoxStyled>
    </Wrapper>
  );
}

export default Signup;

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
  min-height: 300px;
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

const Inputs = styled.div`
  ${FLEX_CENTER_COLUMN};
  gap: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 226px;
  height: 20px;
  border-radius: 40px;
  padding: 5px 10px;
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

const WarningMessage = styled.span`
  font-weight: 600;
  color: #d21d1d;
`;
