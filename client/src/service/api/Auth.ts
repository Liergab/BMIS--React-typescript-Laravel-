
import axios from "axios";
import { AdminLoginTypes, 
         ResidentLoginTypes, 
         ResidentSigninTypes } from "../../types";
// import { useQuery } from "@tanstack/react-query";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

// const axiosInstance = axios.create({
//     withCredentials: true, // Include credentials in requests
//     // Other axios instance configurations if needed
//   });

// const storedUserData = localStorage.getItem('AdminInfo');
// const { token, user } = storedUserData ? JSON.parse(storedUserData) : {};

// // Now you can use the 'token' and 'user' variables as needed
// console.log(token); // Access the token
// console.log(user);  



export const useAdminLoginApi = async(AdminData:AdminLoginTypes) => {
    const response =   await axios.post(`${apiUrl}/login`, AdminData, {
      headers:{
          'content-type' : 'application/json'
      }
  });
  return response.data
}

export const useResidentLoginApi = async(ResidentData:ResidentLoginTypes) => {
    const response =   await axios.post(`${apiUrl}/login/resident`, ResidentData, {
      headers:{
          'content-type' : 'application/json'
      }
  });
  return response.data
}

export const useResidentSignApi = async(ResidentSignInData:ResidentSigninTypes) => {
  const response =   await axios.post(`${apiUrl}/register/resident`, ResidentSignInData, {
    headers:{
        'content-type' : 'application/json'
    }
});
return response.data
}
