import axios from 'axios';
import qs from 'qs';

const getAuth = async () => {
  const clientId = "e879de77d562402b871136c47c23b97c";
  const clientSecret = "daa7fbeb4fba41fb9eeeadff108bdb1e";
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export default getAuth;
