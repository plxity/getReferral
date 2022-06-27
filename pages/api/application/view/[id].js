import dbConnect from '../../../../lib/connectMainDB';
import Profile from '../../../../Schema/profiles';
import { getSession } from 'next-auth/react';

dbConnect();

// used for fetching a particular job opening
export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    const { id: postId } = req.query;
    let id, userProfile, fetchAllApplications;
    fetchAllApplications = await Profile.findOne().elemMatch(
      'applicationsCreated',
      { _id: postId }
    );
    if (!fetchAllApplications) {
      return res.status(200).json({
        application: [],
        userId: null,
      });
    }
    const { userId, applicationsCreated } = fetchAllApplications;
    const requestedApplication = applicationsCreated.find((app) => {
      return app._id.toString() === postId;
    });

    return res.status(200).json({
      application: [requestedApplication],
      userId: userId,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
