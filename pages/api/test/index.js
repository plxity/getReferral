import axios from 'axios';

export default async function handler(req, res) {
  fetch('https://peerlist.io/api/v1/users/resume?username=plxity')
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return res.send(200);
    })
    .catch((err) => {
      console.log(err);
      return res.send(400);
    });
}
