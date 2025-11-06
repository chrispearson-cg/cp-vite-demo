import { IconButton } from '@mui/material';
import LightIcon from '@mui/icons-material/LightMode';
import DarkIcon from '@mui/icons-material/DarkMode';

type ThemeToggleProps = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeToggle = ({isDarkTheme, toggleTheme}: ThemeToggleProps) => {
  if (isDarkTheme) {
    return (
      <IconButton onClick={toggleTheme}>
        <DarkIcon />
      </IconButton>
    );
  }
  return (
    <IconButton onClick={toggleTheme}>
      <LightIcon />
    </IconButton>
  );
};

export default ThemeToggle;
