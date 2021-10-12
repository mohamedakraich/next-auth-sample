import { MongoClient } from 'mongodb';

const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://mohamed:IU3w1ojlXjbHGE6K@next-auth-sample.xzumf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
  return client;
};

export default connectToDatabase;
