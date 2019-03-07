import React from "react";
import { ThemeProvider } from "@callstack/react-theme-provider";

import Header from "./components/header/Header";
import ThemeChanger from "./components/theme/ThemeChanger";

import { themes } from "./components/theme/themes";

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
      </ThemeProvider>
    );
  }
}

export default App;