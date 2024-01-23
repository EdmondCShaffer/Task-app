import React,{ useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function NavMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  // Handle the click event on the menu button
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle navigation to a specific route and close the menu
  const handleNavigate = (path) => {
    navigate(path);
    setAnchorEl(null);
  };

  // Function to handle the closing of the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
        className='hover:animate-spin delay-3000'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleNavigate('/')}>Home</MenuItem>
        <MenuItem onClick={() => handleNavigate('/tasks')}>Tasks</MenuItem>
        <MenuItem onClick={() => handleNavigate('/completed-tasks')}>
          Completed Tasks
        </MenuItem>
        <MenuItem onClick={() => handleNavigate('/about')}>About</MenuItem>
      </Menu>
    </div>
  );
}

export default NavMenu;
