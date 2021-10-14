import Grid from '@mui/material/Grid';
import Head from 'next/head';
import AuthForm from '../components/AuthForm';

import type { NextPage, NextPageContext, GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

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

export async function getServerSideProps(
  context: NextPageContext
): GetServerSideProps {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
}

export default AuthPage;
