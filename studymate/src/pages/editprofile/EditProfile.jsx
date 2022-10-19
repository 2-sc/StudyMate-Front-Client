import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Box from '../../components/common/Box';
import InfoContainer from './InfoContainer';
import { Link } from 'react-router-dom';

function EditProfile() {
  const fileInput = useRef(null);
  const [image, setImage] = useState('https://i.ibb.co/gzCbMQL/logo.png');
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
        <Buttons>
          <LinkStyle to="/stopwatch">
            <Button onClick={cancelButtonHandler}>취소</Button>
          </LinkStyle>
          <Button onClick={submitButtonHandler}>완료</Button>
        </Buttons>
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

const Buttons = styled.div`
  position: absolute;
  right: 24px;
  bottom: 16px;
  > button {
    color: #e4bbff;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
`;

const LinkStyle = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
