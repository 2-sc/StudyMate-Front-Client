import { useState } from "react";
import styled from "@emotion/styled";
import {
  BsHouseDoorFill,
  BsStopwatchFill,
  BsFillCalendarCheckFill,
  BsShareFill,
} from "react-icons/bs";

const itemList = [
  {
    icon: <BsHouseDoorFill />,
    name: "Home",
  },
  {
    icon: <BsStopwatchFill />,
    name: "Stopwatch",
  },
  {
    icon: <BsFillCalendarCheckFill />,
    name: "Planner",
  },
  {
    icon: <BsShareFill />,
    name: "Log",
  },
];

function Items() {
  return (
    <Category>
      {itemList.map((item, idx) => (
        <Item key={`${idx}`} icon={item.icon} title={item.name} />
      ))}
    </Category>
  );
}

function Item({ icon, title }) {
  return (
    <List>
      <Icon> {icon}</Icon>
      {title}
    </List>
  );
}

export default Items;

const Category = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const List = styled.li`
  height: 40px;
  margin-left: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  list-style: none;
  color: #646464;
  &:hover {
    background: rgba(228, 187, 255, 0.3);
    border-radius: 22px 0 0 22px;
  }
`;

const Icon = styled.div`
  padding-left: 10px;
  margin-right: 14px;
`;
