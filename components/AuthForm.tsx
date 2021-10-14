import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const theme = createTheme();

interface SignInReturnType {
  /**
   * Will be different error codes,
   * depending on the type of error.
   */
  error: string | undefined;
  /**
   * HTTP status code,
   * hints the kind of error that happened.
   */
  status: number;
  /**
   * `true` if the signin was successful
   */
  ok: boolean;
  /**
   * `null` if there was an error,
   * otherwise the url the user
   * should have been redirected to.
   */
  url: string | null;
}

const createUser = async (email: string, password: string) => {
  try {
    const response: AxiosResponse = await axios.post('/api/auth/signup', {
      email,
      password,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('isAxiosError');
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      }
    } else {
      console.log('Error', error.message);
    }
  }
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLogin) {
      const result = (await signIn('credentials', {
        email,
        password,
        redirect: false,
      })) as unknown as SignInReturnType;
      if (!result.error) {
        router.replace('/profile');
      } else {
        console.log(result.error);
      }
    } else {
      await createUser(email, password);
    }
  };

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLogin ? 'Sign IN' : ' Sign UP'}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLogin ? 'Sign IN' : ' Sign UP'}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button variant="text" onClick={switchAuthModeHandler}>
                  {isLogin
                    ? "Don't have an account? Sign UP"
                    : 'Already have an account? Sign IN'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AuthForm;
