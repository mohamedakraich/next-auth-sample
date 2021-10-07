import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Auth Sample</title>
      </Head>
      <main>
        <Typography variant="body1" component="p">
          Welcome OnBoard
        </Typography>
      </main>
    </div>
  );
};

export default Home;
