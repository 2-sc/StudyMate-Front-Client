import React from "react";
import styled from "@emotion/styled";
import Wrapper from "../../components/common/Box";
import SideBar from "./SideBar";

function Layout() {
  return (
    <Container>
      <WrapperStyled size={[981, 496]}>
        <SideBar />
      </WrapperStyled>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(228, 187, 255, 0.6);
`;

const WrapperStyled = styled(Wrapper)`
  padding: 16px;
`;
