import dbConnect from '../../../lib/connectMainDB';
import Profile from '../../../Schema/profiles';
import { getSession } from 'next-auth/react';

dbConnect();

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    const { id } = session;
    const { body } = req;
    let userProfile = await Profile.findOne({ userId: id });
    if (!userProfile) {
      let newProfileObj = {
        applicationsCreated: [{ ...body }],
        userId: id,
      };
      const newProfile = new Profile({
        ...newProfileObj,
      });
      const profile = await newProfile.save();
      return res.status(200).json({ profile });
    } else {
      userProfile.applicationsCreated.push(body);
      const recentlyCreatedApplication =
        userProfile.applicationsCreated[
          userProfile.applicationsCreated.length - 1
        ];
      await userProfile.save();
      return res.status(200).json({ application: recentlyCreatedApplication });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
