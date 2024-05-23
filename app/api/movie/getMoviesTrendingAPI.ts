"use server";

import apiClient from "@/app/apiClient";
import { API_ROUTES } from "@/lib/enum";

const getMoviesTrendingAPI = async () => {
  let errors = null;
  let response = null;

  try {
    response = await apiClient.get(API_ROUTES.MOVIE_TRENDING);
    response = response.data;

    return { response, errors };
  } catch (error) {
    return { response, errors: error };
  }
};

export default getMoviesTrendingAPI;
