import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import DrawerHeader from './DrawerHeader';
import Copyright from './Copright';
import Version from './Version';

interface SideDrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

// This would should be be provided from a data source so we can build it based on permissions etc.
// Maybe using a custom hook like useMenuItems() which would be able to look up the user and permissions?
const items = [
  {
    text: 'Case Checking',
    icon: <FolderIcon />,
  },
  {
    text: 'User Management',
    icon: <PersonIcon />,
  },
];

const SideDrawer = ({ isDrawerOpen, toggleDrawer }: SideDrawerProps) => {
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
              <ListItemButton key={index}>
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
