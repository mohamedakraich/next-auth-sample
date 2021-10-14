import * as React from 'react';
import { useSession, signOut } from 'next-auth/react';

import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Layout: React.FC = ({ children }) => {
  const { data: session, status } = useSession();

  const logoutHandler = () => {
    signOut();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              color="white"
              component="a"
              sx={{ flexGrow: 1 }}
            >
              Next Auth
            </Typography>
            {!session && status !== 'loading' && (
              <Link href="/auth" passHref>
                <Button color="inherit" sx={{ mr: 2 }}>
                  Login
                </Button>
              </Link>
            )}
            {session && (
              <Link href="/profile" passHref>
                <Button color="inherit" sx={{ mr: 2 }}>
                  Profile
                </Button>
              </Link>
            )}
            {session && (
              <Button
                variant="outlined"
                color="inherit"
                onClick={logoutHandler}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Offset />
        <main>{children}</main>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
