import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { deepPurple } from '@mui/material/colors';
import ThemeToggle from './ThemeToggle';
import Banner from './Banner';

interface TitleBarProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  toggleDrawer: () => void;
}

const TitleBar = ({
  isDarkTheme,
  toggleTheme,
  toggleDrawer,
}: TitleBarProps) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Banner />
            <Avatar
              alt="Chris Pearson"
              sx={{ bgcolor: deepPurple[500], marginLeft: 'auto' }}
            >
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
