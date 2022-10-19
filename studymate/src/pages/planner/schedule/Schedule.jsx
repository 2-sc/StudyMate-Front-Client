import { useState } from 'react';
import styled from '@emotion/styled';
import SchedulePlus from './SchedulePlus';
import ScheduleListItem from './ScheduleListItem';

function Schedule() {
  const [schedules, setSchedules] = useState([]);

  const onInsert = () => {
    const schedule = {
      id: schedules.length + 1,
    };
    setSchedules(schedules.concat(schedule));
  };

  const onRemove = id => {
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };

  return (
    <Wrapper>
      <Top>
        <SchedulePlus onInsert={onInsert} />
      </Top>
      <List>
        <ScheduleListItem schedules={schedules} onRemove={onRemove} />
      </List>
    </Wrapper>
  );
}

export default Schedule;

const Wrapper = styled.div`
  margin: 25px 16px 0px 16px;
`;

const Top = styled.div``;

const List = styled.div`
  height: 140px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  /* &::-webkit-scrollbar-thumb {
    background: #e4bbff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ecd3fca0;
  } */
`;
