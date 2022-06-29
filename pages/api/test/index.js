//

import axios from 'axios';

const handler = async (req, resp) => {
  const response = await axios.get(
    `https://internal-dashboard-production.up.railway.app/api/v1/resume?username=plxity`
  );

  resp.send({
    success: true,
    data: response.data,
  });
};

export default handler;
