import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LightIcon from '@mui/icons-material/LightMode';
import { deepPurple } from '@mui/material/colors';

const TitleBar = () => {
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
            <IconButton
              aria-label="settings"
              color="inherit"
              size="small"
              sx={{ marginLeft: 'auto' }}
            >
              <LightIcon />
            </IconButton>
            <Avatar alt="Chris Pearson" sx={{ bgcolor: deepPurple[500] }}>
              CP
            </Avatar>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default TitleBar;
