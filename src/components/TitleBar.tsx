import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { deepPurple } from '@mui/material/colors';
import ThemeToggle from './ThemeToggle';

interface TitleBarProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const TitleBar = ({isDarkTheme, toggleTheme}: TitleBarProps) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton aria-label="home" color="inherit" size="small">
              <HomeIcon /> Home
            </IconButton>
            <Avatar alt="Chris Pearson" sx={{ bgcolor: deepPurple[500], marginLeft: 'auto' }}>
              CP
            </Avatar>
            <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default TitleBar;
