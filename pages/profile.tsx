import type { NextPage } from 'next';
import Head from 'next/head';
import Box from '@mui/material/Box';
import UserProfile from '../components/UserProfile';

const ProfilePage: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Profile Page</title>
      </Head>
      <UserProfile />
    </Box>
  );
};

export default ProfilePage;
