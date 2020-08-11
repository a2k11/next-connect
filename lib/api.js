import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getUser = async (userId) => {
  const { data } = await axios.get(`/api/users/profile/${userId}`);
  return data;
};
