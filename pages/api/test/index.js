import axios from 'axios';


const handler = async (req, resp) => {
	const response = await axios.get(
		`https://peerlist.io/api/v1/users/resume?username=plxity`
	);

	resp.send({
		success: true,
		data: response.data,
	});
};

export default handler;
