import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const MainAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Next Auth
          </Typography>
          <Button color="inherit" sx={{ mr: 2 }}>
            Login
          </Button>
          <Button color="inherit" sx={{ mr: 2 }}>
            Profile
          </Button>
          <Button variant="outlined" color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
};

export default MainAppBar;
