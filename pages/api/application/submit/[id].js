import axios from 'axios';
import dbConnect from '../../../../lib/connectMainDB';
import Responses from '../../../../Schema/responses';

dbConnect();

export default async function handler(req, res) {
  try {
    const {
      query: { id },
      body,
    } = req;
    const PEERLIST_URL = process.env.PEERLIST_URL;
    const { email, peerlistUserName, userId } = body;
    const fetchAllResponses = await Responses.findOne({
      applicationId: id,
    });
    console.log(fetchAllResponses, PEERLIST_URL);
    let peerlistDetails = await axios.get(
      `${PEERLIST_URL}username=${peerlistUserName}`
    );
    console.log(peerlistDetails);
    peerlistDetails = peerlistDetails?.data?.data;
    const {
      skills = [],
      firstName,
      lastName,
      location,
      experience,
    } = peerlistDetails;
    if (!fetchAllResponses) {
      let newResponse = {
        creator: userId,
        applicationId: id,
        responses: [
          {
            skills,
            firstName,
            lastName,
            location,
            experience,
            email,
            peerlistUserName,
          },
        ],
      };
      let firstResponse = new Responses({
        ...newResponse,
      });
      await firstResponse.save();
    } else {
      const userData = {
        skills,
        firstName,
        lastName,
        location,
        experience,
        email,
        peerlistUserName,
      };
      fetchAllResponses.responses.push({ ...userData });
      await fetchAllResponses.save();
    }
    res.status(200).json({ status: 'Successfully submitted' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
