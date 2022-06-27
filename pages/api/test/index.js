import axios from 'axios';
import dbConnect from '../../../lib/connectMainDB';


// dbConnect();

export default async function handler(req, res) {
  try {
    const PEERLIST_URL = process.env.PEERLIST_URL;
    let peerlistDetails = await axios.get(`${PEERLIST_URL}username=plxity`);
    return res.status(200).json({ status: peerlistDetails.data.data });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
}
