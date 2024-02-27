import axios from 'axios';

const baseUrl = 'http://localhost:8080/information';

export const apiGet = (params) => {
  return axios.get(baseUrl, { params: params });
};

export const apiPost = (data) => {
  return axios.post(baseUrl, data);
};
