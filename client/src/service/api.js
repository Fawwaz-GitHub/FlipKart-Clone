import axios from "axios"

const URL = process.env.REACT_APP_BASE_URL;

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log('Error while calling signup', error);
    }
}

export const authenticateLogin = async (data) => {
    try {
       const res =  await axios.post(`${URL}/login`, data)
       return res
    } catch (error) {
        console.log('Error while calling login', error);
        return error.response;
    }
}

export const payusingPaytm = (data) => {
    try {
        const response = axios.post(`${URL}/payment`,data)
        return response
    } catch (error) {
        console.log('Error While Calling API');
    }
}