import React from 'react';
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { getSession } from 'next-auth/react';
import UserProfile from '../components/UserProfile';

const ProfilePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Profile Page</title>
      </Head>
      <UserProfile />
    </React.Fragment>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession({ req: context.req });
  if (!session)
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  return {
    props: { session },
  };
}

export default ProfilePage;
