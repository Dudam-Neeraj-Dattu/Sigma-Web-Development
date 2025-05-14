import axios from "axios";

const API_BASE = "http://localhost:3000/api/passwords";

export const fetchPasswords = async () => {
   const response = await axios.get(API_BASE);
   return response.data;
};

export const createPassword = async (password) => {
   const response = await axios.post(API_BASE, password);
   return response.data;
};

export const deletePasswordById = async (id) => {
   const response = await axios.delete(`${API_BASE}/${id}`);
   return response.data;
};

export const updatePasswordById = async (id, password) => {
   const response = await axios.put(`${API_BASE}/${id}`, password);
   return response.data;
};
