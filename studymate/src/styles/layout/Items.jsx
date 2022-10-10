import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import {
  faHouse,
  faStopwatch,
  faList,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Items() {
  const pathName = useLocation().pathname;

  const items = [
    {
      icon: <IconStyle icon={faHouse} />,
      name: "Home",
      path: "/",
    },
    {
      icon: <IconStyle icon={faStopwatch} />,
      name: "Stopwatch",
      path: "/stopwatch",
    },
    {
      icon: <IconStyle icon={faList} />,
      name: "Planner",
      path: "/planner",
    },
    {
      icon: <IconStyle icon={faShareNodes} />,
      name: "Log",
      path: "/log",
    },
  ];

  return (
    <>
      {items.map((item, idx) => (
        <Link to={item.path} style={{ textDecoration: "none" }}>
          <Item
            key={idx}
            icon={item.icon}
            title={item.name}
            isActive={pathName === item.path ? true : false}
          />
        </Link>
      ))}
    </>
  );
}

function Item({ icon, title, isActive }) {
  return isActive === true ? (
    <ListActive>
      <Icon> {icon}</Icon>
      {title}
    </ListActive>
  ) : (
    <List>
      <Icon> {icon}</Icon>
      {title}
    </List>
  );
}

export default Items;

const List = styled.div`
  height: 40px;
  margin-left: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  list-style: none;

  color: #646464;
  &:hover {
    color: rgba(228, 187, 255, 0.3);
    transition: all 0.7s;
  }
`;

const ListActive = styled(List)`
  background: rgba(228, 187, 255, 0.3);
  border-radius: 22px 0 0 22px;
  color: #646464 !important;
`;

const Icon = styled.div`
  padding-left: 10px;
  margin-right: 14px;
`;

const IconStyle = styled(FontAwesomeIcon)``;
