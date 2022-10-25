import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Items from './Items';
import { Link, useNavigate } from 'react-router-dom';

function SideBar() {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    alert('로그아웃되었습니다.');
    navigate('/', { replace: true });
  };

  const onMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const onMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <Wrapper>
      <Top>
        <Profile onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} isMouseEnter={isMouseEnter}>
          {isMouseEnter && <Tooltip>창업대전 D - day</Tooltip>}
        </Profile>
        <Nickname>ESC</Nickname>
        <Text>✨ 웹 개발자를 희망합니다 ✨</Text>
        <Site>https://esc-study-mate.netlify.app/</Site>
        <EditBtn onClick={() => alert('베타버전에서는 지원하지 않습니다.')}>프로필 편집</EditBtn>
      </Top>
      <Middle>
        <Items />
      </Middle>
      <Bottom onClick={logoutHandler}>
        <IconStyle icon={faRightFromBracket} />
        <LogOut>Log Out</LogOut>
      </Bottom>
    </Wrapper>
  );
}

export default SideBar;

const Wrapper = styled.div`
  width: 223px;
  height: 496px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 35px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
  padding-top: 16px;
`;

const Profile = styled.div`
  width: 44px;
  height: 44px;
  background: url('/profile.png') no-repeat center/cover;
  border-radius: 50px;
  margin-bottom: 12px;
  ${({ isMouseEnter }) =>
    isMouseEnter &&
    `
    position: relative;
    `}
`;

const Tooltip = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  position: absolute;
  top: -50px;
  left: -40px;
  background-color: #f2eeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 14px;
  &:after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f2eeee;
    content: '';
    position: absolute;
    top: 38px;
    transform: rotate(180deg);
  }
`;

const Nickname = styled.span`
  margin-bottom: 22px;
`;

const Text = styled.span`
  font-size: 13px;
`;

const Site = styled.span`
  margin-top: 5px;
  font-size: 10px;
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const EditBtn = styled.button`
  width: 183px;
  height: 28px;
  margin-top: 21px;
  margin-bottom: 10px;
  background-color: #d9d9d9;
  border-radius: 5px;
  border-style: none;
  font-size: 13px;
  cursor: pointer;
`;

const Middle = styled.div`
  margin-top: 26px;
`;

const IconStyle = styled(FontAwesomeIcon)`
  margin-right: 18px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 34px;
  color: #646464;
  cursor: pointer;
`;

const LogOut = styled.div`
  font-size: 13px;
  margin-left: -10px;
`;
