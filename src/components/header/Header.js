import React from "react";
import styled from "styled-components";
import { withTheme } from "@callstack/react-theme-provider";

const Header = ({ theme }) => (
  <Container textColor={theme.textColor} background={theme.backgroundColor}>
    <div>
      <Logo src={theme.logo} />
    </div>
  </Container>
);

const Logo = styled.img`
  height: 10rem
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.textColor};
  background-color: ${props => props.background};
  padding: 4rem;
  text-align: center;
  font-size: 2rem;
`;

export default withTheme(Header);