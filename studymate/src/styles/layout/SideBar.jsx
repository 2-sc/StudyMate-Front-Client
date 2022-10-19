import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Items from './Items';
import { Link, useNavigate } from 'react-router-dom';


function SideBar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    alert('로그아웃되었습니다.');
    navigate('/', { replace: true });
  };

  return (
    <Wrapper>
      <Top>
        <Profile></Profile>
        <Nickname>ujin</Nickname>
        <Text>화이팅</Text>
        <LinkStyled to="/editprofile">
          <EditBtn>프로필 편집</EditBtn>
        </LinkStyled>
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
  background-color: #6c6c6c;
  border-radius: 50px;
  margin-bottom: 12px;
`;

const Nickname = styled.span`
  margin-bottom: 22px;
`;

const Text = styled.span`
  font-size: 13px;
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
