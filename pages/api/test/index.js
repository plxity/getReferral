import axios from 'axios';

export default async function handler(req, res) {
  try {
    let peerlistDetails = await axios.get(
      `https://peerlist.io/api/v1/users/resume?username=plxity`
    );
    return res.status(200).json({ status: peerlistDetails.data });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
}
