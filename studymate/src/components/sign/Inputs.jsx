import React from 'react';
import styled from '@emotion/styled';

function Login({ info, handleChangeInfo }) {
  return (
    <>
      <Input
        name="id"
        placeholder="ID"
        value={info.id}
        onChange={handleChangeInfo}
      />
      <Input
        name="password"
        type={'password'}
        placeholder="Password"
        value={info.password}
        onChange={handleChangeInfo}
      />
    </>
  );
}

function Signup({ info, handleChangeInfo, warningState }) {
  return (
    <>
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
      {warningState.password && <WarningMessage>password error</WarningMessage>}
      <Input
        name="nickname"
        placeholder="Nickname"
        value={info.nickname}
        onChange={handleChangeInfo}
      />
      {warningState.nickname && <WarningMessage>nickname error</WarningMessage>}
    </>
  );
}

function Inputs({ place, info, handleChangeInfo, warningState }) {
  return (
    <Wrapper>
      {place === 'login' ? (
        <Login info={info} handleChangeInfo={handleChangeInfo} />
      ) : (
        <Signup
          info={info}
          handleChangeInfo={handleChangeInfo}
          warningState={warningState}
        />
      )}
    </Wrapper>
  );
}

export default Inputs;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const WarningMessage = styled.span`
  font-weight: 600;
  color: #d21d1d;
`;
