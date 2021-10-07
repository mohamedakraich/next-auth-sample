import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Head from 'next/head';
import MainAppBar from '../components/MainAppBar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Auth Sample</title>
      </Head>
      <main>
        <MainAppBar />
        <Grid container justifyContent="center">
          <Typography variant="h2" component="h2">
            Welcome On Board
          </Typography>
        </Grid>
      </main>
    </div>
  );
};

export default Home;
