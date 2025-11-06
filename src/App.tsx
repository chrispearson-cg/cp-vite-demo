import './App.css';
import Drawer from './components/Drawer';
import TitleBar from './components/TitleBar';
import Content from './components/Content';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';
import { useState } from 'react';

// Define theme settings
const light: ThemeOptions = {
  palette: {
    mode: 'light',
  },
};

const dark: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
};

const App = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <>
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
      >
        <Container maxWidth={false} disableGutters={true}>
          <TitleBar isDarkTheme={isDarkTheme} toggleTheme={changeTheme} />
          <Drawer/>
          <Content />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
