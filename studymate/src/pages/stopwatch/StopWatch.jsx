import React from 'react';
import { useState, useRef, useMemo } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

function StopWatch() {
  const [isPlay, setIsPlay] = useState(false);
  const interval = useRef(null);
  const startTime = useRef(0);
  const [timeFlow, setTimeFlow] = useState(0);

  const playHandler = () => {
    if (!isPlay) {
      if (startTime.current === null) {
        // 최초 play를 눌렀을 때
        startTime.current = 0;
      }
      setIsPlay(true);
      stopwatch();
    } else {
      setIsPlay(false);
      clearInterval(interval.current);
    }
  };

  const recordHandler = () => {
    // 초기화
    startTime.current = 0;
    setTimeFlow(0);
  };

  const stopwatch = () => {
    interval.current = setInterval(() => {
      startTime.current += 1000;
      setTimeFlow(startTime.current);
    }, 1000);
  };

  const formater = useMemo(() => {
    if (timeFlow === 0) return '00:00:00';
    return dayjs(timeFlow).subtract(9, 'hour').format('HH:mm:ss');
  }, [timeFlow]);

  return (
    <Wrapper>
      <Circle>
        <Time>{formater}</Time>
        <Buttons>
          <Button onClick={playHandler}>
            <FontAwesomeIcon icon={isPlay ? faStop : faPlay} />
          </Button>
          {!isPlay && startTime.current !== 0 && (
            <Button onClick={recordHandler}>
              <FontAwesomeIcon icon={faStopwatch} />
            </Button>
          )}
        </Buttons>
      </Circle>
      <Category>Category</Category>
    </Wrapper>
  );
}

export default StopWatch;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Circle = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f1f1f1;
  margin-bottom: 30px;
`;
const Time = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 30px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  outline: none;
  font-size: 25px;
  cursor: pointer;
`;

const Category = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #646464;
`;
