"use server";

import apiClient from "@/app/apiClient";
import { API_ROUTES } from "@/lib/enum";

const getTrendingAPI = async () => {
  let errors = null;
  let response = null;

  try {
    response = await apiClient.get(API_ROUTES.ALL_TRENDING);
    response = response.data;
    return { response, errors };
  } catch (error) {
    return { response, error: error };
  }
};

export default getTrendingAPI;
