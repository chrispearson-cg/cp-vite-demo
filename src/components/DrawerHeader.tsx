import { styled } from '@mui/material/styles';


// taken from https://mui.com/material-ui/react-drawer/

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default DrawerHeader;