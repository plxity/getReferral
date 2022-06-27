import axios from 'axios';
import dbConnect from '../../../lib/connectMainDB';


dbConnect();

export default async function handler(req, res) {
  try {
    let peerlistDetails = await axios.get(`${PEERLIST_URL}username=plxity`);

    return res.status(200).json({ status: peerlistDetails });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
