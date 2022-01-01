import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const pages = [
    {name: "Dashboard", path: "/"},
    {name: "Personnages", path: "/characters"}
]

const DropdownMenu = (props: { sx: any; }) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
        <Box sx={Object.assign({ flexGrow: 1, alignItems: 'center' }, props.sx)}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
            >
            {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <NavLink exact to={page.path} style={{textDecoration:"none"}}><Typography textAlign="center">{page.name}</Typography></NavLink>
                </MenuItem>
            ))}
            </Menu>
        </Box>
    );
};

export default DropdownMenu;

