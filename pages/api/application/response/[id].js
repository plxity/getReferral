import dbConnect from '../../../../lib/connectMainDB';
import Responses from '../../../../Schema/responses';
import { getSession } from 'next-auth/react';

dbConnect();

// used for fetching a particular job opening
export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    if (!session) {
      res.status(401).json({
        responses: {
          error: true,
          errorMessage: 'Please login to view responses',
        },
      });
    }
    const { id } = session;
    const {
      query: { id: postId },
    } = req;

    const fetchResponseObject = await Responses.findOne({
      applicationId: postId,
      creator: id,
    });
    if (!fetchResponseObject) {
      res.status(200).json({ responses: [] });
    }
    const { responses = [] } = fetchResponseObject;
    res.status(200).json({ responses: responses });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
