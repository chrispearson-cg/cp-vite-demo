import './App.css';
import TitleBar from './components/TitleBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';
import { useState } from 'react';
import SideDrawer from './components/SideDrawer';
import MainContent from './components/MainContent';

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
      >
        <Container maxWidth={false} disableGutters={true}>
          <TitleBar
            isDarkTheme={isDarkTheme}
            toggleTheme={changeTheme}
            toggleDrawer={toggleDrawer}
          />
          <SideDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <MainContent>
            This is the main content area.
          </MainContent>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
