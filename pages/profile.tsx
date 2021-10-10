import type { NextPage } from 'next';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Profile Page</title>
      </Head>
      <Grid container justifyContent="center">
        <Typography variant="h2" component="h2">
          Profile Page
        </Typography>
      </Grid>
    </div>
  );
};

export default ProfilePage;
