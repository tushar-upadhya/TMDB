"use server";

import apiClient from "@/app/apiClient";
import { API_ROUTES } from "@/lib/enum";

const getTvPopularAPI = async (page: number = 1) => {
  let errors = null;
  let response = null;

  try {
    response = await apiClient.get(`${API_ROUTES.TV_POPULAR}?page=${page}`);
    response = response.data;

    return { response, errors };
  } catch (error) {
    return { response, errors: error };
  }
};

export default getTvPopularAPI;
