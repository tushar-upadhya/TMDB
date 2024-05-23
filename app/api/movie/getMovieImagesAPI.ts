"use server";

import apiClient from "@/app/apiClient";
import { API_ROUTES } from "@/lib/enum";

const getMovieImagesAPI = async (movieId: number) => {
  let errors = null;
  let response = null;

  try {
    response = await apiClient.get(
      API_ROUTES.MOVIE_IMAGES.replace(":movieId", movieId.toString())
    );
    response = response.data;
    return { response, errors };
  } catch (error) {
    return { response, errors: error };
  }
};

export default getMovieImagesAPI;
