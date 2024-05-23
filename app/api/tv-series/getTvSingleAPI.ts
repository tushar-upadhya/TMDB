"use server";

import apiClient from "@/app/apiClient";
import { API_ROUTES } from "@/lib/enum";

const getTvSingleAPI = async (tvId: number) => {
  let errors = null;
  let response = null;

  try {
    response = await apiClient.get(`${API_ROUTES.TV_SINGLE}/${tvId}`);
    response = response.data;

    return { response, errors };
  } catch (error) {
    return { response, errors: error };
  }
};

export default getTvSingleAPI;
