import React from "react";
import { ThemeProvider } from "@callstack/react-theme-provider";
import Header from "./components/header/Header";
import ThemeChanger from "./components/theme/ThemeChanger";
import { themes } from "./components/theme/themes";
import { Box, Flex, Link } from 'rebass'

class App extends React.Component {
  state = {
    theme: themes.normal
  };

  handleThemeChange = (themeName: string) => {
    this.setState({ theme: themes[themeName] });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          <Header />
          <ThemeChanger
            onChangeTheme={this.handleThemeChange}
            themes={Object.keys(themes)}
          />
        </div>
        <Flex>
          <Box p={3} width={1/3} color='#black' bg='#d9d9d9' fontSize={3}>
            This website showcases React, Styled Components, Rebass, Styled Icons and Theming. 
          </Box>
          <Box p={3} width={1/3} color='#0066ff' bg='#001f4d'fontSize={3}>
            It was created to showcase theme features for ITDEV-164, a web programming class.
          </Box>
          <Box p={3} width={1/3} color='#black' bg='#800000'fontSize={3}>
            <Link href='https://www.linkedin.com/in/tobyzellmer/'>Created by Toby Zellmer</Link>
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}


export default App;