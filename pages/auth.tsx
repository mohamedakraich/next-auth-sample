import Grid from '@mui/material/Grid';
import Head from 'next/head';
import AuthForm from '../components/AuthForm';

import type { NextPage } from 'next';

const AuthPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Auth Sample</title>
      </Head>
      <main>
        <Grid container justifyContent="center">
          <Grid item>
            <AuthForm />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default AuthPage;
