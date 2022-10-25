import React, { useState, useEffect } from 'react';
import Modal from '../../components/calendar/Modal';
import { formatISO, parseISO, differenceInDays } from 'date-fns';

import styled from '@emotion/styled';

function InfoContainer({ inputData, setInputData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [day, setDay] = useState('');
  const [dDay, setDDay] = useState();

  const onChange = e => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  const onClick = e => {
    console.log('e.target.id :>> ', e.target.id);
  };

  const onClickDatePickerButton = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (day) {
      const today = formatISO(new Date(), { representation: 'date' });
      const dDay = differenceInDays(parseISO(today), parseISO(day.from));

      const getDDay = dDay => {
        switch (dDay.toString()[0]) {
          case '-':
            return `- ${dDay.toString().substr(1)}`;
          case '0':
            return '- 0';
          default:
            return `+ ${dDay}`;
        }
      };

      setDDay(getDDay(dDay));
    }
  });

  return (
    <Wrapper>
      <InfoWrapper>
        <Label htmlFor="nickname">닉네임</Label>
        <Input onChange={onChange} type={'text'} id={'nickname'} placeholder={'닉네임'} />
      </InfoWrapper>
      <InfoWrapper>
        <Label htmlFor="introduction">한 줄 소개</Label>
        <Introduction onChange={onChange} type={'text'} id={'introduction'} placeholder={'한 줄 소개'} />
      </InfoWrapper>
      <InfoWrapper>
        <Label htmlFor="website">웹사이트</Label>
        <Input onChange={onChange} type={'text'} id={'website'} placeholder={'웹사이트'} />
      </InfoWrapper>
      <InfoWrapper>
        <Label htmlFor="d-dayName">D - day</Label>
        <DdayInput onChange={onChange} type={'text'} id={'d-dayName'} placeholder={'D - day 이름'} />
        <span>까지 D {dDay ? dDay : '- 000'}</span>
        <DateButton onClick={onClickDatePickerButton}>날짜 선택</DateButton>
      </InfoWrapper>
      {isModalOpen && <Modal day={day} setDay={setDay} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </Wrapper>
  );
}

export default InfoContainer;

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 15px;
  width: 65px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 10px;
`;

const Introduction = styled(Input)`
  width: 150px;
`;

const DdayInput = styled(Input)`
  width: 70px;
`;

const DateButton = styled.button`
  width: 50px;
  height: 20px;
  background-color: #c8dcd5;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  cursor: pointer;
  margin-left: 10px;
`;
