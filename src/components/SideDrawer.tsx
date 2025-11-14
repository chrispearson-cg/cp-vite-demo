import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import FolderIcon from '@mui/icons-material/Folder';
import StatusIcon from '@mui/icons-material/CheckCircleOutline';
import DrawerHeader from './DrawerHeader';
import Copyright from './Copright';
import Version from './Version';
import { useNavigate } from 'react-router';

interface SideDrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

// This would should be be provided from a data source so we can build it based on permissions etc.
// Maybe using a custom hook like useMenuItems() which would be able to look up the user and permissions?
const items = [
  {
    text: 'Index',
    icon: <FolderIcon />,
    url: '/',
  },
  {
    text: 'Status',
    icon: <StatusIcon />,
    url: '/status',
  },
];

const SideDrawer = ({ isDrawerOpen, toggleDrawer }: SideDrawerProps) => {
  const navigate = useNavigate();
  const handleNavigation = (url: string) => {
    toggleDrawer();
    navigate(url);
  };
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        anchor="left"
        keepMounted={true}
        sx={{ '& .MuiDrawer-paper': { width: 250 } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <DrawerHeader>
            <Typography variant="h5">Menu</Typography>
          </DrawerHeader>
          <List sx={{ flexGrow: 1 }}>
            {items.map((item, index) => (
              <ListItemButton key={index} onClick={() => handleNavigation(item.url)}>
                <ListItemIcon>
                  {item.icon}
                  {item.text}
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
          {/* Add these in a flex box that auto expands the top margin forcing them to the bottom */}
          <Box sx={{ marginTop: 'auto', paddingX: 2, paddingBottom: 2 }}>
            <Version />
            <Copyright />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SideDrawer;
