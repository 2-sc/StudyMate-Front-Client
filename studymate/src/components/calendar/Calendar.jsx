import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Box from '../common/Box';

import {
  DayPicker,
  DateFormatter,
  ClassNames,
  useNavigation,
} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './day-picker-customize.css';
import ko from 'date-fns/locale/ko';
import { format } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function CustomCaption(props) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();

  return (
    <Header>
      <Button
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}>
        <IconStyled icon={faAngleLeft} />
      </Button>
      <Text>{format(props.displayMonth, 'yyyy년 MM월', { locale: ko })}</Text>
      <Button
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}>
        <IconStyled icon={faAngleRight} />
      </Button>
    </Header>
  );
}

function Calendar() {
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (selected) {
      console.log('selected :>> ', selected);
    }
  }, [selected]);

  return (
    <Wrapper size={[214, 214]} opacity={0.8}>
      <DayPicker
        mode="range"
        selected={selected}
        onSelect={setSelected}
        locale={ko}
        components={{
          Caption: CustomCaption,
        }}
      />
    </Wrapper>
  );
}

export default Calendar;

const Wrapper = styled(Box)`
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
`;

const Button = styled.div`
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-weight: bold;
`;

const IconStyled = styled(FontAwesomeIcon)``;

const Text = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
