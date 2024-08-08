import axios from "axios";

const baseUrl = 'http://localhost:8080/listed/api/login';

export const loginUser = (userCredentials) => {
    return axios.post(baseUrl, userCredentials);
};

export const handleLogin = async (e, userCredentials, navigate) => {
    e.preventDefault();
    console.log(userCredentials);

    try {
        const response = await loginUser(userCredentials);
        console.log(response.data);
        navigate('/sign-up');
    } catch {
        console.error('Error Login: ', error);
    }
}
