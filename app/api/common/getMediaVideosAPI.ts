"use server";

import apiClient from "@/app/apiClient";
import { API_ROUTES } from "@/lib/enum";

const getMediaVideosAPI = async (media: string, mediaId: number) => {
  let errors = null;
  let response = null;
  try {
    response = await apiClient.get(
      API_ROUTES.MEDIA_VIDEOS.replace(":media", media).replace(
        ":mediaId",
        mediaId.toString()
      )
    );

    response = response.data;

    return { response, errors };
  } catch (error) {
    return { response, errors };
  }
};

export default getMediaVideosAPI;
