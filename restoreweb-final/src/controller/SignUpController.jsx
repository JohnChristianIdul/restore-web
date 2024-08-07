import axios from "axios";

const baseUrl = 'http://localhost:8080/listed/api/register';

export const addUser = (user) => {
  return axios.post(baseUrl, user);
};

export const handleSignUp = async (e, user, navigate) => {
  e.preventDefault();
  console.log(user);

  try {
    const response = await addUser(user);
    console.log(response.data);
    navigate('/login');
  } catch (error) {
    console.error('Error:', error);
  }
};
