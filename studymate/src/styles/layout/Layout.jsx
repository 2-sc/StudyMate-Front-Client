import React from "react";
import styled from "@emotion/styled";
import Box from "../../components/common/Box";
import SideBar from "./SideBar";

function Layout({ component }) {
  return (
    <Container>
      <Wrapper size={[981, 496]}>
        <SideBar />
        {component}
      </Wrapper>
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

const Wrapper = styled(Box)`
  padding: 16px;
  display: flex;
`;
