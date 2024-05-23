"use server";

import apiClient from "@/app/apiClient";
import { API_ROUTES } from "@/lib/enum";

const getMediaDetailsAPI = async (media: string, mediaId: number) => {
  let error = null;
  let response = null;

  try {
    response = await apiClient.get(
      API_ROUTES.MEDIA_DETAILS.replace(":media", media).replace(
        ":mediaId",
        mediaId.toString()
      )
    );

    response = response.data;
    return { response, error };
  } catch (error) {
    return { response, error: error };
  }
};

export default getMediaDetailsAPI;
