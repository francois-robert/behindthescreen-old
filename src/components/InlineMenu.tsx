import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const pages = [
  {name: "Dashboard", path: "/"},
  {name: "Personnages", path: "/characters"}
]

const InlineMenu = (props: { sx: any; }) => {
    return (
      <Box sx={Object.assign({ flexGrow: 10, alignItems: 'center' }, props.sx)}>
        {pages.map((page) => (
            <NavLink exact to={page.path} style={{textDecoration:"none"}}><Typography textAlign="center">{page.name}</Typography></NavLink>
        ))}
      </Box>
    );
};

export default InlineMenu;