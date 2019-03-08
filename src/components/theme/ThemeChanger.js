import React from "react";
import styled from "styled-components";
import { withTheme } from "@callstack/react-theme-provider";

const Header = ({ theme, themes, onChangeTheme }) => (
  <Container textColor={theme.primaryColor} background={theme.secondaryColor}>
    Please choose a theme to use:{" "}
    <select onChange={e => onChangeTheme(e.target.value)}>
      {themes.map(themeName => (
        <option key={themeName} value={themeName}>
          {themeName}
        </option>
      ))}
    </select>
    <br />
    These themes are meant to mimic the logo that insipired them.
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.textColor};
  background-color: ${props => props.background};
  padding: 2rem;
  text-align: center;
  font-family: sans-serif;
`;

export default withTheme(Header);
