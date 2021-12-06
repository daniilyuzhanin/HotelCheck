import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
  return (
    <Box>
      <AppBar position="static" color="transparent" style={{ boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Hotel Check
          </Typography>
          <Button color="inherit">
            Выйти
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}