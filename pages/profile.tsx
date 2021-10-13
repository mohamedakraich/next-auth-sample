import React from 'react';
import type { NextPage, NextContext } from 'next';
import Head from 'next/head';
import { getSession } from 'next-auth/react';
import UserProfile from '../components/UserProfile';
import { GetServerSideProps } from 'next';

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

export async function getServerSideProps(
  context: NextContext
): GetServerSideProps {
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
