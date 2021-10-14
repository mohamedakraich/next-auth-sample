import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { hashPassword, verifyPassword } from '../../../lib/auth';
import connectToDatabase from '../../../lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PATCH') {
    return;
  }
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Not Authenticated!' });
    return;
  }

  const userEmail = session.user?.email;
  const { newPassword, oldPassword } = req.body;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');
  const user = await usersCollection.findOne({
    email: userEmail,
  });

  if (!user) {
    res.status(404).json({ message: 'User not found!' });
    client.close();
    return;
  }

  const passwordsEqual = await verifyPassword(oldPassword, user.password);

  if (!passwordsEqual) {
    res.status(403).json({ message: 'Invalid Password' });
    client.close();
    return;
  }

  const hashedNewPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedNewPassword } }
  );

  client.close();
  res.status(200).json({ message: 'Password Updated' });
};
