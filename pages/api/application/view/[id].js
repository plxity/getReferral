import dbConnect from '../../../../lib/connectMainDB';
import Profile from '../../../../Schema/profiles';
import { getSession } from 'next-auth/react';

dbConnect();

// used for fetching a particular job opening
export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    const { id: postId } = req.query;
    let id, userProfile, fetchParticularApplication;
    if (session) {
      id = session.id;
      userProfile = await Profile.findOne({
        userId: id,
      });
      fetchParticularApplication = userProfile.applicationsCreated.filter(
        (application) => {
          return application._id.toString() === postId;
        }
      );
    } else {
      fetchParticularApplication = await Profile.find().elemMatch(
        'applicationsCreated',
        { _id: postId }
      );
      if (!fetchParticularApplication) {
        res.status(200).json({
          application: [],
          userId: null,
        });
      }
      fetchParticularApplication =
        fetchParticularApplication[0].applicationsCreated;
      userProfile = {
        userId: fetchParticularApplication[0].userId,
      };
    }

    res.status(200).json({
      application: fetchParticularApplication,
      userId: userProfile?.userId || null,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
