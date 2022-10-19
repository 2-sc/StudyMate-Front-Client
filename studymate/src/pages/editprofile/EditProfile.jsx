import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Box from '../../components/common/Box';
import InfoContainer from './InfoContainer';
import { Link, useNavigate } from 'react-router-dom';

function EditProfile() {
  const fileInput = useRef(null);
  const [image, setImage] = useState('https://i.ibb.co/gzCbMQL/logo.png');
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    img: '',
    nickname: '',
    introduction: '',
    website: '',
    'd-dayName': '',
    'd-day': '',
  });

  const uploadClickHandler = e => {
    fileInput.current.click();
  };
  const handleChange = e => {
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  const withdrawal = () => {
    alert('정상적으로 탈퇴되었습니다.');
    navigate('/', { replace: true });
  };

  const withdrawalButtonHandler = () => {
    const result = window.confirm('정말 탈퇴하시겠습니까?');
    if (result) {
      const nickname = window.prompt('닉네임을 입력해주세요.');
      nickname === 'nickname' ? withdrawal() : alert('잘못 입력했습니다. 다시 시도해주세요.');
    }
  };

  const cancelButtonHandler = () => {
    alert('취소');
  };

  const submitButtonHandler = () => {
    console.log(inputData);
  };

  return (
    <Wrapper>
      <Container size={[466, 335]} opacity={0.8}>
        <ProfileContainer>
          <Profile image={image} />
          <EditProfileBtn onClick={uploadClickHandler}>프로필 사진 바꾸기</EditProfileBtn>
          <input
            ref={fileInput}
            onChange={handleChange}
            type="file"
            id="profile"
            name="profile"
            accept="image/png, image/jpeg"
            style={{ display: 'none' }}
          ></input>
        </ProfileContainer>
        <InfoContainer inputData={inputData} setInputData={setInputData} />
        <Footer>
          <Button color={'#d7d3d3ed'} onClick={withdrawalButtonHandler}>
            회원탈퇴
          </Button>
          <Buttons>
            <LinkStyle to="/stopwatch">
              <Button color={'black'} onClick={cancelButtonHandler}>
                취소
              </Button>
            </LinkStyle>
            <Button color={'#e4bbff'} onClick={submitButtonHandler}>
              완료
            </Button>
          </Buttons>
        </Footer>
      </Container>
    </Wrapper>
  );
}

export default EditProfile;

const Wrapper = styled.div`
  width: calc(100% - 223px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #6c6c6c;
  ${({ image }) => `background: url(${image}) no-repeat center/cover`};
  margin-bottom: 14px;
`;

const EditProfileBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  gap: 300px;
  justify-content: center;
  position: absolute;
  bottom: 12px;
`;

const Buttons = styled.div``;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
  color: ${({ color }) => color};
`;

const LinkStyle = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
