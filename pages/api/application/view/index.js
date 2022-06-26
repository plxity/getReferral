import dbConnect from '../../../../lib/connectMainDB';
import Profile from '../../../../Schema/profiles';
import { getSession } from 'next-auth/react';

dbConnect();

// used to fetching all the job applications
export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    const { id } = session;
    const fetchAllApplications = await Profile.findOne({ userId: id });
    res.status(200).json({ profile: fetchAllApplications });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
