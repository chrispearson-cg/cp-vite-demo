import './App.css';
import TitleBar from './components/TitleBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';
import { useState } from 'react';
import SideDrawer from './components/SideDrawer';
import { BrowserRouter, Routes, Route } from 'react-router';
import StatusList from './Pages/StatusList';
import IndexContent from './Pages/IndexContent';
import Todo from './Pages/ToDo';

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
        <BrowserRouter>
          <Container maxWidth={false} disableGutters={true}>
            <TitleBar
              isDarkTheme={isDarkTheme}
              toggleTheme={changeTheme}
              toggleDrawer={toggleDrawer}
            />
            <SideDrawer
              isDrawerOpen={isDrawerOpen}
              toggleDrawer={toggleDrawer}
            />
          </Container>
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" element={<IndexContent />} />
              <Route path="/status" element={<StatusList />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
