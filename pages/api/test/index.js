import axios from 'axios';

export default async function handler(req, res) {
  fetch('https://peerlist.io/api/v1/users/resume?username=plxity')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
