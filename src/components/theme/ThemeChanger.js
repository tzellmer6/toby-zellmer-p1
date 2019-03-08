import React from "react";
import styled from "styled-components";
import { withTheme } from "@callstack/react-theme-provider";

const Header = ({ theme, themes, onChangeTheme }) => (
  <Container textColor={theme.primaryColor} background={theme.secondaryColor}>
    What theme would you like to use?:{" "}
    <select onChange={e => onChangeTheme(e.target.value)}>
      {themes.map(themeName => (
        <option key={themeName} value={themeName}>
          {themeName}
        </option>
      ))}
    </select>
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.textColor};
  background-color: ${props => props.background};
  padding: 1rem;
  text-align: center;
  font-family: sans-serif;
`;

export default withTheme(Header);
