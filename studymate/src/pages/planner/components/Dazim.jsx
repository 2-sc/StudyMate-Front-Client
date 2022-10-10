import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function Dazim() {
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   console.log({ inputValue });
  // }, [inputValue]);

  return (
    <Wrapper>
      <Container>
        <Top>한마디</Top>
        <Icon icon={faPencil} />
      </Container>
      <InputText
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="오늘의 한마디를 작성해주세요"
      />
    </Wrapper>
  );
}

export default Dazim;

const Wrapper = styled.div`
  margin-left: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Top = styled.div`
  margin-right: 6px;
  font-size: 12px;
  font-weight: bold;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 10px;
`;

const InputText = styled.input`
  width: calc(100% - 20px);
  border: none;
  background: transparent;
`;
