import { API_URL } from '@/config';
import axiosBase from 'axios';

const axios = axiosBase.create({
  baseURL: API_URL,
});

export const getAllApartments = () => {
  return axios.get('/apartments');
};

export const getApartmentDetails = id => {
  return axios.get(`/apartments/${id}`);
};

export const addApartment = apartment => {
  return axios.post('/apartments', apartment);
};
